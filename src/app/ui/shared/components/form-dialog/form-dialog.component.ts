import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {

  public profileForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleName: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)],

  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    
  }

  public onSubmit() {
    console.log(this.profileForm.value);
  }

}
