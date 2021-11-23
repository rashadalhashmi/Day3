import { Component,  OnInit,  } from '@angular/core';
import { ProductHttpService } from 'src/app/Service/Product/product-http.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { ICategory } from 'src/app/ViewModel/icategory';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  public CategoryList: ICategory[] = [];

  constructor(private productService: ProductService,private httpProduct:ProductHttpService) {
  }

  ngOnInit(): void {
   this.httpProduct.getAllCategory().subscribe(cat=>this.CategoryList=cat)
  }

  changeCategory($event: Event) {
    this.productService.setProducts(+($event.target as HTMLInputElement).value);
  }

}
