import { Injectable } from '@nestjs/common'
import { DtoDataForm } from './dto/create-form.dto'

@Injectable()
export class FormService {
  async fastOrder(FormOrder: DtoDataForm) {
    if (!FormOrder) return 'В форме ошибка'
    return 'форма получена'
  }

  async orderFormCartPage(FormOrder: DtoDataForm) {
    if (!FormOrder) return 'В форме ошибка'
    return 'форма со страницы корзины'
  }
}
