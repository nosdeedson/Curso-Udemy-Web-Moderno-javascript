import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto!: Product; 

  constructor(private productService : ProductService,
    private router : Router) { }

  ngOnInit(): void {
  }

  createProduct() :void {
    this.productService.create(this.produto).subscribe(()=>{
      this.productService.showMessage("Produto Criado!!")
      this.router.navigate(["/products"]);
    })
  }

  cancel() :void {
    this.produto.name = '';
    this.produto.price = 0;
    this.router.navigate(["/products"]);
  }
}
