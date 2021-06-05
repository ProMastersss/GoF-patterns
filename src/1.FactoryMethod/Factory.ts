import { Transport } from "./Transport";

export interface Factory {
  create(): Transport;
}
