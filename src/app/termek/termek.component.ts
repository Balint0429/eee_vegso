import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { ProductService } from '../product.service';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.css']
})
export class TermekComponent implements OnInit {
  termek: any = [];
  constructor(private route: ActivatedRoute, 
              private productService: ProductService,
              private router: Router) { } // Inject Router service

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const id = idString !== null ? +idString : null;
    
    if (id !== null) {
      this.productService.getProduct(id)
        .subscribe(termek => {
          console.log('Termék részletek:', termek);
          this.termek = termek;
        });
    } else {
      console.error('Az id érvénytelen vagy hiányzik.');
    }
  }
  goBack() {
    this.router.navigate(['/biciklik']);
  }
}
