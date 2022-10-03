import { IsNotEmpty, IsString, IsEmail } from "class-validator"
import { IsUsernameAlreadyExist } from "./isUsernameAlreadyExist.validator";
export class UserDTO {
    id: number;

    @IsUsernameAlreadyExist({
        message: "Username must be unique"
    })
    @IsNotEmpty({
        message: "Username is required"
    })
    @IsString()
    username: string;

    @IsString()
    name: string;

    @IsNotEmpty({
        message: "Email is required"
    })
    @IsEmail()
    email: string;

    @IsNotEmpty({
        message: "Password is required"
    })
    password: string;
    birthDate: String;
}