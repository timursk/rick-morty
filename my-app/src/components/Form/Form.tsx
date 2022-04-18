import React, { RefObject, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card } from '../../routes/FormPage';
import { ErrorInitial, ErrorMessage } from '../../utils/constants';
import FormComponent from '../FormComponent/FormComponent';
import FormLabel from '../FormLabel/FormLabel';

type InputProps = {
  addCard: (item: Card) => void;
};

export type Inputs = {
  form: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  consent: boolean;
  notify: boolean;
  profilePicture: FileList;
};

const Form = (props: InputProps) => {
  const [isSubmitDisable, setSubmitDisable] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<Inputs>();
  const { errors, isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { firstName, lastName, birthDate, country, profilePicture } = data;
    const { addCard } = props;

    addCard({
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      country: country,
      profilePicture: profilePicture[0],
    });

    reset();
    setSubmitDisable(false);
  };

  const onError = () => {
    setSubmitDisable(true);
  };

  return (
    <FormComponent
      onSubmit={handleSubmit(onSubmit, onError)}
      errors={errors}
      register={register}
      isDirty={isDirty}
      isValid={isValid}
      isSubmitDisable={isSubmitDisable}
    />
    // <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
    //   <FormLabel>
    //     <p>
    //       Name:
    //       {errors.firstName && <span className="error">{errors.firstName.message}</span>}
    //     </p>
    //     <input
    //       {...register('firstName', {
    //         minLength: { value: 3, message: ErrorMessage.firstName },
    //         required: ErrorMessage.firstName,
    //         pattern: { value: /[A-Za-z]/, message: ErrorMessage.firstName },
    //       })}
    //       type="text"
    //       className="form-input"
    //       data-testid="firstName"
    //     />
    //   </FormLabel>
    //   <FormLabel>
    //     <p>
    //       Surname:
    //       {errors.lastName && <span className="error">{errors.lastName.message}</span>}
    //     </p>
    //     <input
    //       {...register('lastName', {
    //         minLength: { value: 3, message: ErrorMessage.lastName },
    //         required: ErrorMessage.lastName,
    //         pattern: { value: /[A-Za-z]/, message: ErrorMessage.lastName },
    //       })}
    //       type="text"
    //       className="form-input"
    //       data-testid="lastName"
    //     />
    //   </FormLabel>
    //   <FormLabel>
    //     <p>
    //       Date of birth:
    //       {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}
    //     </p>
    //     <input
    //       {...register('birthDate', {
    //         required: ErrorMessage.birthDate,
    //       })}
    //       type="date"
    //       className="form-input"
    //       data-testid="birthDate"
    //     />
    //   </FormLabel>
    //   <FormLabel>
    //     <p>
    //       Choose country:
    //       {errors.country && <span className="error">{errors.country.message}</span>}
    //     </p>
    //     <select
    //       {...register('country', {
    //         required: ErrorMessage.country,
    //       })}
    //       defaultValue={'Russia'}
    //       className="form-input"
    //       data-testid="country"
    //     >
    //       <option value="Usa">Usa</option>
    //       <option value="Russia">Russia</option>
    //       <option value="Sweden">Sweden</option>
    //       <option value="Germany">Germany</option>
    //     </select>
    //   </FormLabel>
    //   <FormLabel labelClass="checkbox-item">
    //     <p>
    //       Consent to the processing of personal data :
    //       {errors.consent && <span className="error">{errors.consent.message}</span>}
    //     </p>
    //     <input
    //       {...register('consent', {
    //         required: ErrorMessage.consent,
    //         validate: (value) => value === true || ErrorMessage.consent,
    //       })}
    //       type="checkbox"
    //       data-testid="consent"
    //     />
    //   </FormLabel>
    //   <FormLabel labelClass="checkbox-item switch">
    //     <p>
    //       Receive notifications:
    //       {errors.notify && <span className="error">{errors.notify.message}</span>}
    //     </p>
    //     <input
    //       {...register('notify', {
    //         required: ErrorMessage.notify,
    //         validate: (value) => value === true || ErrorMessage.notify,
    //       })}
    //       type="checkbox"
    //       data-testid="notify"
    //     />
    //     <span className="slider" />
    //   </FormLabel>
    //   <FormLabel>
    //     <p>
    //       Profile picture:
    //       {errors.profilePicture && <span className="error">{errors.profilePicture.message}</span>}
    //     </p>
    //     <input
    //       {...register('profilePicture', {
    //         required: ErrorMessage.profilePicture,
    //       })}
    //       type="file"
    //       data-testid="profilePicture"
    //     />
    //   </FormLabel>

    //   <button
    //     disabled={!isDirty || isSubmitDisable ? !isValid : false}
    //     type="submit"
    //     className="submit-btn"
    //   >
    //     Submit
    //   </button>
    // </form>
  );
};

export default Form;
