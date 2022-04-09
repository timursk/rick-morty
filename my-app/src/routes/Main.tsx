import React from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import { getAllCharacters, getCharacterByName } from '../services/CardService';
import { Character } from '../utils/types';

type MainProps = Record<string, never>;
type MainState = { loading: boolean; data: Character[] };

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      loading: true,
      data: null,
    };
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

  render() {
    const { loading, data } = this.state;
    if (loading) {
      return <h2>Loading</h2>;
    }

    return (
      <div data-testid="main-page">
        <Input />
        <div className="cards-container">
          {data &&
            data.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
        </div>
      </div>
    );
  }
}

export default Main;
