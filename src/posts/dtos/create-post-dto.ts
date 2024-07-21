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

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  title: string;

  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType; // Adjust these values to fit your post types

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must be a valid slug format (e.g., my-post-title)',
  })
  slug: string;

  @IsEnum(postStatus)
  status: postStatus; // Adjust these values to fit your statuses

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsJSON()
  schema?: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @IsISO8601()
  @IsOptional()
  publishOn: Date; // Use Date type for date fields

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDTO)
  metaOptions: CreatePostMetaOptionsDTO[]; // Adjust the type of value as needed
}
