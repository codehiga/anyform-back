import { CreateQuestionDTO } from 'src/dto/CreateQuestionDTO';
import { QuestionVO } from 'src/vo/QuestionVO';

export interface QuestionRepository {
  add: (question: CreateQuestionDTO) => Promise<QuestionVO>;
  list: (id: string) => Promise<QuestionVO[]>;
  one: (id: string) => Promise<QuestionVO>;
}
