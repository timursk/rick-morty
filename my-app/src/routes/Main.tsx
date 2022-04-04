import React from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import { getImages } from '../services/CardService';
import { Utils } from '../utils/utils';

export type MainData = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
type MainProps = Record<string, never>;
type MainState = { loading: boolean; data: MainData[] };

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount() {
    getImages().then((result) => {
      const data = Utils.getRandomItems(result, 10);
      this.setState({
        loading: false,
        data,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }

    return (
      <div data-testid="main-page">
        <Input />
        <div className="cards-container">
          {this.state.data.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
