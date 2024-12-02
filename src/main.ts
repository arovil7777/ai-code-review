import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: "http://localhost:3001" }); // React 앱 주소

  await app.listen(3000);
}
bootstrap();
