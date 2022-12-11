import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsArray()
  public sectors: string[];

  @IsBoolean()
  @IsNotEmpty()
  public agree: boolean;
}
