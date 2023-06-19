import { Module } from '@nestjs/common'
import { FormService } from './form.service'
import { FormController } from './form.controller'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true, // upgrade later with STARTTLS
        logger: true,
        auth: {
          user: process.env.NAME_MAIL,
          pass: process.env.PASS_MAIL,
        },
        requireTLS: true,
      },
    }),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
