import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/components/product/product-service.service';
import { Product } from 'src/app/components/product/product.model';
import { FormProdutctDataService } from '../form-produtct-data.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  produto : Product = {
    name : '',
    price : 0
  }

   action = '';

  constructor(private router: Router,
    private productDataService: FormProdutctDataService,
    private produtoService: ProductServiceService,
    private route : ActivatedRoute) {
      const nomeBotao = route.snapshot.paramMap.get('labelBotao');
      this.action = nomeBotao || ''
      if ( nomeBotao === 'delete'){
        productDataService.formProductData ={
          titulo : 'Excluir' || '',
          botaoCor: 'warn' || '',
          botaoLabel: 'Excluir' || '',
          edicao: true
        }
      }else if ( nomeBotao === 'update'){
        productDataService.formProductData ={
          titulo : 'Atualizar' || '',
          botaoCor: 'primary' || '',
          botaoLabel: 'Atualizar' || '',
          edicao: false
        }
      }else{
        productDataService.formProductData ={
          titulo : 'Cadastrar' || '',
          botaoCor: 'primary' || '',
          botaoLabel: 'Salvar' || '',
          edicao: false
        }
      }
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.readById(id).subscribe(sucesso => {
        this.produto = sucesso;
      })
    }
  }

  actionsProduct() : void {
    if ( this.action === 'delete'){
      this.delete();
    }else{
      this.createProduct();
    } 
  }

  delete(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.produtoService.delete(id).subscribe(() =>{
        this.produtoService.showMessage('Produto Excluído!!')
        this.router.navigate(['products'])
      })
    }
  }

  createProduct(){
    if (this.produto.id){
      this.produtoService.update(this.produto).subscribe(() =>{
        this.produtoService.showMessage('Produto Atualizado!!');
        this.router.navigate(['products'])
      })

    }else{
      this.produtoService.create(this.produto).subscribe(() =>{
        this.produtoService.showMessage("Produto Criado!!");
        this.router.navigate(['products'])
      })
    }
  }

  cancel() :void{
    this.router.navigate(['products'])
  }

  get botaoLabel() : string{
    return this.productDataService.formProductData.botaoLabel;
  }

  get titulo() : string{
    return this.productDataService.formProductData.titulo
  }

  get botaoCor() : string{
    return this.productDataService.formProductData.botaoCor
  }

  get edicao() : boolean{
    return this.productDataService.formProductData.edicao
  }

}
