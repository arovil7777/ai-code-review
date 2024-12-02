import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { OpenAiController } from './openai.controller';

@Module({
    providers: [OpenAiService],
    controllers: [OpenAiController],
    exports: [OpenAiService]
})
export class OpenAiModule { }