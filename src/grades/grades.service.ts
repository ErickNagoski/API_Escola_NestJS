import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { DatabaseService } from 'src/databaseService/database.service';

@Injectable()
export class GradesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(data: CreateGradeDto) {
    const sql = `INSERT INTO grades (student_id, subject_id, grade) 
VALUES 
  (${data.studentId}, ${data.subjectId}, ${data.grade});`
    try {
      await this.databaseService.query(sql);
      return { status: 'ok' };
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const query = `SELECT 
    g.id AS id,
    s.name AS subject_name,
    st.matricula AS matricula,
    g.grade,
    g.created_at
FROM 
  grades g
inner JOIN 
  students st ON g.student_id = st.id
inner JOIN 
  subjects s ON g.subject_id = s.id
WHERE 
  st.matricula = '${id}';`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateGradeDto: UpdateGradeDto) {
    const sql = `UPDATE grades set grade = ${updateGradeDto.grade} where id = ${id};`
    try {
      await this.databaseService.query(sql);
      return { status: 'ok' };
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    const sql = `DELETE FROM grades where id = ${id};`
    try {
      await this.databaseService.query(sql);
      return { status: 'ok' };
    } catch (error) {
      return error;
    }
  }

  async gradesHistory(id: string) {
    try {
      const query = `SELECT 
  st.id AS student_id,
  st.registration_number,
  st.course,
  s.name AS subject_name,
  g.grade,
  g.created_at AS grade_date
FROM 
  grades g
JOIN 
  students st ON g.student_id = st.id
JOIN 
  subjects s ON g.subject_id = s.id
WHERE 
  st.id = '${id}';`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async studentHistory(id: string) {
    try {
      const query = `SELECT 
	g.grade,
    g.created_at as dt_grade,
    sub.name as subject,
    t.name as teacher
FROM grades g
inner join students s
	on g.student_id = s.id
inner join subjects sub
	on g.subject_id = sub.id
inner join teacher t
	on sub.teacher =t.teacher_id
where s.matricula = '${id}';`;
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
