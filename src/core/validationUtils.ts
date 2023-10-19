import { ValidationError } from 'class-validator';

//TODO 优化错误信息拼接过程
export function extractValidationErrors(errors: ValidationError[]): string {
  const errorMessages = errors.map(error => {
    const constraints = error.constraints;
    if (constraints) {
      return Object.values(constraints).join(', ');
    }
    return ''; // 如果没有 constraints，返回空字符串
  }).filter(message => message).join(', ');

  return errorMessages;
}
