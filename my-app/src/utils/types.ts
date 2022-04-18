import { UseFormRegister } from 'react-hook-form';
import { Inputs } from '../components/Form/Form';
import { FormErrors } from '../components/FormComponent/FormComponent';

export type FormItemProps = {
  errors: FormErrors;
  register: UseFormRegister<Inputs>;
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
