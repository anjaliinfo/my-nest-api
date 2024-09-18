// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1;

  create(item: Item): Item {
    item.id = this.idCounter++;
    this.items.push(item);
    return item; // Return full item
  }

  findAll(): Item[] {
  	console.log('Current items:', this.items);
    return this.items; // Should return complete items
  }

  findOne(id: number): Item {
  	const item = this.items.find(item => item.id === id);
  	console.log('Found item:', item); // Log the found item for debugging
  	return item; // This should return the complete item
  }

  update(id: number, updatedItem: Item): Item {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { id, ...updatedItem };
      return this.items[index];
    }
  }

  delete(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
