import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// import AppContext from '../../store/store';
import { formCardType } from '../../types/form/formCardType';
import { Inputs } from '../../types/form/inputs';
import { initialForm } from '../../utils/constants';
import FormComponent from '../FormComponent/FormComponent';

type InputProps = {
  addCard: (item: formCardType) => void;
};

const Form = ({ addCard }: InputProps) => {
  // const { state } = useContext(AppContext);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isSubmitDisable, setSubmitDisable] = useState(false);
  const refFormValues = useRef(state.formReducer);

  const { register, handleSubmit, formState, reset } = useForm<Inputs>({
    defaultValues: {
      ...state.formReducer,
    },
  });

  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { firstName, lastName, birthDate, country, profilePicture } = data;

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
    if (isSubmitSuccessful) {
      reset(initialForm);
      refFormValues.current = initialForm;
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <FormComponent
      onSubmit={handleSubmit(onSubmit, onError)}
      errors={errors}
      register={register}
      isDirty={isDirty}
      isValid={isValid}
      isSubmitDisable={isSubmitDisable}
      refFormValues={refFormValues}
    />
  );
};

export default Form;
