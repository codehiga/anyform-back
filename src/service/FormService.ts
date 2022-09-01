import { Injectable } from '@nestjs/common';
import { FormDAO } from 'src/dao/FormDAO';
import { CreateFormDTO } from 'src/dto/CreateFormDTO';
import { FormVO } from 'src/vo/FormVO';
import { OptionVO } from 'src/vo/OptionVO';
import { QuestionVO } from 'src/vo/QuestionVO';
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

  one(id: string): Promise<FormVO> {
    return this.formDAO.one(id);
  }

  add(form: CreateFormDTO): Promise<FormVO> {
    form.id = uuid();
    form.created_at = new Date().toISOString();
    return this.formDAO.add(form);
  }

  async update(id: string, form: FormVO): Promise<FormVO> {
    let questionList: QuestionVO[] = await this.questionService.listByFormId(
      id,
    );

    questionList.sort(function (a, b) {
      return a.order - b.order;
    });

    let stringfy = {
      payload: questionList,
    };

    for (let i of questionList) {
      let optionList: OptionVO[] = await this.optionService.list(i.id);

      optionList.sort(function (a, b) {
        return a.order - b.order;
      });

      for (let o of optionList) {
        if (i.id == o.origin_response_id) {
          i.options = optionList;
        }
      }
    }

    form.stringfy_json = JSON.stringify(stringfy);

    return this.formDAO.update(id, form);
  }
}
