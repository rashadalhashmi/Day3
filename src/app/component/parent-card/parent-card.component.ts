import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/ViewModel/icategory';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss']
})
export class ParentCardComponent implements OnInit {


  public CategoryList:ICategory[];
  public categoryID :number=0

  constructor() { 




    this.CategoryList=[
      {
        ID:1,
        Name:"phones",

      },
      {
        ID:2,
        Name:"TV",

      },

      
    ]
  }


  ngOnInit(): void {
  }

}
