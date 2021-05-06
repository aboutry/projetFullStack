import { ISellers } from "./bookSellers.model";
import { sellersRepository } from "./bookSellers.repository";


class SellerService {

    create(bookId: number, sellerId: number): Promise<ISellers> {
        return sellersRepository.addSeller({ sellerId: sellerId, bookId: bookId })
    }
}

export const sellerService = new SellerService()