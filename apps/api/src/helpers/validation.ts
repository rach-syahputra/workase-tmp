import * as Yup from 'yup';

export const validate = <T>(schema: Yup.Schema<T>, data: unknown) => {
  return schema.validateSync(data, { abortEarly: false });
};
