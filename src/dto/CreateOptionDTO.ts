import { OptionVO } from 'src/vo/OptionVO';

export interface CreateOptionDTO extends OptionVO {
  origin_response_id: string;
  description: string;
  order: number;
}
