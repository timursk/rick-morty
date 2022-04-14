import React, {
  ChangeEvent,
  createRef,
  FormEvent,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Card } from '../../routes/FormPage';
import { ErrorInitial } from '../../utils/constants';
import { Utils } from '../../utils/utils';
import FormComponent from '../FormComponent/FormComponent';

type ErrorItem = {
  isValid: boolean;
  message: string;
};
export type Error = {
  firstName: ErrorItem;
  lastName: ErrorItem;
  birthDate: ErrorItem;
  country: ErrorItem;
  consent: ErrorItem;
  notify: ErrorItem;
  profilePicture: ErrorItem;
};
type InputProps = {
  addCard: (item: Card) => void;
};
type InputState = {
  errors: Error;
  toAdd: boolean;
  disableSubmit: boolean;
};
export type RefItems = {
  form: RefObject<HTMLFormElement>;
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  birthDate: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  consent: RefObject<HTMLInputElement>;
  notify: RefObject<HTMLInputElement>;
  profilePicture: RefObject<HTMLInputElement>;
};

type Inputs = {
  form: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  consent: string;
  notify: string;
  profilePicture: string;
};

const Form = (props: InputProps) => {
  // const [errors, setErrors] = useState({ ...ErrorInitial });
  // const [toAdd, setToAdd] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  // const refItems = {
  //   form: useRef<HTMLFormElement>(),
  //   firstName: useRef<HTMLInputElement>(),
  //   lastName: useRef<HTMLInputElement>(),
  //   birthDate: useRef<HTMLInputElement>(),
  //   country: useRef<HTMLSelectElement>(),
  //   consent: useRef<HTMLInputElement>(),
  //   notify: useRef<HTMLInputElement>(),
  //   profilePicture: useRef<HTMLInputElement>(),
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };

  // const setError = (key: string, message: string) => {
  //   setErrors((prev) => {
  //     const newErrors = {
  //       ...prev,
  //       [key]: {
  //         isValid: false,
  //         message,
  //       },
  //     };
  //     return newErrors;
  //   });
  //   setDisableSubmit(true);
  //   setToAdd(false);
  // };

  // const validate = () => {
  //   const { firstName, lastName, birthDate, country, consent, notify, profilePicture } = refItems;
  //   const startMessage = ' * - ';
  //   let message = '';

  //   if (firstName.current.value.length < 2) {
  //     message = startMessage + 'Invalid name value!';
  //     setError('firstName', message);
  //   }

  //   if (lastName.current.value.length < 2) {
  //     message = startMessage + 'Invalid surname value!';
  //     setError('lastName', message);
  //   }

  //   if (birthDate.current.value === '') {
  //     message = startMessage + 'Enter date!';
  //     setError('birthDate', message);
  //   }
  //   if (birthDate.current.value !== '') {
  //     const isAdult = Utils.isAdult(birthDate.current.value);
  //     if (!isAdult) {
  //       message = startMessage + 'Wrong age(need >=18 && <=100)!';
  //       setError('birthDate', message);
  //     }
  //   }

  //   if (country.current.value === '') {
  //     message = startMessage + 'Pick country!';
  //     setError('country', message);
  //   }

  //   if (!consent.current.checked) {
  //     message = startMessage + 'need consent!';
  //     setError('consent', message);
  //   }

  //   if (!notify.current.checked) {
  //     message = startMessage + 'need consent!';
  //     setError('notify', message);
  //   }

  //   if (!profilePicture.current.files[0]) {
  //     message = startMessage + 'Upload image!';
  //     setError('profilePicture', message);
  //   }
  // };

  // const handleSubmit = (ev: FormEvent) => {
  //   ev.preventDefault();
  //   setToAdd(true);
  //   validate();
  // };

  // const removeError = (ev: ChangeEvent) => {
  //   const { name } = ev.target as HTMLInputElement;
  //   const newErrors = {
  //     ...errors,
  //     [name]: {
  //       isValid: true,
  //       message: '',
  //     },
  //   };
  //   setErrors(newErrors);
  // };

  const ableSubmit = () => {
    // for (const key in errors) {
    //   if (!errors[key as keyof Error].isValid) {
    //     return;
    //   }
    // }
    console.log('FORM CHANGED');
    setDisableSubmit(false);
  };

  // useLayoutEffect(() => {
  //   if (disableSubmit) {
  //     for (const key in errors) {
  //       if (!errors[key as keyof Error].isValid) {
  //         return;
  //       }
  //     }
  //     setDisableSubmit(false);
  //   }
  // }, [errors, disableSubmit]);

  // useEffect(() => {
  //   if (toAdd) {
  //     const { firstName, lastName, birthDate, country, profilePicture } = refItems;
  //     const { addCard } = props;
  //     const clearForm = () => {
  //       for (const key in refItems) {
  //         const elem = refItems[key as keyof RefItems].current;
  //         elem.value = '';
  //         if (elem.type === 'checkbox') {
  //           (elem as HTMLInputElement).checked = false;
  //         }
  //       }
  //     };

  //     addCard({
  //       firstName: firstName.current.value,
  //       lastName: lastName.current.value,
  //       birthDate: birthDate.current.value,
  //       country: country.current.value,
  //       profilePicture: profilePicture.current.files[0],
  //     });
  //     setToAdd(false);
  //     clearForm();
  //   }
  // }, [props, refItems, toAdd]);
  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={disableSubmit ? ableSubmit : null}
    >
      <input {...register('exampleRequired', { maxLength: 2 })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <button disabled={disableSubmit} type="submit" className="submit-btn">
        Submit
      </button>
    </form>

    // <FormComponent
    //   handleSubmit={handleSubmit(onSubmit)}
    //   register={register}
    //   errors={errors}
    //   disableSubmit={disableSubmit}
    //   ableSubmit={ableSubmit}
    //   // refItems={refItems}
    //   // errors={errors}
    //   // removeError={(ev) => {
    //   //   removeError(ev);
    //   // }}
    // />
  );
};

export default Form;
