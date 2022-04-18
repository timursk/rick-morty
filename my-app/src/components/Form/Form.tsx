import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card } from '../../routes/FormPage';
import FormComponent from '../FormComponent/FormComponent';

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
  );
};

export default Form;
