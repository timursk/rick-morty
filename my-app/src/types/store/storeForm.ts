export interface storeForm {
  // form: string;
  [key: string]: string | boolean | FileList;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  consent: boolean;
  notify: boolean;
  profilePicture: FileList | null;
}
