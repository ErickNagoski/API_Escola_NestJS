import { Injectable } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { DatabaseService } from 'src/databaseService/database.service';

@Injectable()
export class DisciplinasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createDisciplinaDto: CreateDisciplinaDto) {

    await this.databaseService.query('SELECT * FROM users');

    return { status: 'ok' };
  }

  findAll() {
    return `This action returns all disciplinas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disciplina`;
  }

  update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    return `This action updates a #${id} disciplina`;
  }

  remove(id: number) {
    return `This action removes a #${id} disciplina`;
  }
}
