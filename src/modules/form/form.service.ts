import { Injectable } from '@nestjs/common'
import { DtoDataForm } from './dto/create-form.dto'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class FormService {
  constructor(private readonly mailerService: MailerService) {}
  async fastOrder(FormOrder: DtoDataForm) {
    if (!FormOrder) return 'В форме ошибка'
    return this.example(FormOrder)
  }

  async orderFormCartPage(FormOrder: DtoDataForm) {
    if (!FormOrder) return 'В форме ошибка'
    return 'форма со страницы корзины'
  }

  public example(FormOrder: DtoDataForm): void {
    const { data } = FormOrder
    const json = data.data.parse

    this.mailerService
      .sendMail({
        to: 'tmk-v.ru@yandex.ru', // list of receivers
        from: 'tmk-v.ru@yandex.ru', // sender address
        subject: 'Заявка с крутого интернет-магазина ✔', // Subject line
        text: 'welcome', // plaintext body
        html: `<div> 
        <h1> Имя: ${data.name}
        </h1>
        </br>
        <h2>Телефон: ${data.phone}</h2>
        <h2>Почта: ${data.email}</h2>
        <h2>Артикул товара (можно найти через поиск на сайте): ${data.article}</h2>
        <h2>ID: ${data.id}</h2>
        <h2>Цена: ${data.price}</h2>
        <h2>Название товара: ${data.title}</h2>
        <h2>Название товара: ${json}</h2>
        
        </div>`, // HTML body content
      })
      .then(success => {
        console.log(success)
        return 'Форма отправленна'
      })
      .catch(err => {
        console.log(err)
      })
  }
}
