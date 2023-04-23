import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { CategoryService } from './category.service'
import { GetParamCategory } from './dto/category.dto'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/oneCategory/:id')
  async findOne(@Param() id: string) {
    return this.categoryService.findOne(Number(id))
  }
  // Принимаем id категории с фронта и получаем все категории для страницы категории

  @Get('/all-category')
  async allCategory(@Query() body: GetParamCategory) {
    console.log(body)
    return this.categoryService.allCategory(body)
  }
}
