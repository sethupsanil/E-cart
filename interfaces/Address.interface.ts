export interface Address {
  orderingFor: string | number;
  addressType: string | number | undefined;
  buildingName: string | undefined;
  floor: string | undefined;
  area: string | undefined;
  landmark: string | undefined;
  name: string | undefined;
  phone: string | undefined | number;
}
