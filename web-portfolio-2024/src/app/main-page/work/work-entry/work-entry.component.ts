import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-entry',
  templateUrl: './work-entry.component.html',
  styleUrls: ['./work-entry.component.scss'],
  standalone: true,
})
export class WorkEntryComponent {
  @Input() company: string = "unknown company";
  @Input() role: string = "unknown role";
  @Input() logoUrl: string = "";
  @Input() dates: string = "(unknown - unknown)";

  imageAlt = `${this.company} ${this.role}`;
}
