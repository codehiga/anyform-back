import { OptionVO } from './OptionVO';

export interface QuestionVO {
  id: string;
  origin_form_id: string;
  description: string;
  unique_response: boolean;
  type: string;
  placeholder: string;
  order: number;
  created_at: string;
  options?: OptionVO[];
}
