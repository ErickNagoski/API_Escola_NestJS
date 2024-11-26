import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { DatabaseModule } from 'src/databaseService/database.module';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService],
  imports: [DatabaseModule]
})
export class AlunosModule { }
