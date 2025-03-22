import { GetSampleByEmailRequest } from '@/interfaces/sample/sample.interface';
import { ResponseError } from '@/helpers/error';
import SampleRepository from '@/repositories/sample/sample.repository';
import { validate } from '@/helpers/validation';
import { getSampleByEmailSchema } from '@/validations/sample/sample.validation';

class SampleService {
  private sampleRepository: SampleRepository;

  constructor() {
    this.sampleRepository = new SampleRepository();
  }

  getSample = async () => {
    return await this.sampleRepository.getSample();
  };

  getSampleByEmail = async ({ email }: GetSampleByEmailRequest) => {
    validate(getSampleByEmailSchema, { email });

    const sample = await this.sampleRepository.getSampleByEmail({ email });

    if (!sample) throw new ResponseError(404, 'Sample not found');

    return sample;
  };
}

export default SampleService;
