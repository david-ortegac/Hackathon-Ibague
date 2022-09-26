import { Trazabilidad } from "./trazabilidad.model";

export class Emergencia {
  id?: string;
  descripcion?: string;
  lugar?: string;
  tipoEmergencia?: string;
  estado?: string;
  asignacion?: string;
  trazabilidad?: Trazabilidad;
}
