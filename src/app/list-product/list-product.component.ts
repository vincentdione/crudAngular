import { Component, OnInit } from '@angular/core';
import { ProduitService, Produit } from '../apis';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public listProduit : Produit [] =[]

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.listProduit = []
    this.produitService.listeProduit().subscribe(
      value=>{this.listProduit.push(...value),
       error =>{console.error(JSON.stringify(error)),()=> console.log('Down')}
      }
    )
  }
  
  onDelete(produit){
    let conf= confirm("Etes-vous surs");
    if(conf) {
      this.produitService.deleteProd(produit.id).subscribe(
        value=>{
          alert(value['message']);
        },
        error=> { console.error(JSON.stringify(error)), ()=> console.log('Down') }
      )
      console.log(produit);
    }
    
  }

}
