import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
/**
 * Service for posts
 */
export class PostService {
  /**
   * Injecting User Service
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Get All Posts
   * @returns all posts
   */
  public getAllPosts() {
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

  /**
   * Get Post By postId
   * @param {number} postId
   * @returns {object} post
   */
  public getPostById(postId: string) {
    return {
      postId,
      title: `Post ${postId}`,
      content: `Post ${postId} content`,
    };
  }

  /**
   * Get All posts of a particular user
   * @params {number} userId
   * @returns {array} posts
   */
  public getUsersPosts(userId: string) {
    // find the user
    const user = this.userService.findOneById(userId);

    // if users exists, return his/her all posts
    return [
      {
        user,
        postId: 1,
        title: 'Post 1',
        content: 'Post 1 content',
      },
      {
        user,
        postId: 2,
        title: 'Post 2',
        content: 'Post 2 content',
      },
    ];
  }
}
