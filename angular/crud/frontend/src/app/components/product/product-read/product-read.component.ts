import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos : Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'actions']
  constructor(private productService : ProductServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.productService.read().subscribe(sucesso =>{
      this.produtos = sucesso
    })
  }

  update(id : string) : void{
    this.router.navigate([`products/update/${id}/update`])
  }

  delete(id : string) : void{
    this.router.navigate([`products/delete/${id}/delete`])
  }

  
}
