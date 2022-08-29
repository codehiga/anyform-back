import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOptionDTO } from 'src/dto/CreateOptionDTO';
import { UpdateOptionDTO } from 'src/dto/UpdateOptionDTO';
import { OptionService } from 'src/service/OptionService';
import { OptionVO } from 'src/vo/OptionVO';

@Controller('option')
export class OptionController {
  private readonly optionService = new OptionService();

  @Post()
  add(@Body() option: CreateOptionDTO): Promise<OptionVO> {
    return this.optionService.add(option);
  }

  @Get('/:id')
  list(@Param('id') id: string): Promise<OptionVO[]> {
    return this.optionService.list(id);
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() option: UpdateOptionDTO,
  ): Promise<OptionVO> {
    return this.optionService.update(id, option);
  }
}
