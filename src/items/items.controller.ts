import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";

import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { Item } from "./interfaces/item.interface";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  public findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(":id/:name?")
  public findOne(
    @Param("id") id: string,
    @Param("name") name?: string,
  ): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  public create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(":id")
  public delete(@Param("id") id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(":id")
  public update(
    @Body() updateItemDto: UpdateItemDto,
    @Param("id") id: string,
  ): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
