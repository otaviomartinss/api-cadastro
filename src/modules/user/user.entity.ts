import { Exclude, Expose } from "class-transformer";
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

    @Expose({
        name: "nome"
    })
    @IsString()
    name: string;


    @IsNotEmpty({
        message: "Email is required"
    })
    @IsEmail()
    email: string;


    @Exclude({
        toPlainOnly: true
    })
    @Expose({
        name:"senha"
    })
    @IsNotEmpty({
        message: "Password is required"
    })
    password: string;

    @IsNotEmpty()
    @Expose({
        name: "aniversario"
    })
    birthDate: String;
}