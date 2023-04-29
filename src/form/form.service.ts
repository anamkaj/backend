import { Injectable } from '@nestjs/common'
import { DtoDataForm } from './dto/create-form.dto'

@Injectable()
export class FormService {
  fastOrder(FormOrder: DtoDataForm) {
    if (!FormOrder) return 'В форме ошибка'
    return true
  }

  findAll() {
    return `This action returns all form`
  }
}
