import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  productcrud! : FormGroup
  productdata : any = []
  constructor(private fb : FormBuilder , private htclient : HttpClient) {
    this.productcrud = this.fb.group({
      category : ['' , Validators.required],
      productName : ['' , Validators.required],
      price : ['' , Validators.required],
      clothSize : ['' , Validators.required],
      inStock : ['' , Validators.required],
      description : ['' , Validators.required]
    });
   }

  ngOnInit(): void {
    
  }
// details
// details(){
//   this.htclient.get(`${environment.apiEndPoint}/product/get`)
//   .subscribe((res:any)=>{
//     this.
//   })
// }
}
