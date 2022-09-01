import { QuestionVO } from 'src/vo/QuestionVO';

export interface UpdateQuestionDTO extends QuestionVO {
  description: string;
  unique_response: boolean;
  type: string;
  placeholder: string;
  order: number;
}
