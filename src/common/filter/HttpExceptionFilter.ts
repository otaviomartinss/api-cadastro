import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        
    }
}