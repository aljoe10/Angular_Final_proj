import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ILaptop } from '../Models2/ILaptop';
import { IAddLaptop } from '../Models2/IAddLaptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  private_url = "https://localhost:44390/api/Laptops";  
  
  constructor(private http :HttpClient){}
  getAllLaptops(): Observable<ILaptop[]> {
    return this.http.get<ILaptop[]>(this.private_url);
  }
  AddLaptop(laptop: IAddLaptop): Observable<IAddLaptop> {
    return this.http.post<IAddLaptop>(this.private_url, laptop);
  }
  getLaptop(id: number): Observable<ILaptop> {
    let url: string = `${this.private_url}/${id}`;
    return this.http.get<ILaptop>(url)
  }
  deleteLaptop(id: number): Observable<ILaptop> {
    let url: string = `${this.private_url}/${id}`;
    return this.http.delete<ILaptop>(url)
  }
  updateLaptop(id: number, laptop: IAddLaptop): Observable<IAddLaptop> {
    let url: string = `${this.private_url}/${id}`;
    return this.http.put<IAddLaptop>(url, laptop);
  }
}

