import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateQuestionDTO } from 'src/dto/CreateQuestionDTO';
import { UpdateQuestionDTO } from 'src/dto/UpdateQuestionDTO';
import { QuestionService } from 'src/service/QuestionService';
import { QuestionVO } from 'src/vo/QuestionVO';

@Controller('question')
export class QuestionController {
  private readonly questionService = new QuestionService();

  @Post()
  async add(@Body() question: CreateQuestionDTO): Promise<QuestionVO> {
    return await this.questionService.add(question);
  }

  @Get()
  async list(): Promise<QuestionVO[]> {
    return await this.questionService.list();
  }

  @Get(':id')
  async listByFormId(@Param('id') id: string): Promise<QuestionVO[]> {
    return await this.questionService.listByFormId(id);
  }

  @Get('one/:id')
  async one(@Param('id') id: string): Promise<QuestionVO> {
    return await this.questionService.one(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() question: UpdateQuestionDTO,
  ): Promise<QuestionVO> {
    return await this.questionService.update(id, question);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<QuestionVO> {
    return await this.questionService.delete(id);
  }
}
