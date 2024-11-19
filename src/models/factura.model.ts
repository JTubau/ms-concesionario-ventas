import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Venta} from './venta.model';

@model({
  settings: {
    foreignKeys: {
      fk_vendedor_usuario: {
        name: 'fk_factura_venta',
        entity: 'Venta',
        entityKey: 'id',
        foreignKey: 'id_venta'
      }
    }
  }
})
export class Factura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  consecutivo: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  precioVenta: number;

  @belongsTo(() => Venta, {name: 'venta'})
  id_venta: number;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
