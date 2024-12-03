import { Injectable, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { DatabaseService } from 'src/databaseService/database.service';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }
  async findAll(): Promise<User[]> {
    return null
  }

  async findOne(email: string): Promise<User | undefined> {
    try {
      const query = `SELECT 
      email,
      role
FROM 
  users
where email = ${email}`;
      const result = await this.databaseService.query(query);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array[0];
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }

  async authMe(email: string) {
    const sql = `SELECT  
                    u.email, 
                    role,
                    s.matricula,
                    s.name,
                    s.id,
                    s.situation
                 from users u
                 left join students s
                 on u.email = s.email
                 where u.email = '${email}';`;

    try {

      const result = await this.databaseService.query(sql);
      const array = JSON.parse(JSON.stringify(result))

      if (array.length === 0) return undefined;
      return array[0];
    } catch (error) {
      console.error('Erro ao buscar no banco de dados:', error);
      throw new InternalServerErrorException(error);
    }
  }
}