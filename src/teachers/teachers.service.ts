import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { DatabaseService } from 'src/databaseService/database.service';

@Injectable()
export class TeachersService {
  constructor(private readonly databaseService: DatabaseService) { }

  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  async findAll() {
    try {
      const query = `SELECT 
      name,
      teacher_id as teacherId
FROM 
  teacher;`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
