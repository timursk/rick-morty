import React, { ReactNode } from 'react';
import './FormLabel.css';

type Props = {
  labelClass?: string;
  children?: ReactNode;
};

const FormLabel = (props: Props) => {
  return <label className={`form-item ${props.labelClass || ''}`}>{props.children}</label>;
};

export default FormLabel;
