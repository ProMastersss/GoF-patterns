import { BoxOffice } from "./BoxOffice";

export class BoxDiscountOffice extends BoxOffice {
  discount(): number {
    return 0.5;
  }
}
