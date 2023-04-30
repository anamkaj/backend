import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { CreateReviewDto } from './dto/create-review.dto'

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('/reviews')
  @HttpCode(200)
  async findAll(@Query() body: CreateReviewDto) {
    console.log(body)
    return this.reviewsService.findAll(body)
  }
}
