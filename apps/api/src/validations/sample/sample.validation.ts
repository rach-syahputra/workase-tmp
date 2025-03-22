import * as Yup from 'yup';

export const getSampleByEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});
