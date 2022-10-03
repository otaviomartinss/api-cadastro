import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NestResponse } from "./nestResponse";

@Injectable()
export class TransformInterceptorResponse implements NestInterceptor{

    private httpAdapter: AbstractHttpAdapter

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter
    }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
                    .pipe(
                        map((controllerResponse: NestResponse) => {
                            if (controllerResponse instanceof NestResponse){
                                const ctx = context.switchToHttp()
                                const response = ctx.getResponse()
                                const { headers, status, body } = controllerResponse
                                const headersName = Object.getOwnPropertyNames(headers)

                                headersName.forEach(headersName => {
                                    const headerValue = headers[headersName]
                                    this.httpAdapter.setHeader(response, headersName, headerValue)
                                })
                                this.httpAdapter.status(response, status)
                                
                                return body
                            }
                            
                            return controllerResponse
                        }))

    }

}