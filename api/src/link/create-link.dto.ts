import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsUrl()
  destination: string;

  @IsString()
  @IsOptional()
  hash?: string;
}
