import { Injectable } from '@nestjs/common';
import { FormDAO } from 'src/dao/FormDAO';
import { CreateFormDTO } from 'src/dto/CreateFormDTO';
import { FormVO } from 'src/vo/FormVO';
import { v4 as uuid } from 'uuid';
import { OptionService } from './OptionService';
import { QuestionService } from './QuestionService';

@Injectable()
export class FormService {
  private readonly formDAO = new FormDAO();

  private questionService = new QuestionService();
  private optionService = new OptionService();

  list(): Promise<FormVO[]> {
    return this.formDAO.list();
  }

  add(form: CreateFormDTO): Promise<FormVO> {
    form.id = uuid();
    form.created_at = new Date().toISOString();
    return this.formDAO.add(form);
  }

  async update(id: string, form: FormVO): Promise<FormVO> {
    return this.formDAO.update(id, form);
  }
}
