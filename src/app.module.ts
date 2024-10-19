import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';

@Module({
  imports: [AlunosModule, DisciplinasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
