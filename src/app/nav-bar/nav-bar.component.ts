import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'uz-nav-bar-component',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  screenWidth: any = window.innerWidth;


  constructor(private router: Router) { }

  ngOnInit(): void { }

  ngAfterContentChecked(){
    if (this.screenWidth < 620) {
      if (this.router.url === '/home')
      this.router.navigate(['/stations/name']);
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 620) {
      if (this.router.url === '/home')
      this.router.navigate(['/stations/name']);
    }
  }
}
