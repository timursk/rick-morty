import appContent from '../types/store/appContent';
import sortTypes from '../types/store/sortTypes';
import { ApiMaxCards } from '../utils/constants';

const initialAppState: appContent = {
  form: {
    // form: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    country: '',
    consent: false,
    notify: false,
    profilePicture: null,
  },
  mainPage: {
    searchValue: '',
    sort: sortTypes.DEFAULT,
    isFetching: true,
    currentPage: 1,
    perPage: ApiMaxCards,
    totalCount: 0,
  },
};

export default initialAppState;
