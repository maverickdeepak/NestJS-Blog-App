import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user-dto';
import { GetUserParamDTO } from './dtos/get-user-dto';
import { PatchUserDTO } from './patch-user-dto';
import { UserService } from './providers/users.service';

@Controller('users')
export class UsersController {
  /**
   * Constructor
   * Injecting User Service
   * @param {UserService} userService
   */
  constructor(private readonly userService: UserService) {}

  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDTO: GetUserParamDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    return this.userService.findAll(getUserParamDTO, limit, page);
  }
  @Post()
  public createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(typeof createUserDTO);
    return 'You send a post request to users endpoint';
  }
  @Patch()
  public updateUser(@Body() PatchUserDTO: PatchUserDTO) {
    return PatchUserDTO;
  }
  @Put()
  public replaceUser() {
    return 'You send a put request to users endpoint';
  }
  @Delete()
  public deleteUser() {
    return 'You send a delete request to users endpoint';
  }
}
