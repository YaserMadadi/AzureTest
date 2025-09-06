import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer implements UrlSerializer {
  override parse(url: string): UrlTree {
    // Always convert incoming URL to lowercase
    return super.parse(url.toLowerCase());
  }
}