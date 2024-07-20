import { Injectable } from '@nestjs/common';
import { GetUserParamDTO } from '../dtos/get-user-dto';

@Injectable()
export class UserService {
  /**
   * Service for Users
   */
  public findAll(
    getUserParamDTO: GetUserParamDTO,
    limit: number,
    page: number,
  ) {
    return [
      {
        id: 1,
        firstName: 'Deepak',
        email: 'deepak@gmail.com',
      },
      {
        id: 2,
        firstName: 'Rahul',
        email: 'rahul@gmail.com',
      },
      {
        id: 3,
        firstName: 'Rohit',
        email: 'rohit@gmail.com',
      },
    ];
  }

  /**
   * Find a User by ID
   */

  public findOneById(id: string) {
    return {
      id: id,
      firstName: 'Deepak',
      email: 'XXXXXXXXXXXXXXXX',
    };
  }
}
