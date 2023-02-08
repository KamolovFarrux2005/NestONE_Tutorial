import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    app.setGlobalPrefix('api')
    await app.listen(PORT, ()=> { 
      console.log(`Server: ${PORT}`)
    });
  } catch (error) {
    console.log(error.message)
  }
  
}
bootstrap();
