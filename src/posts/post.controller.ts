import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './providers/post.service';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post-dto';

@Controller('posts')
@ApiTags('Posts Api')
export class PostController {
  /**
   * Constructor
   * Inject Post Service
   * @param {PostService} postService
   */
  public constructor(private readonly postService: PostService) {}

  // GET: all posts
  @Get()
  public getAllPosts() {
    return this.postService.getAllPosts();
  }

  // GET: post by post ID
  @Get('/:postId')
  public getPostById(@Param('postId') postId: string) {
    console.log('postId', postId);
    return this.postService.getPostById(postId);
  }

  // Create: Create Post
  @Post()
  @ApiOperation({
    summary: 'Create Post',
    description: 'This Endpoint is using for creating a new post.',
  })
  @ApiResponse({
    status: 201,
    description: 'Post has been successfully created',
  })
  public createPost(@Body() createPostDTO: CreatePostDTO) {
    console.log('createPostDTO', createPostDTO);
    return this.postService.createPost(createPostDTO);
  }

  // GET: user's all posts
  @Get('/users/:userId')
  public getUserPosts(@Param('userId') userId: string) {
    return this.postService.getUsersPosts(userId);
  }
}
