import { Characters } from '../utils/types';

const URL = 'https://rickandmortyapi.com/api';

export const getAllCharacters = async (): Promise<Characters> => {
  const response = await fetch(`${URL}/character`);
  const data = response.json();
  return data;
};

export const getCharacterByName = async (name: string): Promise<Characters> => {
  const filter = `?name=${name}`;
  const response = await fetch(`${URL}/character${filter}`);
  const data = response.json();
  return data;
};
