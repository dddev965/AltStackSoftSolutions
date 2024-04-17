import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  id!: string;
  update = false;
  constructor(
    private http: HttpService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  dataFrom!: FormGroup;
  ngOnInit(): void {
    this.dataFrom = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      mobile: new FormControl(''),
    });
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
  }

  onUpdate() {
    this.http.updateData(this.id, this.dataFrom.value).subscribe(
      (res) => {
        console.log(`data is updated `);
        this.update = true;
        setTimeout(() => {
          this.route.navigate(['view']);
        }, 3000);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
