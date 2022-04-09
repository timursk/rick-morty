import { ChangeEventHandler, RefObject } from 'react';

export type FormItemProps = {
  refInput: RefObject<HTMLInputElement>;
  errors: {
    isValid: boolean;
    message: string;
  };
  removeError: ChangeEventHandler<HTMLInputElement>;
};

export type FormItemSelectProps = {
  refInput: RefObject<HTMLSelectElement>;
  errors: {
    isValid: boolean;
    message: string;
  };
  removeError: ChangeEventHandler<HTMLSelectElement>;
};

export type Character = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

export type Characters = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};

export type CharactersAPI = Promise<Characters>;
