import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Sharepage/navbar/navbar.component';
import { FooterComponent } from './Sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderDetailsService } from './services/order-details.service';
import { MenupageComponent } from './pages/menupage/menupage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
