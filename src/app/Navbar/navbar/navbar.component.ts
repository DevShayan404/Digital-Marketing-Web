import { Component, OnInit,  HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentScrollPosition = 0;
  public previousScrollPosition = 0;
  public isNavbarVisible = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
    if (this.currentScrollPosition > this.previousScrollPosition) {
      // Scrolling down
      this.hideNavbar();
    } else {
      // Scrolling up
      this.showNavbar();
    }
  
    this.previousScrollPosition = this.currentScrollPosition;
  }
  private hideNavbar() {
    this.isNavbarVisible = false;
  }
  
  private showNavbar() {
    this.isNavbarVisible = true;
  }






  constructor() { }

  ngOnInit(): void {
  }

  closeHeader = true
  headerClose(){
    this.closeHeader = false
  }

}
