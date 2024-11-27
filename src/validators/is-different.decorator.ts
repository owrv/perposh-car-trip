import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsDifferentConstraint } from './is-different.validator';

export function IsDifferent(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsDifferentConstraint,
    });
  };
}
