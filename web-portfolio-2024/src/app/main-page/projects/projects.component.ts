import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { ResponsiveService } from 'src/app/responsive.service';
import { ProjectEntryComponent } from './project-entry/project-entry.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [
    ProjectEntryComponent,
    MatGridListModule
  ]
})
export class ProjectsComponent {

}
