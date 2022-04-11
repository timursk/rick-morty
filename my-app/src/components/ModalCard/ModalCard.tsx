import React, { Component, MouseEvent } from 'react';
import { Character } from '../../utils/types';
import Modal from '../Modal/Modal';
import './ModalCard.css';

type Props = {
  character: Character;
  onClick: () => void;
};
type State = Record<string, never>;

export default class ModalCard extends Component<Props, State> {
  handleClick(ev: MouseEvent) {
    ev.stopPropagation();
  }

  render() {
    const { onClick } = this.props;
    const { gender, image, location, name, species, status } = this.props.character;

    return (
      <Modal>
        <div onClick={onClick} className="modal-container">
          <div
            onClick={(ev) => this.handleClick(ev)}
            className="card modal-card"
            data-testid="modal-card"
          >
            <img className="card-img modal-card__img" src={image} alt="item" />
            <div className="modal-card__info">
              <p>
                Name: <span className="modal-card__content">{name}</span>
              </p>
              <p>
                Gender: <span className="modal-card__content">{gender}</span>
              </p>
              <p>
                Location: <span className="modal-card__content">{location.name}</span>
              </p>
              <p>
                Species: <span className="modal-card__content">{species}</span>
              </p>
              <p>
                Status: <span className="modal-card__content">{status}</span>
              </p>
            </div>
            <button onClick={onClick} className="modal-card__btn"></button>
          </div>
        </div>
      </Modal>
    );
  }
}
// created: "2017-11-04T18:50:21.651Z"
// episode: (51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
// gender: "Male"
// id: 2
// image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
// location: {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
// name: "Morty Smith"
// origin: {name: 'unknown', url: ''}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmo
