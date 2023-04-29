import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common'
import { FormService } from './form.service'
import { DtoDataForm } from './dto/create-form.dto'

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('/order')
  @HttpCode(200)
  fastOrder(@Body() FormOrder: DtoDataForm) {
    console.log(FormOrder)
    return this.formService.fastOrder(FormOrder)
  }

  // @Post('/orderSpecialist')
  // @HttpCode(200)
  // specialistOrder(@Body() FormOrder: DtoDataForm) {
  //   console.log(FormOrder)
  //   return this.formService.create(FormOrder)
  // }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.formService.findAll()
  }
}
