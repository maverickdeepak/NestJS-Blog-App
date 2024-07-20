import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  /**
   * Inject Auth Service
   */
  constructor(private readonly authService: AuthService) {}
}
