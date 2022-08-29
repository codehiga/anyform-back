import { OptionVO } from 'src/vo/OptionVO';

export interface UpdateOptionDTO extends OptionVO {
  description: string;
  unique_response: boolean;
  type: string;
  placeholder: string;
  order: number;
}
