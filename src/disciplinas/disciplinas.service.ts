import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async findAll() {
    try {
      const query = `SELECT * FROM studentsSELECT 
  id AS subject_id,
  name AS subject_name,
  teacher,
  created_at
FROM 
  subjects;`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array[0];
    } catch (error) {
      console.error('Erro ao buscar barbeiros no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      const query = `SELECT * FROM studentsSELECT 
  id AS subject_id,
  name AS subject_name,
  teacher,
  created_at
FROM 
  subjects
where id = ${id};`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array[0];
    } catch (error) {
      console.error('Erro ao buscar barbeiros no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }
}
