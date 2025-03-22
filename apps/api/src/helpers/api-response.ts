import { response } from 'express';

import { IApiResponse } from '@/interfaces/api/api-response';

export const ApiResponse = ({
  statusCode = 200,
  message,
  data,
}: IApiResponse) => {
  response.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
