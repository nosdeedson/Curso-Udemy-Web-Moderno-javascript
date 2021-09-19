import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto : Product = {
    name : '',
    price: 0
  }

  constructor(private productService: ProductServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }


}
