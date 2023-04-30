import { Injectable } from '@nestjs/common'
import { CreateReviewDto } from './dto/create-review.dto'
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}
  async findAll(body: CreateReviewDto) {
    const allReviews = this.prisma.reviews.findMany({
      where: {
        productId: Number(body.id),
      },
    })
    return allReviews
  }
}
