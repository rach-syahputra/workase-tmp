import { APIResponse } from './response';

export interface Sample {
  id: string;
  name: string;
  email: string;
  isDeleted: boolean;
}

export interface GetSampleResponse extends APIResponse {
  data: Sample;
}
