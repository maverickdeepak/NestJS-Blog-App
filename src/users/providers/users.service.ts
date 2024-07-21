import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUserParamDTO } from '../dtos/get-user-dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to user table and perform business operation
 */
@Injectable()
export class UserService {
  /**
   * Service for Users
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * This method us use for getting all the users
   * @param getUserParamDTO
   * @param limit
   * @param page
   * @returns
   */
  public findAll(
    getUserParamDTO: GetUserParamDTO,
    limit: number,
    page: number,
  ) {
    // Auth Service
    const isAuth = this.authService.isAuthenticated();
    console.log('isAuth', isAuth);

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
