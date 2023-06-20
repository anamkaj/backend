import { Module } from '@nestjs/common'
import { FormService } from './form.service'
import { FormController } from './form.controller'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'connect.smtp.bz',
        port: 465,
        secure: true, // upgrade later with STARTTLS
        logger: true,
        auth: {
          user: 'tmk-v.ru@yandex.ru',
          pass: '1T63FVcHz0Uy',
        },
      },
    }),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
