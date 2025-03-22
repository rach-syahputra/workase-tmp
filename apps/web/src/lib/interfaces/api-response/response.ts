export interface APIResponse {
  success: boolean;
  message: string;
  error?: {
    message: string;
  };
}
