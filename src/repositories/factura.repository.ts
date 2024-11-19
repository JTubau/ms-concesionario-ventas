import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConcesionarioDbDataSource} from '../datasources';
import {Factura, FacturaRelations, Venta} from '../models';
import {VentaRepository} from './venta.repository';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {

  public readonly venta: BelongsToAccessor<Venta, typeof Factura.prototype.id>;

  constructor(
    @inject('datasources.concesionarioDB') dataSource: ConcesionarioDbDataSource, @repository.getter('VentaRepository') protected ventaRepositoryGetter: Getter<VentaRepository>,
  ) {
    super(Factura, dataSource);
    this.venta = this.createBelongsToAccessorFor('venta', ventaRepositoryGetter,);
    this.registerInclusionResolver('venta', this.venta.inclusionResolver);
  }
}
