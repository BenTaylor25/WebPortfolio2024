import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResponsiveService } from 'src/app/responsive.service';
import { IconComponent } from 'src/app/icon/icon.component';
import { GITHUB_LINK, LINKEDIN_LINK, YOUTUBE_LINK } from 'src/constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    IconComponent
  ]
})
export class HeroComponent {
  columnCount = 2;
  linkedinLink = LINKEDIN_LINK;
  githubLink = GITHUB_LINK;
  youtubeLink = YOUTUBE_LINK

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.getIsMobile().subscribe(
      isMobile => this.columnCount = isMobile ? 1 : 2
    );
  }

}
