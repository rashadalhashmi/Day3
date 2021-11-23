import { CartState } from "./shoping-state";

export interface IshoppingCartItem {
    ProductID:number;
     ProductName:string;
     Unitprice:number;
     Selectedquantity:number;
     CartState:CartState;
}
