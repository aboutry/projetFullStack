import { AbstractController } from '../common/abstract.controller';
import { AbstractRouter } from '../common/abstract.router';
import { bookController } from './book.controller';
import { IBook, IBookDto } from './book.model';

class BookRouter extends AbstractRouter<IBook, IBookDto> {

  protected get controller(): AbstractController<IBook, IBookDto> {
    return bookController;
  }
}

export const bookRouter = new BookRouter().router;