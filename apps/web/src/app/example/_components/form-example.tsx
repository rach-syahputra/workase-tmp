'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@/components/shadcn-ui/button';
import { Card } from '@/components/shadcn-ui/card';
import Loading from '@/components/ui/loading';
import FormInput from '@/components/ui/form-input';

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormExample = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues, { resetForm }) => {
      console.log(values);

      setTimeout(() => {
        resetForm();
      }, 1000 * 5);
    },
  });

  return (
    <>
      <Card className="p-5">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Login</h2>
          <FormInput
            label="Email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            errorMessage={formik.errors.email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            errorMessage={formik.errors.password}
          />
          <Button type="submit" disabled={formik.isSubmitting}>
            Submit
          </Button>
        </form>
      </Card>
      {formik.isSubmitting && <Loading size="sm" label="Submitting" />}
    </>
  );
};

export default FormExample;
