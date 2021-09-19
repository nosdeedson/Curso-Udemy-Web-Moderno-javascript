import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private headerService: HeaderService,
    private router: Router) {
    headerService.headerData = {
      title: 'Usuários',
      icon: 'people_alt',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

  navegateToUserCreate() {
    this.router.navigate(['users/create'])
  }

}
