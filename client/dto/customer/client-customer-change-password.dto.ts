import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class ClientCustomerChangePasswordDto {
    @ApiProperty({ description: '現在のパスワード' })
    @IsNotEmpty()
    @IsString()
    oldPassword!: string

    @ApiProperty({ description: 'password' })
    @MinLength(6)
    @MaxLength(255)
    password!: string
}
