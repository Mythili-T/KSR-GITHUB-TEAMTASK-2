import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from '../adminProducts.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categoryData',
  templateUrl: './categoryData.component.html',
  styleUrls: ['./categoryData.component.css']
})
export class CategoryDataComponent implements OnInit {
  categoryDisplay: any = "";
  categoryCount: number = 0;
  constructor(private adminService: AdminProductsService, private http: HttpClient, private title:Title) {
    this.adminService.getCategory().subscribe((data) => {
      this.categoryDisplay = data;
    });
    this.adminService.categoryTypesCount().subscribe((category: any) => this.categoryCount = category.length);
  }

  ngOnInit(): void {
    this.title.setTitle('Category | RK MART');
   }

  removeCategory(categoryId: any, categoryValue: any, categoryClass: any, categoryUniqueValue: any) {
    if(confirm(`Are you sure want to delete ${categoryValue}`)){
      this.adminService.removeCategoryData(categoryId, categoryValue, categoryClass, categoryUniqueValue);
    }
  }
} 