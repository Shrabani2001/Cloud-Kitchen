import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-admin-food',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './admin-food.component.html',
  styleUrl: './admin-food.component.css',
})
export class AdminFoodComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any = {
    "productId": 0,
    "productSku": '',
    "productName": '',
    "productPrice": 0,
    "productShortName": '',
    "productDescription": '',
    "createdDate": new Date(),
    "deliveryTimeSpan": '',
    "categoryId": 0,
    "productImageUrl": '',
  };
  categoryList: any[] = [];
  foodsList: any[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.getFoods();
    this.getAllCategory();
  }

  getFoods() {
    this.foodService.getFoods().subscribe((res: any) => {
      this.foodsList = res.data;
    });
  }

  getAllCategory() {
    this.foodService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  onUpdate(){
    this.foodService.updateFood(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Item Updated");
        this.getFoods();
      }else{
        alert(res.message);
      }
    })
  }

  onSave(){
    this.foodService.saveFood(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Item Created");
        this.getFoods();
      }else{
        alert(res.message);
      }
    })
  }

  onDelete(productId:any){
    const isDelete = confirm('Are you sure want to delete');
    if(isDelete){
      this.foodService.deleteFood(productId).subscribe((res:any)=>{
        if(res.result){
          alert("Item Deleted");
          this.getFoods();
        }else{
          alert(res.message);
        }
      })
    }
  }

  onEdit(item:any){
    this.productObj=item;
    this.openSidePanel();
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
