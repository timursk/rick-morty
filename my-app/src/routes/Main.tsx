import React, { createRef, FormEvent, RefObject } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import { getAllCharacters, getCharacterByName } from '../services/CardService';
import { Character } from '../utils/types';
import loader from '../assets/loading.svg';
import ModalCard from '../components/ModalCard/ModalCard';

type MainProps = Record<string, never>;
type MainState = {
  loading: boolean;
  data: Character[];
  showModal: boolean;
  modalContent: Character;
};

class Main extends React.Component<MainProps, MainState> {
  input: RefObject<HTMLInputElement>;
  constructor(props: MainProps) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      showModal: false,
      modalContent: null,
    };
    this.input = createRef();
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    getAllCharacters().then((result) => {
      const data = result.results;
      this.setState({
        loading: false,
        data,
      });
    });
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const name = this.input.current.value;
    this.setState({ loading: true });

    getCharacterByName(name).then((result) => {
      const data = result.results;
      this.setState({
        loading: false,
        data,
      });
    });
  }

  handleShow(item: Character) {
    item &&
      this.setState({
        showModal: true,
        modalContent: item,
      });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const { loading, data, showModal, modalContent } = this.state;

    return (
      <div data-testid="main-page">
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <Input refInput={this.input} />
        </form>
        {loading ? (
          <img className="loader" src={loader} alt="loader" data-testid="loader" />
        ) : data ? (
          <div className="cards-container">
            {data.map((item) => {
              return <Card onClick={this.handleShow} item={item} key={item.id} />;
            })}
          </div>
        ) : (
          <p className="info-error">no info</p>
        )}
        {showModal && <ModalCard character={modalContent} onClick={this.handleHide} />}
      </div>
    );
  }
}

export default Main;
