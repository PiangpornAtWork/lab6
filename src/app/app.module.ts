import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './services/products.service';
import { MenuComponent } from './components/menu/menu.component';
import { CartService } from './services/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration(),ProductsService,CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
