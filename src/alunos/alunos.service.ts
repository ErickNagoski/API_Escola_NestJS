import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { DatabaseService } from 'src/databaseService/database.service';

@Injectable()
export class AlunosService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(data: CreateAlunoDto) {
    const sql = `INSERT INTO students (matricula, name, bithday,cpf,email,phone,address,situation, course_id) VALUES('${data.matricula}','${data.nome}','${data.data_nascimento}','${data.cpf}','${data.email}','${data.telefone}','${data.endereco}','${data.situacao}',${data.curso_id});`
    try {
      await this.databaseService.query(sql);
      return { status: 'ok' };
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const query = `SELECT * FROM students`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array[0];
    } catch (error) {
      console.error('Erro ao buscar barbeiros no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string) {
    try {
      const query = `SELECT * FROM students where matricula = ${id};`;
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
