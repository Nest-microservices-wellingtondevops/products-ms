import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
