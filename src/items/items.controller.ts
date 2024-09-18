// src/items/items.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item: Item): Item {
    return this.itemsService.create(item);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll(); // This should return complete items
  }

  @Get(':id')
findOne(@Param('id') id: string): Item {
  const numericId = parseInt(id, 10); // Convert to number
  return this.itemsService.findOne(numericId); // Pass the numeric ID
}

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedItem: Item): Item {
  	const numericId = parseInt(id, 10); // Convert to number
    return this.itemsService.update(numericId, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
  	const numericId = parseInt(id, 10); // Convert to number
    return this.itemsService.delete(numericId);
  }
}
