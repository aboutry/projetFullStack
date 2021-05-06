import { ISellers, SellersModel } from "./bookSellers.model";

class SellersRepository {

    addSeller(item: ISellers): Promise<ISellers> {
        return SellersModel.create(item) as unknown as Promise<ISellers>
    }
}

export const sellersRepository = new SellersRepository();