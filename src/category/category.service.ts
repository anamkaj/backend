import { PrismaService } from './../db/prisma.service'
import { Injectable } from '@nestjs/common'
import { Category, GetParamCategory, ICategory, IChildrenCategory } from './dto/category.dto'
import { addStore, checkDouble, filterCat, flatArrayCategory } from './helper/filter.cat'
import { categoryFlatArray } from './helper/category.filter'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async findOne(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id: 4,
      },
    })
  }
  // Получение всех категорий и подкатегорий

  async allCategory(body: GetParamCategory) {
    const categoryAll = this.prisma.category.findMany({
      include: {
        childrenCategories: {
          include: {
            childrenCategories: {
              include: {
                childrenCategories: true,
              },
            },
          },
        },
      },
    })

    // Фильтрация из всех категорий одну

    const category = await categoryAll

    // addStore(category)

    // if (filterCat(body.id)) {
    //   return flatArrayCategory
    // }
    return categoryFlatArray(category)
  }
}
