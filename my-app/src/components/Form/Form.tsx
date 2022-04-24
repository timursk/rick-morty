import React, { useContext, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card } from '../../routes/Routes/FormPage/FormPage';
import AppContext from '../../store/store';
import FormComponent from '../FormComponent/FormComponent';

type InputProps = {
  addCard: (item: Card) => void;
};

export type Inputs = {
  [key: string]: string | boolean | FileList;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  consent: boolean;
  notify: boolean;
  profilePicture: FileList;
};

const Form = (props: InputProps) => {
  const { state } = useContext(AppContext);
  const [isSubmitDisable, setSubmitDisable] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<Inputs>({
    defaultValues: {
      ...state,
    },
  });

  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

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

    setSubmitDisable(false);
  };

  const onError = () => {
    setSubmitDisable(true);
  };

  useEffect(() => {
    isSubmitSuccessful &&
      reset({
        firstName: '',
        lastName: '',
        birthDate: '',
        country: 'Russia',
        consent: false,
        notify: false,
        profilePicture: null,
      });
  }, [isSubmitSuccessful, reset]);

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
