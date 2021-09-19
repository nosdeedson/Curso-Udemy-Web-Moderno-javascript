import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { HomeComponent } from './views/home/home.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localept from "@angular/common/locales/pt";
import {registerLocaleData} from '@angular/common';
import { UserComponent } from './views/users/user/user.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { FormTemplateUserComponent } from './components/template/form-template-user/form-template-user.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { FormProductComponent } from './components/template/form-template-product/form-product/form-product.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductReadPaginateComponent } from './components/product/product-read-paginate/product-read-paginate.component';
registerLocaleData(localept)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    UserComponent,
    UserReadComponent,
    UserCreateComponent,
    FormTemplateUserComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    FormProductComponent,
    ProductReadComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ProductReadPaginateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
