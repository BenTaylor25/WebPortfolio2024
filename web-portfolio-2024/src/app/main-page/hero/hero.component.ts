import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule
  ]
})
export class HeroComponent {
  columnCount = 2;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.getIsMobile().subscribe(
      isMobile => this.columnCount = isMobile ? 1 : 2
    );
  }

}
