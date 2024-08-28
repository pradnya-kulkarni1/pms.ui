import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
updateProductRequest: Product = {
  id:'',
  name:'',
  type:'',
  color:'',
  price:0
};
constructor(private router:Router, 
  private productService: ProductsService,
private route:ActivatedRoute){}

ngOnInit(): void{
  this.route.paramMap.subscribe({
    next:(params)=>{
      const id = params.get('id');

      if(id){
        this.productService.getProduct(id).subscribe({
          next:(response)=> {
            this.updateProductRequest = response;
          },
          error:(err)=>{
            console.log(err);
          },
          complete:()=>{}
        });
      }
    }
  })
}
updateProduct(){
  this.productService.updateProduct(this.updateProductRequest.id, this.updateProductRequest)
  .subscribe({
    next:(response) =>{
      this.router.navigate(['products']);
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{}
  });


}


}
