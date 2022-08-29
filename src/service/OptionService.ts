import { Injectable } from '@nestjs/common';
import { OptionDAO } from 'src/dao/OptionDAO';
import { CreateOptionDTO } from 'src/dto/CreateOptionDTO';
import { UpdateOptionDTO } from 'src/dto/UpdateOptionDTO';
import { OptionVO } from 'src/vo/OptionVO';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OptionService {
  private readonly optionDAO = new OptionDAO();

  add(option: CreateOptionDTO): Promise<OptionVO> {
    option.id = uuid();
    option.created_at = new Date().toISOString();

    return this.optionDAO.add(option);
  }

  list(id: string): Promise<OptionVO[]> {
    return this.optionDAO.list(id);
  }

  update(id: string, option: UpdateOptionDTO): Promise<OptionVO> {
    return this.optionDAO.update(id, option);
  }
}
