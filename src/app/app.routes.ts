import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'home',
        loadComponent: ()=>import('./pages/home/home.component').then(h=>h.HomeComponent)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'aboutUs',
        loadComponent: ()=>import('./pages/about/about.component').then(a=>a.AboutComponent)
    },
    {
        path:'contactUs',
        loadComponent: ()=>import('./pages/contact/contact.component').then(c=>c.ContactComponent)
    },
    {
        path:'enquiry',
        loadComponent: ()=>import('./pages/enquiry/enquiry.component').then(e=>e.EnquiryComponent)
    },
    {
        path:'gallery',
        loadComponent : ()=>import('./pages/gallery/gallery.component').then(g=>g.GalleryComponent)
    },
    {
        path:'our-products',
        loadComponent: ()=> import('./pages/products/products.component').then(p=>p.ProductsComponent)
    },
    {
        path:'testimonials',
        loadComponent: ()=> import('./pages/testimonials/testimonials.component').then(t => t.TestimonialsComponent)
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
