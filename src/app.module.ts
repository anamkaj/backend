import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'
import { CategoryModule } from './category/category.module'
import { FormModule } from './form/form.module';


@Module({
  imports: [ProductModule, CategoryModule, FormModule],
  controllers: [],
})
export class AppModule {}
