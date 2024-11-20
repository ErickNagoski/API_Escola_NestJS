import { Module } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasController } from './disciplinas.controller';
import { DatabaseModule } from 'src/databaseService/database.module';

@Module({
  controllers: [DisciplinasController],
  providers: [DisciplinasService],
  imports: [DatabaseModule],
})
export class DisciplinasModule {}
