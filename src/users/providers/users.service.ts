import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUserParamDTO } from '../dtos/get-user-dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UserService {
  /**
   * Service for Users
   */
  constructor(
    // Inject Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUserParamDTO: GetUserParamDTO,
    limit: number,
    page: number,
  ) {
    // Auth Service
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
   * @returns {User}
   */
  public findOneById(id: string) {
    return {
      id: id,
      firstName: 'Deepak',
      email: 'XXXXXXXXXXXXXXXX',
    };
  }
}
