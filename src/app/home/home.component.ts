import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor( private http:HttpService, private route:Router){}

dataFrom = new FormGroup({
  name: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormControl(''),
  mobile: new FormControl(''),
});

onSubmit(){
  console.log(this.dataFrom.value);
  
  this.http.postData(this.dataFrom.value).subscribe(createdItem => {
    // Handle successful creation
    console.log('Data created successfully:', createdItem);
    // Reset form or perform any other action
   this.route.navigate(["/view"])
  }, error => {
    // Handle error
    console.error('Error creating data:', error);
  });
}



}
