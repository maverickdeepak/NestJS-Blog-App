import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { postType } from '../enum/postType.enum';
import { postStatus } from '../enum/postStatus.enum';
import { CreatePostMetaOptionsDTO } from './create-post-meta-options.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDTO {
  @ApiProperty({
    example: 'My First Post',
    description: 'The title of the post',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  title: string;

  @ApiProperty({
    example: 'draft',
    description: 'The type of the post',
    enum: postType,
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType; // Adjust these values to fit your post types

  @ApiProperty({
    example: 'my-post-title',
    description: 'The slug of the post',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must be a valid slug format (e.g., my-post-title)',
  })
  slug: string;

  @ApiProperty({
    example: 'published',
    description: 'The status of the post',
    enum: postStatus,
  })
  @IsEnum(postStatus)
  status: postStatus; // Adjust these values to fit your statuses

  @ApiProperty({
    example: 'This is my first post',
    description: 'The content of the post',
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    example: '{"title": "My First Post"}',
    description: 'The schema of the post',
    required: false,
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiProperty({
    example: 'https://example.com/featured-image.jpg',
    description: 'The featured image URL of the post',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiProperty({
    example: '2023-05-01T10:00:00Z',
    description: 'The publish date of the post',
    required: false,
  })
  @IsISO8601()
  @IsOptional()
  publishOn: Date; // Use Date type for date fields

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'The tags of the post',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiProperty({
    type: 'array',
    description: 'The meta options of the post',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: { type: 'string' },
        value: { type: 'string' },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDTO)
  metaOptions?: CreatePostMetaOptionsDTO[]; // Adjust the type of value as needed
}
