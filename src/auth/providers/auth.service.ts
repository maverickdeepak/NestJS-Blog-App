import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
/**
 * Service for authentication
 */
export class AuthService {
  // Injecting User Service
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * Login Method
   * @param email
   * @param password
   * @returns User Object
   */
  public login(email: string, password: string): any {
    const user = this.userService.findOneById('1234');
    return 'SAMPLE_TOKEN2345SDFGH';
  }

  /**
   * isAuthenticated Method
   * @param token
   * @returns boolean
   */
  public isAuthenticated(token: string): boolean {
    return true;
  }
}
