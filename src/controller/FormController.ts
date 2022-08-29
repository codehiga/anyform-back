import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFormDTO } from 'src/dto/CreateFormDTO';
import { FormService } from 'src/service/FormService';
import { FormVO } from 'src/vo/FormVO';

@Controller('form')
export class FormController {
  private readonly formService = new FormService();

  @Get()
  list(): Promise<FormVO[]> {
    return this.formService.list();
  }

  @Post()
  add(@Body() form: CreateFormDTO): Promise<FormVO> {
    return this.formService.add(form);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() form: FormVO): Promise<FormVO> {
    return this.formService.update(id, form);
  }
}
