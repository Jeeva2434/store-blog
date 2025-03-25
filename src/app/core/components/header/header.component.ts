import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface PageData{
  pageCode:string,
  pageUrl:string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  isSticky: boolean = false;
  isMenuOpen: boolean = false;
  activeNav: string = 'Home';

  navItems:PageData[] = [
    {
      pageCode:'Home',
      pageUrl: 'home'
    },
    {
      pageCode:'About Us',
      pageUrl: 'aboutUs'
    },
    {
      pageCode:'Our Products',
      pageUrl: 'our-products'
    },
    {
      pageCode:'Gallery',
      pageUrl: 'gallery'
    },
    {
      pageCode:'Testimonials',
      pageUrl: 'testimonials'
    },
    {
      pageCode:'Enquiry',
      pageUrl: 'enquiry'
    },
    {
      pageCode:'Contact Us',
      pageUrl: 'contactUs'
    }
  ]


  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(nav: PageData) {
    this.activeNav = nav.pageCode;
    this.isMenuOpen = false; // Close menu after selection (on mobile)
  }

}
