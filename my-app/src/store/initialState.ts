import Content from '../types/store/content';
import sortTypes from '../types/store/sortTypes';
import { ApiMaxCards } from '../utils/constants';

const initialState: Content = {
  searchValue: '',
  sort: sortTypes.DEFAULT,
  perPage: `${ApiMaxCards}`,
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
