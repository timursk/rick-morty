import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersByLink } from '../../services/CardService';

const fetchCharacterByLink = createAsyncThunk('fetchByLink', getCharactersByLink);

export default fetchCharacterByLink;
