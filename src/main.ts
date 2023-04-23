import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as express from 'express'
import path, { join, resolve } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'
import { cwd } from 'process'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api')

  // app.use('/static', express.static(path.join('/var/www/vecktorimg/public/cctv')))

  app.useStaticAssets(join(__dirname, '..', 'public', 'img'), {
    prefix: '/img',
  })
  await app.listen(4000)
  console.log(join(__dirname, '..', 'public', 'static', 'img'))
}
bootstrap()
