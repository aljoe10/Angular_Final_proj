import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-f',
  templateUrl: './reactive-f.component.html',
  styleUrls: ['./reactive-f.component.css']
})
export class ReactiveFComponent {
  public myForm!: FormGroup;
  submittedDetails: any;
  showMessage: boolean = false;
  submitted = false;


  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.pattern(/^\d{10}$/)),
      address: new FormControl('', Validators.maxLength(100)),
      gender: new FormControl(''),
      profileImage: new FormControl(null),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.submittedDetails = this.myForm.value;
      this.showMessage = true;
      this.submitted = true;
    }
  }

  onProfileImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.myForm.patchValue({
        profileImage: reader.result
      });
    };
    reader.readAsDataURL(file);
  }
}