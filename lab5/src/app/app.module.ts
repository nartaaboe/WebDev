import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent} from "./product-item/product-item.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'category', pathMatch: 'full'},
      { path: 'category', component: ProductItemComponent},
      { path: 'category/:type', component: ProductListComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
