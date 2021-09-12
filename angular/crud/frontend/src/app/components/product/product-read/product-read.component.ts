import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos : Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'actions']
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(sucesso =>{
      this.produtos = sucesso
    })
  }

}
