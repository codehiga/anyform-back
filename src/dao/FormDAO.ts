import { PrismaClient } from '@prisma/client';
import { CreateFormDTO } from 'src/dto/CreateFormDTO';
import { FormRepository } from 'src/repository/FormRepository';
import { FormVO } from 'src/vo/FormVO';

export class FormDAO implements FormRepository {
  private prisma = new PrismaClient();

  async list(): Promise<FormVO[]> {
    return this.prisma.form.findMany();
  }

  async one(id: string): Promise<FormVO> {
    return this.prisma.form.findUnique({
      where: {
        id,
      },
    });
  }

  async add(form: CreateFormDTO): Promise<FormVO> {
    const response = await this.prisma.form.create({
      data: form,
    });

    return response;
  }

  async update(id: string, form: FormVO): Promise<FormVO> {
    const response = await this.prisma.form.update({
      where: {
        id,
      },
      data: form,
    });

    return response;
  }
}
