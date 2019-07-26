import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ItemsModule } from "./items/items.module";

@Module({
  imports: [ItemsModule, MongooseModule.forRoot("mongodb://127.0.0.1:27017")],
  controllers: [],
  providers: [],
})
export class AppModule {}
