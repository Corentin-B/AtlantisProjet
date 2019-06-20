import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private submitted = false;
  private buttonDisable = false;
  private registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
  ) { }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.pattern(environment.regmail)]],
      password: ['', [Validators.minLength(6)]],
    });
  }


  goSignIn(){
    
  }


  async Login() {

    if (this.onSubmit()) {
      this.buttonDisable = true;



      this.buttonDisable = false;
    }
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    return true;
  }
}
