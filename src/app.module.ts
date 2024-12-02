import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { OpenAiModule } from "./openai/openai.module";

@Module({
  imports: [
    ConfigModule.forRoot(), // 환경 변수 설정
    OpenAiModule            // AI 모듈 추가
  ]
})
export class AppModule { }