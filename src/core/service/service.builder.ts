import { Injectable } from "@angular/core";
import { IServiceBuilder } from "./service.builder.interface";

@Injectable({ providedIn: 'root' })
export abstract class ServiceBuilder<T> implements IServiceBuilder<T> {

  abstract BuildInstance(): T;
  abstract BuildInstance(id: number): T;
  abstract BuildInstance(id: number, descriptor: string): T;

  abstract BuildSeekInstance(): T;

}
