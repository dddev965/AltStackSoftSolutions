import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { dataModel } from '../models/dataModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {

  showData!:dataModel[]
  constructor(private http:HttpService,private route:Router){}

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
    this.http.getData().subscribe((res)=>{
      console.log(res);
      
      this.showData = res
    })
  }
  deleteData(id:any): void {
    alert(`are you sure wanted to delete`)
    this.http.deleteData(id)
      .subscribe(() => {
        // Handle successful deletion
        console.log('Data deleted successfully');
        // Perform any other action, like refreshing data
        this.fetchData()
      }, error => {
        // Handle error
        console.error('Error deleting data:', error);
      });
  }

  onEdit(id:any){
    console.log(id);
    let currentData = this.showData.find((elment) => {return elment.id == id})
    console.log(currentData);
    this.route.navigate(["edit",id])

    
  }
}
