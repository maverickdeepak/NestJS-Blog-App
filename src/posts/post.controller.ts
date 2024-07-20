import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './providers/post.service';

import { ApiTags } from '@nestjs/swagger';

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

  // GET: user's all posts
  @Get('/users/:userId')
  public getUserPosts(@Param('userId') userId: string) {
    return this.postService.getUsersPosts(userId);
  }
}
