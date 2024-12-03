import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { DatabaseModule } from 'src/databaseService/database.module';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  imports:[DatabaseModule]
})
export class TeachersModule {}
