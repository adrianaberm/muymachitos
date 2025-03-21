import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.scss']
})
export class PqrComponent implements OnInit {

  formPqr: FormGroup;

  constructor(private fb: FormBuilder, private servicesFirebase: ServicesService) {
    this.formPqr = this.fb.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
      town: ['',Validators.required],
      pqr: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  clicksubmit():void{
    const question: any = {
      name: this.formPqr.value.name,
      age: this.formPqr.value.age,
      town: this.formPqr.value.town,
      pqr: this.formPqr.value.pqr,
      fechaCreacion: new Date()
    }
    if(this.formPqr.valid){
     this.servicesFirebase.addPqr(question).then(() => {
       this.formPqr.patchValue({ name: "" });
       this.formPqr.patchValue({ age: "" });
       this.formPqr.patchValue({ town: "" });
       this.formPqr.patchValue({ pqr: "" });
     }).catch(error => {
       console.log(error)
     });
     }
  }
}
