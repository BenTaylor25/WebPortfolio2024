import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { ResponsiveService } from 'src/app/responsive.service';
import { WorkEntryComponent } from './work-entry/work-entry.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  standalone: true,
  imports: [
    WorkEntryComponent,
    MatGridListModule
  ]
})
export class WorkComponent {
  columnCount = 2;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.getIsMobile().subscribe(
      isMobile => this.columnCount = isMobile ? 1 : 2
    )
  }
}
