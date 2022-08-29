import { Module } from '@nestjs/common';
import { QuestionController } from 'src/controller/QuestionController';
import { QuestionDAO } from 'src/dao/QuestionDAO';
import { QuestionService } from 'src/service/QuestionService';
import { FormController } from './controller/FormController';
import { OptionController } from './controller/OptionController';
import { FormDAO } from './dao/FormDAO';
import { OptionDAO } from './dao/OptionDAO';
import { FormService } from './service/FormService';
import { OptionService } from './service/OptionService';

@Module({
  imports: [],
  controllers: [QuestionController, OptionController, FormController],
  providers: [
    QuestionService,
    QuestionDAO,
    OptionService,
    OptionDAO,
    FormService,
    FormDAO,
  ],
})
export class AppModule {}
