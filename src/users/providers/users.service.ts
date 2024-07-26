import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { GetUserParamDTO } from '../dtos/get-user-dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { GetUserParamDTO } from '../dtos/get-user-dto';

/**
 * Class to connect to user table and perform business operation
 */
@Injectable()
export class UserService {
  /**
   * Service for Users
   */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * Create User
   */

  public async createUser(CreateUserDTO: CreateUserDTO) {
    const existingUser = await this.userRepository.find({
      where: {
        email: CreateUserDTO.email,
      },
    });

    let createNewUser = this.userRepository.create(CreateUserDTO);
    createNewUser = await this.userRepository.save(createNewUser);

    return createNewUser;
  }

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
    // const isAuth = this.authService.isAuthenticated();
    // console.log('isAuth', isAuth);

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
