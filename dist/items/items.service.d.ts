import { Item } from './item.entity';
export declare class ItemsService {
    private items;
    private idCounter;
    create(item: Item): Item;
    findAll(): Item[];
    findOne(id: number): Item;
    update(id: number, updatedItem: Item): Item;
    delete(id: number): boolean;
}
