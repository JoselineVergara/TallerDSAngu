import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }

  obtenerDatos(){
    return this.http.get('http://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json')

    
  }

  obtenerDatosTabla(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  obtenerDetallePosts(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
