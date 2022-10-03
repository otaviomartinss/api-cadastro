import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "./user.service";


@ValidatorConstraint()
export class IsUsernameAlreadyExistConstraint implements ValidatorConstraintInterface{
    constructor(private userService: UserService){}
    validate(username: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        const test = !!!this.userService.findByUsername(username)
        console.log(test)
        return test
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