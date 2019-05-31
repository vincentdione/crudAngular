import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ProduitComponent } from './produit/produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { UtilisateurService, ProduitService, CategorieService } from './apis/api/api';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { CategorieComponent } from './categorie/categorie.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    ProduitComponent,
  
    PagenotfoundComponent,
    CreateUserComponent,
    ListeUserComponent,
    CreateProductComponent,
    ListProductComponent,
    CreateCategorieComponent,
    ListCategorieComponent,
    CategorieComponent,
    UpdateUserComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [UtilisateurService, ProduitService, CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
