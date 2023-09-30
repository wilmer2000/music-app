import { InjectionToken } from '@angular/core';
import { IAppConfig } from './core/interfaces/app-config.interface';

export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
