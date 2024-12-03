import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { DatabaseModule } from 'src/databaseService/database.module';

@Module({
  controllers: [GradesController],
  providers: [GradesService],
  imports:[DatabaseModule]
})
export class GradesModule {}
