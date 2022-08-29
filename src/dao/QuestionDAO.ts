import { PrismaClient } from '@prisma/client';
import { CreateQuestionDTO } from 'src/dto/CreateQuestionDTO';
import { UpdateQuestionDTO } from 'src/dto/UpdateQuestionDTO';
import { QuestionRepository } from 'src/repository/QuestionRepository';

export class QuestionDAO implements QuestionRepository {
  private prisma = new PrismaClient();

  async add(question: CreateQuestionDTO) {
    let response = await this.prisma.question.create({
      data: question,
    });
    return response;
  }

  async list(id: string) {
    let response = await this.prisma.question.findMany({
      where: {
        origin_form_id: id,
      },
    });
    return response;
  }

  async one(id: string) {
    let response = await this.prisma.question.findFirst({
      where: {
        id: id,
      },
    });

    return response;
  }

  async update(id: string, question: UpdateQuestionDTO) {
    let response = await this.prisma.question.update({
      where: {
        id,
      },
      data: question,
    });

    return response;
  }
}
