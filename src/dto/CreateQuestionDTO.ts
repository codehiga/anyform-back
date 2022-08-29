import { QuestionVO } from 'src/vo/QuestionVO';

export interface CreateQuestionDTO extends QuestionVO {
  description: string;
  unique_response: boolean;
  type: string;
  placeholder: string;
}
