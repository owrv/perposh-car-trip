import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class Payload {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly custumer_id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly origin!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @IsDifferent('origin', { message: 'Destino deve ser diferente de origem' })
  readonly destination!: string;
}
