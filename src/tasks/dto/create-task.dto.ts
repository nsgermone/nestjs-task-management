import { isNotEmpty, IsNotEmpty } from "class-validator";
export class CreateTastDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
