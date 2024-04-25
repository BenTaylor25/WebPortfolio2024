import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule
  ]
})
export class ProjectEntryComponent {
  columnCount = 2;

  @Input() projectName: string = "unknown project name";
  @Input() githubLink: string = "";
  @Input() imgPath: string = "";
  @Input() technologies: string = "unknown technologies";

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.getIsMobile().subscribe(
      isMobile => this.columnCount = isMobile ? 1 : 2
    )
  }
}
