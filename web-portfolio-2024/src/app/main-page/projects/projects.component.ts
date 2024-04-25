import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule
  ]
})
export class ProjectsComponent {

  constructor(private responsiveService: ResponsiveService) {}

}
