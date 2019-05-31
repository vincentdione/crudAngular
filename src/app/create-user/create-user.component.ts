import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Utilisateur, UtilisateurService } from '../apis';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    //createUserForm : FormGroup;
    submitted =false;
    success = true;


    public user :Utilisateur= {}

  constructor(private userService: UtilisateurService) { }

  ngOnInit() {
      
    // this.createUserForm = new FormGroup({
    //     nom: new FormControl ('',Validators.required),
    //     prenom: new FormControl('',Validators.required),
    //     telephone: new FormControl('',Validators.required),
    //     email: new FormControl('',Validators.required)
    // })

  }

  onSubmit(){
  
    this.userService.create(this.user).subscribe(
       value => {
         alert(value['message'])
       },
       error => { console.error(JSON.stringify(error)), () => console.log('Down')}
    )
      
  }

  

}
