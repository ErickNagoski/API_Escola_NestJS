import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { ConfigModule } from '@nestjs/config';
import { GradesModule } from './grades/grades.module';
import { AuthModule } from './auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [AlunosModule, DisciplinasModule, ConfigModule.forRoot(), GradesModule,AuthModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
