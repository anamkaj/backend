import { Type } from 'class-transformer'
import { IsAlphanumeric, IsDecimal, IsInt, IsNotEmpty, ValidateNested } from 'class-validator'

class CreateFormDto {
  @IsInt({ message: 'article - должен быть типом Int' })
  article: number
  title: string
  @IsInt({ message: 'price - должен быть типом Int' })
  price: number
  @IsInt({ message: 'tel - должен быть типом Int' })
  tel: number
  name: string
  email: string
  @IsInt({ message: 'id - должен быть типом Int' })
  id: number
}

export class DtoDataForm {
  @Type(() => CreateFormDto)
  @ValidateNested()
  @IsNotEmpty()
  data: CreateFormDto
}
