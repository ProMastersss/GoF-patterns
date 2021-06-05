export interface FlyweightFactory {
  create(value: any): any;
  getUniqueCount(): number;
}
