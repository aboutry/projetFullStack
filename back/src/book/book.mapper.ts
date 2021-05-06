import { AbstractMapper } from '../common/abstract.mapper';
import { IBook, IBookDto } from './book.model';

export class BookMapper extends AbstractMapper<IBook, IBookDto> {

    modelToDto(model: IBook): Promise<IBookDto> {
        return {
            id: model.id,
            titre: model.title,
            couverture: model.cover,
            auteur: model.author,
            editeur: model.editor,
            genres: model.genres,
            description: model.summary,
            date_de_publication: model.issueDate,
            nb_de_page: model.pageNumber,
            prix: model.price,
            isbn: model.isbn,
            note: model.note,
            evaluation: model.evaluation,
            users: model.users
        } as unknown as Promise<IBookDto>
    }

    dtoToModel(dto: IBookDto): Promise<IBook> {
        return new Promise((resolve, reject) => {
            if(!dto){
                reject()
            }

            resolve({
                id: dto.id,
                title: dto.titre,
                cover: dto.couverture,
                author: dto.auteur,
                editor: dto.editeur,
                genres: dto.genre,
                summary: dto.description,
                issueDate: dto.date_de_publication,
                pageNumber: dto.nb_de_page,
                price: dto.prix,
                isbn: dto.isbn,
                note: dto.note,
                evaluation: dto.evaluation
            })
        })
    }
}

export const bookMapper = new BookMapper();