import { storeForm } from './storeForm';
import { storeMainPage } from './storeMainPage';

export default interface appContent {
  form: storeForm;
  mainPage: storeMainPage;

  // [key: string]: string | boolean | FileList | null;
}
