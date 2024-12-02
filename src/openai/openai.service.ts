import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    // 코드 리뷰 기능
    async reviewCode(code: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // 또는 'gpt-4'
            messages: [
                {
                    role: 'system',
                    content: '당신은 코드 리뷰를 도와주는 유용한 어시스턴트입니다.' // 'You are a helpful assistant for reviewing and improving code.'
                },
                {
                    role: 'user',
                    content: `다음 코드에 대한 문제를 분석하고 개선 사항을 제안해주세요: \n\n${code}` // `Analyze the following code snippet for issues and provide suggestions: \n\n${code}`
                }
            ],
            max_tokens: 1000,
        });
        return response.choices[0]?.message?.content?.trim() || '';
    }

    // 코드 생성 기능
    async generateCode(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // 또는 'gpt-4'
            messages: [
                {
                    role: 'system',
                    content: '당신은 사용자 요청에 따라 코드를 생성하는 유용한 어시스턴트입니다.' // 'You are a helpful assistant for generating code snippets based on user prompts.'
                },
                {
                    role: 'user',
                    content: `다음 설명에 따라 코드를 생성해주세요: \n\n${prompt}` // `Generate a code snippet based on the following description: \n\n${prompt}`
                }
            ],
            max_tokens: 1000,
        });
        return response.choices[0]?.message?.content?.trim() || '';
    }
}