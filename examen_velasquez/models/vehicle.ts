export interface Vehicle {
  marca: string;
  modelo: string;
  placa: string;
  nombreDueno: string;
  ano: string;
  tipoGasolina: string;
}

export const emptyVehicle: Vehicle = {
  marca: '',
  modelo: '',
  placa: '',
  nombreDueno: '',
  ano: '',
  tipoGasolina: '',
};
