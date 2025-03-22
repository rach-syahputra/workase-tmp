import { Router } from 'express';

import SampleController from '@/controllers/sample/sample.controller';

class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  constructor() {
    this.sampleController = new SampleController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.sampleController.getSample);
    this.router.get('/:email', this.sampleController.getSampleByEmail);
  }

  getRouter(): Router {
    return this.router;
  }
}

export default SampleRouter;
