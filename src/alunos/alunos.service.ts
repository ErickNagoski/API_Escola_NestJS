import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { DatabaseService } from 'src/databaseService/database.service';

@Injectable()
export class AlunosService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(data: CreateAlunoDto) {
    const sql = `INSERT INTO students (matricula, name, bithday,cpf,email,phone,address,situation, course_id) VALUES('${data.matricula}','${data.nome}','${data.data_nascimento}','${data.cpf}','${data.email}','${data.telefone}','${data.endereco}','${data.situacao}',${data.curso_id});`
    const sql2 = `INSERT INTO USERS (email, password,role) values ('${data.email}','${data.matricula}','student');`
    try {
      await this.databaseService.query(sql);
      await this.databaseService.query(sql2);
      return { status: 'ok' };
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const query = `SELECT s.*, (select count(*) from student_subject where student_id = id) as subjects FROM students s`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string) {
    try {
      const query = `SELECT * FROM students where matricula = '${id}';`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }
}
