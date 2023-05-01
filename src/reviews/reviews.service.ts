import { Injectable } from '@nestjs/common'
import { DtoDataReviews, GetReviewDto } from './dto/create-review.dto'
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  // Запрос всех отзывов

  async findAll(body: GetReviewDto) {
    const findAll = this.prisma.reviews.findMany({
      where: {
        productId: Number(body.id),
      },
    })
    return findAll
  }

  // Добавление отзыва в DB

  async createReviews(body: DtoDataReviews) {
    const { data } = body
    const createReviews = this.prisma.reviews.create({
      data: {
        text: data.text,
        productId: data.productId,
      },
    })
    return createReviews.then(() => {
      return true
    })
  }
}
