import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  produto!: Product;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ''
    this.productService.readById(id).subscribe(sucesso => {
      this.produto = sucesso;
    })
  }

  deleteProduct() : void{
    const id = this.produto.id?.toString() || '';
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluído!!');
      this.router.navigate(['/products'])
    })
  }

  cancel() : void{
    this.router.navigate(['/products'])
  }

}
