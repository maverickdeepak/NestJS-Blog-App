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

import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users Api')
export class UsersController {
  /**
   * Constructor
   * Injecting User Service
   * @param {UserService} userService
   */
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param getUserParamDTO
   * @param limit
   * @param page
   * @returns Users / User
   */
  @Get('/:id?')
  @ApiOperation({
    summary: 'Get Users',
    description: 'Fetches a list of registered users on the application.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of users',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'The number of enteries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description:
      'The position of the page number that you want to the API to return',
    example: 1,
  })
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
