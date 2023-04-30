import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'
import { CategoryModule } from './category/category.module'
import { FormModule } from './form/form.module';
import { ReviewsModule } from './reviews/reviews.module';



@Module({
  imports: [ProductModule, CategoryModule, FormModule, ReviewsModule],
  controllers: [],
})
export class AppModule {}
