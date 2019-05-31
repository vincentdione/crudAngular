import { Component, OnInit } from '@angular/core';
import { UtilisateurService, Utilisateur } from '../apis';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  public listUser : Utilisateur []=[]
  users: Object;
  public mode: number= 1;
 private visible : boolean =true;
  constructor(private userService: UtilisateurService, private router: Router) { }

  ngOnInit() {
   
    this.userService.listUtilisateur().subscribe(value=>{
              this.listUser.push(...value)
    }, error => { console.error(JSON.stringify(error)), () => console.log('Down')}
    )
  }

  onDelete(user){
    let conf = confirm("Etes vous surs ?"); 

    if (conf){
      this.userService.delete(user.id).subscribe(
        value => { 
          alert(value['message']);
          console.log(value);
         },
         error => {console.log(error)},
         
      )
    }

  }

  onUpdate(user){
    this.router.navigateByUrl("/updateUser/"+user.id);
  }
 
  onDetail(user){
   
  }
}
