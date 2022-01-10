import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ProductsPageComponent } from './shared/components/products-page/products-page.component';
import { HeaderComponent } from './core/header/header.component';
import { GestionComponent } from './shared/components/gestion/gestion.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './shared/components/registro/registro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { CardComponent } from './pages/productos/card/card.component';
import { ProductComponent } from './shared/components/gestion/product/product.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FiltroPipe } from './pages/productos/card/filtro.pipe';
import { FiltroGeneroPipe } from './pages/productos/card/filtroGenero.pipe';

//social login
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
// import { TuberiaService } from './pages/productos/card/tuberia.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryComponent,
    ProductsPageComponent,
    HeaderComponent,
    GestionComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    ProductosComponent,
    CardComponent,
    ProductComponent,
    CarritoComponent,
    FiltroGeneroPipe,
    ContactPageComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SocialLoginModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule
  ],
  providers:[
   {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers:[
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '164614171175-mpcs4rigr704vjcqqq8hm1hgv2vd7k7j.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1953184204888136')
        },

      ],
    } as SocialAuthServiceConfig,
  }],



  bootstrap: [AppComponent],
})
export class AppModule { }
