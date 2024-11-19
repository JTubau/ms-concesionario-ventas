import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConcesionarioDbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations} from '../models';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {
  constructor(
    @inject('datasources.concesionarioDB') dataSource: ConcesionarioDbDataSource,
  ) {
    super(Vehiculo, dataSource);
  }
}
