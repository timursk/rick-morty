import appContent from '../types/store/appContent';
import sortTypes from '../types/store/sortTypes';
import { ApiMaxCards } from '../utils/constants';

const initialAppState: appContent = {
  form: {
    firstName: '',
    lastName: '',
    birthDate: '',
    country: '',
    consent: false,
    notify: false,
    profilePicture: null,
  },
  mainPage: {
    isLoading: true,
    searchValue: '',
    sort: sortTypes.DEFAULT,
    isFetching: true,
    currentPage: 1,
    perPage: ApiMaxCards,
    totalCardsCount: null,
    totalPagesCount: null,
    totalApiPagesCount: null,
    cards: [],
    pickedCard: null,
  },
};

export default initialAppState;
