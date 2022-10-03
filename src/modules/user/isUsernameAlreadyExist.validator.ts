import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "./user.service";

@Injectable()
@ValidatorConstraint()
export class IsUsernameAlreadyExistConstraint implements ValidatorConstraintInterface{
    
  constructor(private userService: UserService){}
  
  async validate(username: string, validationArguments?: ValidationArguments): Promise<boolean> {
    return await this.userService.usernameExists(username);
    }}

export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        name: 'isLongerThan',
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: validationOptions,
        validator: IsUsernameAlreadyExistConstraint
      });
    };
  }