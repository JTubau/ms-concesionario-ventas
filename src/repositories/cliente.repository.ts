import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConcesionarioDbDataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {
  constructor(
    @inject('datasources.concesionarioDB') dataSource: ConcesionarioDbDataSource,
  ) {
    super(Cliente, dataSource);
  }
}