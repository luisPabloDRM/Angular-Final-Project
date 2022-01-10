import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { GestionComponent } from './shared/components/gestion/gestion.component';
import { RegistroComponent } from './shared/components/registro/registro.component';

const routes: Routes = [
{path:"", component:HomePageComponent},
{path:"login", component:LoginComponent},
{path:"lista", component:ProductosComponent},
{path:"gallery", component:GalleryComponent},
{path:"gestion", component:GestionComponent},
{path:"contact", component:ContactPageComponent},
{path:"registro", component:RegistroComponent},
{path:"carro", component:CarritoComponent},

{path:'**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
