import { Controller, Get } from '@nestjs/common';
import { PostService } from './providers/post.service';

@Controller('posts')
export class PostController {
  /**
   * Constructor
   * Inject Post Service
   * @param {PostService} postService
   */
  public constructor(private readonly postService: PostService) {}

  @Get()
  public getPosts() {
    return this.postService.getPosts();
  }
}
