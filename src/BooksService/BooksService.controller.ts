import { Controller, Get } from '@nestjs/common';
import { BooksService } from './BooksService.service';
import { Book } from './interfaces/BooksService.interface';

@Controller('books')
export class BooksServiceController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    const newBook1: Book = { title: 'Book1', authors: 'Authors' };
    this.booksService.create(newBook1);

    const newBook2: Book = { title: 'Book2', authors: 'Authors' };
    this.booksService.create(newBook2);
    return this.booksService.findAll();
  }
}
