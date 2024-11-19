import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {ConcesionarioDbDataSource} from '../datasources';
import {Venta, VentaRelations, Factura} from '../models';
import {FacturaRepository} from './factura.repository';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.id,
  VentaRelations
> {

  public readonly factura: HasOneRepositoryFactory<Factura, typeof Venta.prototype.id>;

  constructor(
    @inject('datasources.concesionarioDB') dataSource: ConcesionarioDbDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>,
  ) {
    super(Venta, dataSource);
    this.factura = this.createHasOneRepositoryFactoryFor('factura', facturaRepositoryGetter);
    this.registerInclusionResolver('factura', this.factura.inclusionResolver);
  }
}
