import { ApiResponse } from '@/helpers/api-response';
import { NextFunction, Request, Response } from 'express';

class SampleController {
  async getSampleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      // const data = SampleService.getSample()
      const data = {
        id,
        name: 'workase',
      };

      res.status(200).json({
        success: true,
        message: 'Sample data retrieved successfully',
        data,
      });
      // ApiResponse({
      //   statusCode: 200,
      //   message: 'Sample data retrieved successfully',
      //   data,
      // });
    } catch (err) {
      next(err);
    }
  }
}

export default SampleController;
