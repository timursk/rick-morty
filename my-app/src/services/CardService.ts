import { Characters } from '../types/apiTypes/characters';
import { URL } from '../utils/constants';

const resources = {
  character: '/character',
};
const filter = {
  byName: `?name=`,
  byPage: `?page=`,
};

export const getAllCharacters = async (): Promise<Characters> => {
  const link = `${URL}${resources.character}`;
  const response = await fetch(link);
  const data = response.json();
  return data;
};

export const getCharactersByPage = async (page: number): Promise<Characters> => {
  const link = `${URL}${resources.character}${filter.byPage}${page}`;
  const response = await fetch(link);
  const data = response.json();
  return data;
};

export const getCharactersByLink = async (link: string): Promise<Characters> => {
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
