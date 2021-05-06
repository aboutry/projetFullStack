import { AbstractRepository } from '../common/abstract.repository';
import { BookModel, IBook } from './book.model';

class BookRepository extends AbstractRepository<IBook> {
  protected modelClass = BookModel;
}

export const bookRepository = new BookRepository();