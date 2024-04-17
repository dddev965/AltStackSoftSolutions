import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataModel } from '../models/dataModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/data';
  getData() {
    return this.http.get<dataModel[]>(this.url);
  }

  postData(data: any): Observable<dataModel> {
    return this.http.post<dataModel>(this.url, data);
  }

  updateData(id: string, newData:dataModel): Observable<dataModel> {
    return this.http.put<dataModel>('http://localhost:3000/data/'+id,newData);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
