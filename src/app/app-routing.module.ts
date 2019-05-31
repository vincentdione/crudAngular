import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ProduitComponent } from './produit/produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'user/createUser',component:CreateUserComponent},
  {path:'user/listeUser',component:ListeUserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  {path:'product',component:ProduitComponent},
  {path:'product/createProduct',component:CreateProductComponent},
  {path:'product/listProduct',component:ListProductComponent},
  {path:'categorie',component:CategorieComponent},
  {path:'categorie/createCategorie',component:CreateCategorieComponent},
  {path:'categorie/listCategorie',component:ListCategorieComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
