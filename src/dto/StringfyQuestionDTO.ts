import { OptionVO } from 'src/vo/OptionVO';
import { QuestionVO } from 'src/vo/QuestionVO';

export interface StringfyQuestionDTO extends QuestionVO {
  options?: OptionVO[];
}
