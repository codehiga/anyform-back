import { CreateQuestionDTO } from 'src/dto/CreateQuestionDTO';
import { QuestionVO } from 'src/vo/QuestionVO';

export interface QuestionRepository {
  add: (question: CreateQuestionDTO) => Promise<QuestionVO>;
  listByFormId: (id: string) => Promise<QuestionVO[]>;
  one: (id: string) => Promise<QuestionVO>;
  list: () => Promise<QuestionVO[]>;
  delete: (id: string) => Promise<QuestionVO>;
}
