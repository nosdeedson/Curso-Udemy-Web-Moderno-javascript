import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';
import { FormUserService } from './form-user.service';

@Component({
  selector: 'app-form-template-user',
  templateUrl: './form-template-user.component.html',
  styleUrls: ['./form-template-user.component.css']
})
export class FormTemplateUserComponent implements OnInit {

  user: User = {
    name: '',
    email: ''
  }

  action = '';

  constructor(private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private formUserService: FormUserService) {
    const nomeBotao = this.route.snapshot.paramMap.get('labelBotao');
    
    this.action = nomeBotao || '';
    if ( nomeBotao === 'update'){
      this.formUserService.formUserData = {
        labelBotao : 'Atualizar' || '',
        corBotao : 'primary' || '',
        edicao: false,
        titulo: 'Atualizar' || ''
      }
    }else if (nomeBotao === 'delete'){
      this.formUserService.formUserData = {
        labelBotao : 'Excluir' || '',
        corBotao : 'warn' || '',
        edicao : true,
        titulo : "Excluir" || ''
      }
    }else{
      this.formUserService.formUserData = {
        labelBotao : 'Salvar' || '',
        corBotao : 'primary' || '',
        edicao :false,
        titulo : 'Novo Usuário' || ''
      }
    }
  }

  ngOnInit(): void {   
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.readById(id).subscribe(sucesso => {
        this.user = sucesso;
      })
    }
  }

  actionsUser(){
    if ( this.action === 'delete' ){
      this.delete();
    }else{
      this.createUser();
    }
  }

  delete(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.userService.delete(id).subscribe(() =>{
        this.userService.showMessage('Usuário Excluído!!')
        this.router.navigate(['users'])
      })
    }
  }

  createUser() {
    if (this.user.id) {
      this.userService.update(this.user).subscribe(() => {
        this.userService.showMessage("Usuáiro atualizado!!");
        this.router.navigate(['users'])
      })
    } else {
      this.userService.create(this.user).subscribe(() => {
        this.userService.showMessage('Usuário cadastrado!!')
        this.router.navigate(['users'])
      })
    }
  }

  cancel() {
    this.router.navigate(['users'])
  }

  get labelBotao(): string {
    return this.formUserService.formUserData.labelBotao
  }

  get corBotao() : string{
    return this.formUserService.formUserData.corBotao
  }

  get edicao() : boolean{
    return this.formUserService.formUserData.edicao
  }

  get titulo() : string{
    return this.formUserService.formUserData.titulo
  }

}
