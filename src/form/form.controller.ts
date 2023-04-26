import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common'
import { FormService } from './form.service'
import { DtoDataForm } from './dto/create-form.dto'

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('/order')
  @HttpCode(200)
  create(@Body() FormOrder: DtoDataForm) {
    console.log(FormOrder)
    return this.formService.create(FormOrder)
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.formService.findAll()
  }
}
