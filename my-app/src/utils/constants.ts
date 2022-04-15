export const ErrorInitial = {
  firstName: {
    isValid: true,
    message: '',
  },
  lastName: {
    isValid: true,
    message: '',
  },
  birthDate: {
    isValid: true,
    message: '',
  },
  country: {
    isValid: true,
    message: '',
  },
  consent: {
    isValid: true,
    message: '',
  },
  notify: {
    isValid: true,
    message: '',
  },
  profilePicture: {
    isValid: true,
    message: '',
  },
};

export enum FormInputs {
  firstName = 'firstName',
  lastName = 'lastName',
  birthDate = 'birthDate',
  country = 'country',
  consent = 'consent',
  notify = 'notify',
  profilePicture = 'profilePicture',
}

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
