import React, { createRef, FormEvent, RefObject } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import { getAllCharacters, getCharacterByName } from '../services/CardService';
import { Character } from '../utils/types';
import loader from '../assets/loading.svg';

type MainProps = Record<string, never>;
type MainState = { loading: boolean; data: Character[] };

class Main extends React.Component<MainProps, MainState> {
  input: RefObject<HTMLInputElement>;
  constructor(props: MainProps) {
    super(props);
    this.state = {
      loading: true,
      data: null,
    };
    this.input = createRef();
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

  render() {
    const { loading, data } = this.state;

    return (
      <div data-testid="main-page">
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <Input refInput={this.input} />
        </form>
        {loading ? (
          <img className="loader" src={loader} alt="loader" />
        ) : (
          <div className="cards-container">
            {data &&
              data.map((item) => {
                return <Card item={item} key={item.id} />;
              })}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
