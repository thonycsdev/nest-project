import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './models/Cat';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get('breed')
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Post()
  create(@Body() body: Cat) {
    this.catsService.create(body);
  }
}
