

## Description

Nest Js Rest APi example

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# Project Description 

Step 1: Set Up Your NestJS Project

# Install Nest CLI globally 
   npm install -g @nestjs/cli 

# create a new NestJS project:
    nest new my-nest-api
    cd my-nest-api

# Step 2: Generate a Module and a Controller 

     nest generate module items
     nest generate controller items
     nest generate service items
     
# Step 3: Define the Item Entity

  Create a new file item.entity.ts in the src/items directory

  // src/items/item.entity.ts
  export class Item {
    id: number;
    name: string;
    description: string;
  }

# Step 4: Implement the Service

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

  
# Step 5: Implement the Controller

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

# Step 6: Update the Module

   // src/items/items.module.ts
    import { Module } from '@nestjs/common';
    import { ItemsController } from './items.controller';
    import { ItemsService } from './items.service';

    @Module({
      controllers: [ItemsController],
      providers: [ItemsService],
    })
    export class ItemsModule {}

# Step 7: Import the Items Module in App Module

   // src/app.module.ts
    import { Module } from '@nestjs/common';
    import { ItemsModule } from './items/items.module';
    
    @Module({
      imports: [ItemsModule],
    })
    export class AppModule {} 

# Step 8: Start the Application

  npm run start
  
![image](https://github.com/user-attachments/assets/60a9f79b-2b5e-4001-af17-44cbfc575a51)


# Use tools like Postman or curl to test your API.

  Create Item: POST http://localhost:3000/items with JSON body: 

  {
  "name": "Item 6",
  "description": "Thissasds is item 6"
}

 ![image](https://github.com/user-attachments/assets/8e150841-0dfe-48f0-937e-5411c051d169)  

   Get All Items: GET http://localhost:3000/items

   Get Single Item: GET http://localhost:3000/items/1

   Update Item: PUT http://localhost:3000/items/1 with JSON body: 

   Delete Item: DELETE http://localhost:3000/items/1



