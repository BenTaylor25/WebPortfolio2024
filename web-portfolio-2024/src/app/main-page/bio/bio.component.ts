import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
  ]
})
export class BioComponent {
  columnCount = 2;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.getIsMobile().subscribe(
      isMobile => this.columnCount = isMobile ? 1 : 2
    );
  }

}
