import {
  AddSampleRequest,
  GetSampleByEmailRequest,
} from '@/interfaces/sample/sample.interface';
import { ResponseError } from '@/helpers/error';
import SampleRepository from '@/repositories/sample/sample.repository';
import { validate } from '@/helpers/validation';
import {
  addSampleSchema,
  getSampleByEmailSchema,
} from '@/validations/sample/sample.validation';
import { generateHashedPassword } from '@/helpers/utils';

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

  addSample = async ({ email, name, password }: AddSampleRequest) => {
    validate(addSampleSchema, { email, name, password });

    await this.checkSampleExistence(email);
    password = await generateHashedPassword(password);
    const sample = await this.sampleRepository.addSample({
      email,
      name,
      password,
    });

    return {
      id: sample.id,
      email: sample.email,
      name: sample.email,
    };
  };

  checkSampleExistence = async (email: string) => {
    const sample = await this.sampleRepository.getSampleByEmail({ email });
    if (sample)
      throw new ResponseError(409, 'Email already exists, try another one');
  };
}

export default SampleService;
