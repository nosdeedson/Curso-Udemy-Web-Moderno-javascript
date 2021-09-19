import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users : User[] = [];

  displayedColumns = ['id', 'name', 'email', 'actions']

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.read().subscribe(sucesso =>{
      this.users = sucesso
    })
  }

  update(id : string) : void{
    this.router.navigate([`users/update/${id}/update`])
  }

  delete(id : string) : void{
    this.router.navigate([`users/delete/${id}/delete`])
  }
}
