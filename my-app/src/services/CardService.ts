import { Characters } from '../utils/types';

const URL = 'https://rickandmortyapi.com/api';

export const getImages = async () => {
  const response = await fetch(`${URL}/photos`);
  const data = response.json();
  return data;
};

export const getAllCharacters = async (): Promise<Characters> => {
  const response = await fetch(`${URL}/character`);
  const data = response.json();
  return data;
};

export const getCharacterByName = async (name: string) => {
  const filter = `?name=${name}`;
  const response = await fetch(`${URL}/character${filter}`);
  const data = response.json();
  return data;
};
