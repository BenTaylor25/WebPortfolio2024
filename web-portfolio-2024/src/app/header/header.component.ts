import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobile = false;
  isHamburgerActive = false;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.responsiveService.getIsMobile().subscribe(
      isMobile => this.isMobile = isMobile
    );
  }

  toggleHamburger() {
    this.isHamburgerActive = !this.isHamburgerActive;
  }
}
