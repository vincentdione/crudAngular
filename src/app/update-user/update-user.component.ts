import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilisateurService, Utilisateur } from '../apis';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public user: Utilisateur={};
  constructor(private router: Router, private activateRouter: ActivatedRoute, private userService: UtilisateurService) { }

  ngOnInit() {
   let id = this.activateRouter.snapshot.params.id;
    this.userService.findUtilisateurById(id).subscribe(
      value=>{
        this.user= value;
      },
      error=>{console.error(JSON.stringify(error)),()=> console.log('Down')}
    )
    console.log(this.activateRouter);
  }

  onUpdate(user){
    this.userService.update(this.user).subscribe(
      value=>{
        alert[value['message']];
        this.router.navigateByUrl("/user/listeUser");
      },
      error=>{console.error(JSON.stringify(error)),()=> console.log('Down')}
    )
  }
}
