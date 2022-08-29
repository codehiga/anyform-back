import { QuestionVO } from 'src/vo/QuestionVO';

export interface UpdateQuestionDTO extends QuestionVO {
  origin_form_id: string;
  description: string;
  unique_response: boolean;
  type: string;
  placeholder: string;
  order: number;
  created_at: string;
}
