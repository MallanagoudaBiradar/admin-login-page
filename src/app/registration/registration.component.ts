
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { registration } from './reg';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration!: FormGroup;
  registrationObj: registration = new registration();


  constructor(private formbuilder: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {

    this.registration = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      Address: new FormControl(''),
      Pincode: new FormControl(''),
      password: new FormControl(''),
      Email: new FormControl('')
    })
  }

  insertrecords() {
    console.log(this.registration.value)
    this.registrationObj.firstname = this.registration.value.firstname;
    this.registrationObj.lastname = this.registration.value.lastname;
    this.registrationObj.Address = this.registration.value.Address;
    this.registrationObj.pincode = this.registration.value.pincode;
    this.registrationObj.password = this.registration.value.password;
    this.registrationObj.Email = this.registration.value.Email;

    this.api.postdetails(this.registrationObj).subscribe(res => {
      this.registration.reset();
      this.route.navigate(['/'])
    })

  }
}