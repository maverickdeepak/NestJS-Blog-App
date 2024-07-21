import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDTO } from './create-post-dto';

export class PatchPostDTO extends PartialType(CreatePostDTO) {
  @ApiProperty({
    example: 1,
    description: 'The id of the post to update',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
