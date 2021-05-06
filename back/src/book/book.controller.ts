import { AbstractController } from '../common/abstract.controller';
import { AbstractService } from '../common/abstract.service';
import { IBook, IBookDto } from './book.model';
import { bookService } from './book.service';

class BookController extends AbstractController<IBook, IBookDto> {

  protected get service(): AbstractService<IBook, IBookDto> {
    return bookService;
  }
}

export const bookController = new BookController();
