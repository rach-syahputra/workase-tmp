import { AxiosError } from 'axios';

import { axiosPublic } from '../axios';
import { GetSampleRequest } from '../interfaces/api-request/sample';
import { GetSampleResponse } from '../interfaces/api-response/sample';

export const GetSampleByEmail = async ({ email }: GetSampleRequest) => {
  try {
    const response = await axiosPublic.get(`/samples/${email}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data as GetSampleResponse;
    }

    console.error(error);
  }
};
