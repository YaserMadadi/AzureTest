

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Entity } from '.';


@Injectable({ providedIn: 'root' })
export class Entity_Builder extends ServiceBuilder<Entity> implements IServiceBuilder<Entity> {

  constructor() {
        super();
    }

  
  BuildInstance(): Entity;
  BuildInstance(id: number): Entity;
  BuildInstance(id: number, descriptor: string): Entity;
  BuildInstance(id: number = 0, descriptor: string = ''): Entity {
    return new Entity(id, descriptor);
  }

  BuildSeekInstance(): Entity {
    return Entity_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Entity {
    let entity = new Entity();
    entity.isActive = undefined;
    return entity;
  }
}