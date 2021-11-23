import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { IshoppingCartItems } from 'src/app/ViewModel/ishopping-cart-items';
import { CartState } from 'src/app/ViewModel/shoping-state';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.scss']
})
export class ChildCardComponent implements OnInit,OnChanges {

  public IsPurshased:boolean=false;
  public SelectedProduct :IProduct[]=[];
  @Input() public CatagoryID:any ;
  public ProductList:IProduct[];
  @Output() shoppingCartItems:EventEmitter<IshoppingCartItems> ;

  constructor() {
   this.shoppingCartItems=new EventEmitter<IshoppingCartItems>();
    this.ProductList=[
      {
      ID : 1 ,
      Name :"Iphone 7" ,
    	Quantity : 20,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },

     {
      ID : 2 ,
      Name :"Iphone 11" ,
    	Quantity : 1,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },

     {
      ID : 3 ,
      Name :"Iphone 13 pro max" ,
    	Quantity : 30,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },
    {
      ID : 4 ,
      Name :"Samsung s8" ,
    	Quantity : 10,
    	Price : 200 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
    },
    {
      ID : 5 ,
      Name :"Oppo f7" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
    },
    {
      ID : 6 ,
      Name :"Toushiba Alarabi" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2 ,      
    },
    {
      ID : 7 ,
      Name :"LG 2886E6" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },
    {
      ID : 8 ,
      Name :"Sony 6F566" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },

    {
      ID : 9 ,
      Name :"Sony 6F566" ,
    	Quantity : 1,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },

    ]
  }
  ngOnChanges(changes: SimpleChanges): void {

    if(this.CatagoryID==0)
    this.SelectedProduct=this.ProductList;
    else
    this.SelectedProduct =this.ProductList.filter(item=>item.CateogryID==this.CatagoryID);
  }

  ngOnInit(): void {

    this.SelectedProduct=Array.from(this.ProductList);
  }

  addToCart(ProductQuantity:string,item:IProduct)
  {

    let shopCardItem :IshoppingCartItems= 
    {
      ProductID:item.ID ,
      ProductName:item.Name,
      Unitprice:item.Price,
      Selectedquantity: +ProductQuantity,
      CartState:CartState.addToCart

    }
        
     this.shoppingCartItems.emit(shopCardItem);

     this.decreadeQuantity(item.ID,shopCardItem.Selectedquantity);
  }

  removeFromCart(ProductQuantity:string,item:IProduct)
  {
    let shopCardItem :IshoppingCartItems= 
    {
      ProductID:item.ID ,
      ProductName:item.Name,
      Unitprice:item.Price,
      Selectedquantity: +ProductQuantity,
      CartState:CartState.removeFromCart
    }
        
     this.shoppingCartItems.emit(shopCardItem);
     this.increaseQuantity(item.ID,shopCardItem.Selectedquantity);
  }

  decreadeQuantity(Id:number,quantity:number){

  
    this.SelectedProduct.map(Item=>{
      if(Item.ID==Id)
      Item.Quantity= Item.Quantity-quantity;
    })
    console.log(this.SelectedProduct)
    
  }
  increaseQuantity(Id:number,quantity:number){

  
    this.SelectedProduct.map(Item=>{
      if(Item.ID==Id)
      Item.Quantity= Item.Quantity+quantity;
    })
    console.log(this.SelectedProduct)
    
  }
}
