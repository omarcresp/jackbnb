import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePropertyDto {
  @IsEmail()
  email: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsNotEmpty()
  password: string;
}
