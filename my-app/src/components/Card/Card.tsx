import React from 'react';
import { MainData } from '../../routes/Main';
import './Card.css';

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
      <div className="card">
        <img className="card-img" src={this.props.item.thumbnailUrl} alt="item" />
        <p>Album id {this.props.item.albumId}</p>
        <p>ID {this.props.item.id}</p>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default Card;
