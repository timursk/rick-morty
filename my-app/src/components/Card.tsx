import React from 'react';
import { MainData } from '../routes/Main';

type CardProps = {
  item: MainData;
};
type CardState = Record<string, never>;

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.item.albumId}</p>
        <p>{this.props.item.id}</p>
        <p>{this.props.item.thumbnailUrl}</p>
        <p>{this.props.item.title}</p>
        <img src={this.props.item.url} alt="item" />
      </div>
    );
  }
}

export default Card;
