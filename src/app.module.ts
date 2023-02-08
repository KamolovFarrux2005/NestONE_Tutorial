import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { BuildersService } from './builders/builders.service';
import { BuildersController } from './builders/builders.controller';
import { BuildersModule } from './builders/builders.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.wlibped.mongodb.net/?retryWrites=true&w=majority',
    ),
    CompanyModule,
    BuildersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
