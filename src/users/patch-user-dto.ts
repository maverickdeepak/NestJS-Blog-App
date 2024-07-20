import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './dtos/create-user-dto';

export class PatchUserDTO extends PartialType(CreateUserDTO) {}
