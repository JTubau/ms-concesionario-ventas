import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Factura,
  Venta,
} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaVentaController {
  constructor(
    @repository(FacturaRepository)
    public facturaRepository: FacturaRepository,
  ) { }

  @get('/facturas/{id}/venta', {
    responses: {
      '200': {
        description: 'Venta belonging to Factura',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Venta),
          },
        },
      },
    },
  })
  async getVenta(
    @param.path.number('id') id: typeof Factura.prototype.id,
  ): Promise<Venta> {
    return this.facturaRepository.venta(id);
  }
}
