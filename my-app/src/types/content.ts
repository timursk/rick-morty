export default interface Content {
  // [key: string]: string | boolean | File | null;
  [key: string]: string | boolean | FileList | null;
  searchValue: string;
  form: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  consent: boolean;
  notify: boolean;
  // profilePicture: File | null;
  profilePicture: FileList | null;
}
