import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import path, { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common'
import { config } from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  config()

  app.useStaticAssets(join(__dirname, '..', 'public', 'img'), {
    prefix: '/img',
  })
  console.log("hell")

  await app.listen(8080)
  console.log(join(__dirname, '..', 'public', 'static', 'img'))
}
bootstrap()
