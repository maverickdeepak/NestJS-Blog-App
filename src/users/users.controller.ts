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

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDTO: GetUserParamDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDTO);
    console.log(typeof limit);
    console.log(typeof page);
    return 'You send a get request to users endpoint';
  }
  @Post()
  public createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(typeof createUserDTO);
    return 'You send a post request to users endpoint';
  }
  @Patch()
  public updateUser() {
    return 'You send a patch request to users endpoint';
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
