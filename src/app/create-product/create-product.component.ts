import { Component, OnInit, ɵConsole } from '@angular/core';
import { Produit, ProduitService, Categorie, CategorieService } from '../apis';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public produit : Produit = {};
  public listeCategorie : Categorie [] = [];

  constructor(private produitService: ProduitService,private categorieSrevice: CategorieService) { }

  ngOnInit() {
    this.categorieSrevice.listCategorie().subscribe(
      value=>{
        this.listeCategorie.push(...value),
         error => { console.error(JSON.stringify(error)), () => console.log('Down')}
      }
    )
  }


  onSubmit(){
    this.produitService.createProduit(this.produit).subscribe(
      value => {
         alert(value['message'])
      },
      error =>{ console.error(JSON.stringify(error)),()=> console.log('Down') }
    )
  }
}
