import { Characters } from '../utils/types';

const URL = 'https://rickandmortyapi.com/api';
const resources = {
  character: '/character',
};
const filter = {
  byName: `?name=`,
};

export const getAllCharacters = async (): Promise<Characters> => {
  const link = `${URL}${resources.character}`;
  const response = await fetch(link);
  const data = response.json();
  return data;
};

export const getCharacterByName = async (name: string): Promise<Characters> => {
  const link = `${URL}${resources.character}${filter.byName}${name}`;
  const response = await fetch(link);
  const data = response.json();
  return data;
};
