import { Response } from 'express';

export interface IApiResponse {
  res: Response;
  statusCode: number;
  message: string;
  data: unknown;
}
