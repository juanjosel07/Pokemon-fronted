import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name:     ['', [ Validators.required ]],
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }





// registro function , the user is validated with the response from the service 
// if the user is correct, then its sent to the pokemon page
//this function is called into the register.component.html
  registro() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro( name, email, password )
      .subscribe( ok => {

        if ( ok === true ) {
          this.router.navigateByUrl('/pokemon');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }



}
