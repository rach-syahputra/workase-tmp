import { GetSampleByEmailRequest } from '@/interfaces/sample/sample.interface';
import { PrismaClient } from '@prisma/client';

class SampleRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getSample = async () => {
    return this.prisma.developer.findMany();
  };

  getSampleByEmail = async ({ email }: GetSampleByEmailRequest) => {
    return this.prisma.developer.findUnique({
      where: {
        email,
      },
    });
  };
}

export default SampleRepository;
