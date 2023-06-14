import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Lenovo Thinkpad L',
      description: '33.7cms (13.3) lightweight up to Intel vPro®-powered laptop',
      price: 76599,
      imageUrl: '../assets/lenovo2.jpg'
    },
    {
      name: 'Dell XPS 13',
      description: 'powered by a Core i5 processor and it comes with 8GB of RAM.',
      price: 96799,
      imageUrl: '../assets/dell2.jpg'
    },
    {
      name: 'HP envy x360',
      description: 'The HP Envy x360 packs 256GB of HDD storage. Graphics are powered by AMD Radeon R7 M265.',
      price: 58899,
      imageUrl: '../assets/HP2.jpg'
    },
    {
      name: 'Apple MacBook Pro',
      description: 'macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels',
      price: 110000,
      imageUrl: '../assets/mac.jpeg'
    },
    {
      name: 'ASUS ROG Strix G15',
      description: '15.6"(39.62 cms) WQHD 165Hz/3ms, AMD Ryzen 7 6800H, RTX 3060 6GB Graphics, Gaming Laptop ',
      price: 120000,
      imageUrl: '../assets/asus3.jpg'
    },
    {
      name: 'Samsung NP750XED',
      description: '12th Generation Intel Core I7-1255U 15.6 Inches Notebook Laptop',
      price: 86999,
      imageUrl: '../assets/samsung.png'
    },
  ];
}
