import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly service: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.service.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.service.create(movieData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteOne(id);
  }
}
