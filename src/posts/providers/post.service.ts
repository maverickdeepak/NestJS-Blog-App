import { Injectable } from '@nestjs/common';

@Injectable()
/**
 * Service for posts
 */
export class PostService {
  public getPosts() {
    return [
      {
        id: 1,
        title: 'Post 1',
        content: 'Post 1 content',
      },
      {
        id: 2,
        title: 'Post 2',
        content: 'Post 2 content',
      },
    ];
  }
}
