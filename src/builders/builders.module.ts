import { Module } from '@nestjs/common';
import { BuildersService } from './builders.service';
import { BuildersController } from './builders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Builders, BuilderSchema } from './schemas/builders.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Builders.name, schema: BuilderSchema}])],
  controllers: [BuildersController],
  providers: [BuildersService]
})
export class BuildersModule {}
