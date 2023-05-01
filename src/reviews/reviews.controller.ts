import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { DtoDataReviews, GetReviewDto } from './dto/create-review.dto'

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('/reviews')
  @HttpCode(200)
  async findAll(@Query() body: GetReviewDto) {
    return this.reviewsService.findAll(body)
  }

  @Post('/reviews')
  @HttpCode(200)
  async createReviews(@Body() body: DtoDataReviews) {
    return this.reviewsService.createReviews(body)
  }
}
