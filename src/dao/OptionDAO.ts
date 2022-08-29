import { PrismaClient } from '@prisma/client';
import { CreateOptionDTO } from 'src/dto/CreateOptionDTO';
import { UpdateOptionDTO } from 'src/dto/UpdateOptionDTO';
import { OptionRepository } from 'src/repository/OptionRepository';
import { OptionVO } from 'src/vo/OptionVO';

export class OptionDAO implements OptionRepository {
  private prisma = new PrismaClient();

  async add(option: CreateOptionDTO): Promise<OptionVO> {
    const response = await this.prisma.option.create({
      data: option,
    });

    return response;
  }

  async list(id: string): Promise<OptionVO[]> {
    const response = await this.prisma.option.findMany({
      where: {
        origin_response_id: id,
      },
    });

    return response;
  }

  async update(id: string, option: UpdateOptionDTO): Promise<OptionVO> {
    const response = await this.prisma.option.update({
      where: {
        id,
      },
      data: option,
    });

    return response;
  }
}
