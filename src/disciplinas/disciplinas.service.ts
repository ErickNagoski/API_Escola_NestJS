import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { DatabaseService } from 'src/databaseService/database.service';

@Injectable()
export class DisciplinasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(data: CreateDisciplinaDto) {
    const sql = `INSERT INTO subjects (name, teacher) VALUES ('${data.name}', ${data.teacher});`
      try {
        await this.databaseService.query(sql);
        return { status: 'ok' };
      } catch (error) {
        return error;
      }
  }

  async findAll() {
    try {
      const query = `SELECT 
  id AS id,
  sb.name AS name,
  t.name as teacher,
  t.created_at
FROM 
  subjects sb
left join teacher t
on sb.teacher = t.teacher_id;`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      const query = `SELECT 
  sb.id AS subject_id,
  sb.name AS subject_name,
  sb.created_at,
    t.name as teacher
FROM 
  subjects sb
left join teacher t
on sb.teacher = t.teacher_id;
where sb.id = '${id}';`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async findStudentSubjects(id:string){
    try {
      const query = `SELECT distinct
                        sb.id AS id,
                        sb.name AS name,
                        sb.teacher,
                        sb.created_at
                      FROM
                        subjects sb
                        inner join student_subject ss
                        on sb.id = ss.subject_id
                        inner join students st
                        on ss.student_id = st.id
                      where matricula = '${id}';`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async matricular(data: { studentId: number; subjectId: number; }) {
    const sql = `INSERT INTO student_subject (student_id, subject_id) VALUES (${data.studentId}, ${data.subjectId});`
      try {
        await this.databaseService.query(sql);
        return { status: 'ok' };
      } catch (error) {
        return error;
      }
  }
}
