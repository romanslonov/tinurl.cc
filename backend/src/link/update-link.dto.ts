import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateLinkDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  destination?: string;

  @IsString()
  @IsOptional()
  hash?: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
