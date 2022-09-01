import { Injectable } from '@nestjs/common';
import { QuestionDAO } from 'src/dao/QuestionDAO';
import { CreateQuestionDTO } from 'src/dto/CreateQuestionDTO';
import { UpdateQuestionDTO } from 'src/dto/UpdateQuestionDTO';
import { QuestionVO } from 'src/vo/QuestionVO';
import { v4 as uuid } from 'uuid';

@Injectable()
export class QuestionService {
  private readonly questionDAO = new QuestionDAO();

  async add(question: CreateQuestionDTO): Promise<QuestionVO> {
    question.id = uuid();
    question.created_at = new Date().toISOString();

    return this.questionDAO.add(question);
  }

  async list(): Promise<QuestionVO[]> {
    return this.questionDAO.list();
  }

  async listByFormId(id: string): Promise<QuestionVO[]> {
    return this.questionDAO.listByFormId(id);
  }

  async one(id: string): Promise<QuestionVO> {
    return await this.questionDAO.one(id);
  }

  async update(id: string, question: UpdateQuestionDTO): Promise<QuestionVO> {
    return await this.questionDAO.update(id, question);
  }

  async delete(id: string): Promise<QuestionVO> {
    return await this.questionDAO.delete(id);
  }
}
