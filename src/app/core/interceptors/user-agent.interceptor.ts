import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utils } from '../utils/utils';
import { APP_CONFIG } from '../../../env/app.config';

@Injectable()
export class UserAgentInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // Modify the request headers to add or modify the User-Agent header
        const modifiedRequest = request.clone({
            setHeaders: {
                'User-Agent': Utils.getUserAgentHeader(APP_CONFIG),
            },
        });

        // Pass the modified request to the next handler
        return next.handle(modifiedRequest);
    }
}
