import { ItemsService } from './items.service';
import { Item } from './item.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(item: Item): Item;
    findAll(): Item[];
    findOne(id: string): Item;
    update(id: string, updatedItem: Item): Item;
    delete(id: string): boolean;
}
