import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFComponent } from './reactive-f/reactive-f.component';
//import { EmojiPipe } from './pipes/custompipes';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';
import { ViewLaptopComponent } from './view-laptop/view-laptop.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import {HttpClientModule} from '@angular/common/http';
import { LaptopsService } from './Services/laptops.service';
import { DeleteLaptopComponent } from './delete-laptop/delete-laptop.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    HomeComponent,
    ProductsComponent,
    ReactiveFComponent,
    //EmojiPipe,
    AboutComponent,
    FooterComponent,
    AddLaptopComponent,
    ViewLaptopComponent,
    UpdateLaptopComponent,
    DeleteLaptopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [LaptopsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
