import { Controller, Get } from '@nestjs/common';
import { PostService } from './post-service.service';
import { PostType } from './models/post.type';

@Controller('post')
export class PostController {
  constructor(private _service: PostService) {}

  @Get() //GET htpp://localhost:3000/post
  findAll(): Array<PostType> {
    return this._service.findAll();
  }
}
