import Content from '../types/content';
import sortTypes from '../types/sortTypes';

const initialState: Content = {
  searchValue: '',
  sort: sortTypes.DEFAULT,
  form: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  country: '',
  consent: false,
  notify: false,
  profilePicture: null,
};

export default initialState;
