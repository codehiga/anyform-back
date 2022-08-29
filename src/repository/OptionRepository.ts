import { CreateOptionDTO } from 'src/dto/CreateOptionDTO';
import { UpdateOptionDTO } from 'src/dto/UpdateOptionDTO';
import { OptionVO } from 'src/vo/OptionVO';

export interface OptionRepository {
  add: (option: CreateOptionDTO) => Promise<OptionVO>;
  list: (id: string) => Promise<OptionVO[]>;
  update: (id: string, option: UpdateOptionDTO) => Promise<OptionVO>;
}
