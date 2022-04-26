import { storeForm } from '../types/store/storeForm';

export enum ErrorMessage {
  firstName = ' * - Invalid name value!',
  lastName = ' * - Invalid surname value!',
  birthDate = ' * - Enter date!',
  isAdult = ' * - Wrong age(need >=18 && <=100)!',
  country = ' * - Pick country!',
  consent = ' * - need consent!',
  notify = ' * - need consent!',
  profilePicture = ' * - Upload image!',
}

export const ApiMaxCards = 20;

export const URL = 'https://rickandmortyapi.com/api';

export const initialForm: storeForm = {
  firstName: '',
  lastName: '',
  birthDate: '',
  country: '',
  consent: false,
  notify: false,
  profilePicture: null,
};
