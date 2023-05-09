import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class CountsService {
  constructor(private prisma: PrismaService) {}

  // Счетчик увеличения количества просмотров

  async countViewInc(id: number) {
    const updateCountView = this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        watchProduct: {
          increment: 1,
        },
      },
    })
    return updateCountView.then(() => {
      return true
    })
  }
  async countRatingInc(id: number) {
    console.log(id)
    const countRatingInc = this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        countReviews: {
          increment: 1,
        },
      },
    })
    return countRatingInc.then(() => {
      return true
    })
  }
}
