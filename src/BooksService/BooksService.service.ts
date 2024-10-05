import { Book } from './interfaces/BooksService.interface';

export class BooksService {
  private readonly books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }
}
