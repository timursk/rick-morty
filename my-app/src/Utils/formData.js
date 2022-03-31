const formData = [
  {
    info: 'Name: ',
    name: 'firstName',
    errorMessage: '* - Enter your name!',
    type: 'text',
    className: 'form-input',
  },
  {
    info: 'Surname: ',
    name: 'lastName',
    errorMessage: '* - Enter your Surname!',
    type: 'text',
    className: 'form-input',
  },
  {
    info: 'Date of Birth: ',
    name: 'birthDate',
    errorMessage: '* - Enter your Date!',
    type: 'date',
    className: 'form-input',
  },
  {
    info: 'Consent to the processing of personal data ',
    name: 'consent',
    errorMessage: '* - Need your consent!',
    type: 'checkbox',
    labelClass: 'checkbox-item',
  },
  {
    info: 'Receive notifications ',
    name: 'notify',
    errorMessage: '* - Need your consent!',
    type: 'checkbox',
    labelClass: 'checkbox-item',
  },
  {
    info: 'Profile picture ',
    name: 'profilePicture',
    errorMessage: '* - Upload image!',
    type: 'file',
    // accept="image/*"
  },
];

export default formData;
