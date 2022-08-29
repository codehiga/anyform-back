import { CreateFormDTO } from 'src/dto/CreateFormDTO';
import { FormVO } from 'src/vo/FormVO';

export interface FormRepository {
  add: (form: CreateFormDTO) => Promise<FormVO>;
}
