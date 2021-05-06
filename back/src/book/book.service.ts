import { sellerService } from '../bookSellers/bookSellers.service';
import { AbstractMapper } from '../common/abstract.mapper';
import { AbstractRepository } from '../common/abstract.repository';
import { AbstractService } from '../common/abstract.service';
import { UserModel } from '../user/user.model';
import { bookMapper } from './book.mapper';
import { IBook, IBookDto } from './book.model';
import { bookRepository } from './book.repository';

class BookService extends AbstractService<IBook, IBookDto> {

    protected include = [
        {
            model: UserModel,
            as: 'users',
            attributes: ['id', 'firstName', 'lastName']
        }
    ]

    protected get repository(): AbstractRepository<IBook>{
        return bookRepository;
    }

    protected get mapper(): AbstractMapper<IBook, IBookDto>{
        return bookMapper;
    }

    create(dto: IBookDto, userId: number): Promise<IBookDto> {
        return this.mapper.dtoToModel(dto)
            .then((model) => {
                return this.repository.create(model)
                    .then((newRow) => {
                        sellerService.create(newRow.id, userId)
                        .then(() => {
                            return this.mapper.modelToDto(newRow)
                        })
                    })
            }) as unknown as Promise<IBookDto>
    }
}

export const bookService = new BookService();