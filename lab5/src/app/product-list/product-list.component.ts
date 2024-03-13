import {Component, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  type: string | null;
  products: Product[];
  constructor(private route: ActivatedRoute) {
    this.type = '';
    this.products = products;
    this.updateLikes();
  }
  nextImage(a: number){
    if(products[a].i < 2){
        products[a].i++;
    }
    else{
      products[a].i = 0;
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');
    });
  }
  addLike(product: Product){
    product.likes++;
  }

  private updateLikes() {
    this.products.forEach(product =>{
      product.likes = Math.floor(Math.random() * 100);
    })
  }
  removeProduct(productToRemove: Product){
    this.products = this.products.filter(product => product !== productToRemove)
  }

  share(link: string){
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
}
