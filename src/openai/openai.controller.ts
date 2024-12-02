import { Controller, Post, Body } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Controller('openai')
export class OpenAiController {
    constructor(private readonly openAiService: OpenAiService) { }

    @Post('review-code')
    async reviewCode(@Body('code') code: string): Promise<string> {
        return this.openAiService.reviewCode(code);
    }

    @Post('generate-code')
    async generateCode(@Body('prompt') prompt: string): Promise<string> {
        return this.openAiService.generateCode(prompt);
    }
}