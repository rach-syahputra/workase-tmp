import * as Yup from 'yup';

export const validate = async <T>(
  schema: Yup.Schema<T>,
  data: unknown,
): Promise<T> => {
  return schema.validate(data, { abortEarly: false }) as Promise<T>;
};
