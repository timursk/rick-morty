const formData = [
  {
    id: 1,
    info: 'Name: ',
    name: 'firstName',
    errorMessage: '* - Enter your name!',
    type: 'text',
    className: 'form-input',
  },
  {
    id: 2,
    info: 'Surname: ',
    name: 'lastName',
    errorMessage: '* - Enter your Surname!',
    type: 'text',
    className: 'form-input',
  },
  {
    id: 3,
    info: 'Date of Birth: ',
    name: 'birthDate',
    errorMessage: '* - Enter your Date!',
    secondErrorMessage: '* - Age under 18!',
    type: 'date',
    className: 'form-input',
  },
  {
    id: 4,
    info: 'Choose country: ',
    name: 'country',
    errorMessage: '* - Select country!',
    type: 'select',
    className: 'form-input',
  },
  {
    id: 5,
    info: 'Consent to the processing of personal data ',
    name: 'consent',
    errorMessage: '* - Need your consent!',
    type: 'checkbox',
    labelClass: 'checkbox-item',
  },
  {
    id: 6,
    info: 'Receive notifications ',
    name: 'notify',
    errorMessage: '* - Need your consent!',
    type: 'checkbox',
    labelClass: 'checkbox-item switch',
  },
  {
    id: 7,
    info: 'Profile picture ',
    name: 'profilePicture',
    errorMessage: '* - Upload image!',
    type: 'file',
    // accept="image/*"
  },
];

export default formData;
