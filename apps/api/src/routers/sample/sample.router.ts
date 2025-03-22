import SampleController from '../../controllers/sample/sample.controller';
import { Router } from 'express';

class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  constructor() {
    this.sampleController = new SampleController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/:id', this.sampleController.getSampleById);
  }

  getRouter(): Router {
    return this.router;
  }
}

export default SampleRouter;
