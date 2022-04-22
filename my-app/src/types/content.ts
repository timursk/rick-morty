import sortTypes from './sortTypes';

export default interface Content {
  [key: string]: string | boolean | FileList | null;
  searchValue: string;
  sort: sortTypes;
  form: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  consent: boolean;
  notify: boolean;
  profilePicture: FileList | null;
}
