import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-biciklik',
  templateUrl: './biciklik.component.html',
  styleUrls: ['./biciklik.component.css']
})
export class BiciklikComponent implements OnInit {

  products: any[] = [];
  page: number = 1; 
  pageSize: number = 8; 
  totalItems: number = 0; 

  constructor(private productService: ProductService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getProducts();
    this.paginationService.currentPage$.subscribe(page => {
      this.page = page;
    });
  }  

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        console.log('Products retrieved:', products);
        this.products = products;
        this.totalItems = products.length;
      });
  }

  onPageChange(pageNumber: number) {
    this.paginationService.setCurrentPage(pageNumber);
  }


}
