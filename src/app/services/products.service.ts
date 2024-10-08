import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl: string= "https://localhost:7299";

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
   return this.http.get(this.baseApiUrl+'/api/products') as Observable<Product[]>;
  }

  addProduct(newProduct:Product): Observable<Product>{
    newProduct.id='00000000-0000-0000-0000-000000000000';
    return this.http.post(this.baseApiUrl+'/api/products',newProduct) as Observable<Product>;
  }

  getProduct(id: string): Observable<Product>{

    return this.http.get(this.baseApiUrl + '/api/products/'+id) as Observable<Product>;
  }

  updateProduct(id:string, updateProductRequest: Product): Observable<Product>{
    return this.http.put(this.baseApiUrl+'/api/products/'+ id, updateProductRequest) as Observable<Product>;
  }
  deleteProduct(id: string): Observable<Product>{
    return this.http.delete(this.baseApiUrl+'/api/products/'+id) as Observable<Product>;
  }
}
