import type { UID } from '../..';
import type * as Middleware from './middleware';
import type { ServiceInstance } from './service-instance';
import type { AnyDocument } from './result';

export * as Middleware from './middleware';
export * as Params from './params';
export * from './plugin';
export * from './result';
export * from './service-instance';

export type ID = string;

type ServiceUtils = {
  transformData: (data: any, opts: any) => Promise<AnyDocument>;
};

export type Service = {
  <TContentTypeUID extends UID.ContentType>(uid: TContentTypeUID): ServiceInstance<TContentTypeUID>;
  utils: ServiceUtils;
  /** Add a middleware for all uid's and a specific action
   *  @example - Add a default locale
   *  strapi.documents.use('findMany', (ctx, next) => {
   *    if (!params.locale) params.locale = 'en'
   *    return next(ctx)
   *  })
   */
  use: (cb: Middleware.Middleware) => Service;
};