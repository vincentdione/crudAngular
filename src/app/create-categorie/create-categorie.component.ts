import { Component, OnInit } from '@angular/core';
import { Categorie, CategorieService } from '../apis';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {

  public categorie : Categorie = {};
  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.categorieService.createCat(this.categorie).subscribe(
      value=>{
            alert (value['message'])
      },
      error=>{ console.error(JSON.stringify(error)),() => console.log('Down') }
    );
  }
}
