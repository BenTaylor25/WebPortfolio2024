import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class IconComponent {

  private _name: string = "";

  @Input({ required: true })
  set name(newName: string) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

}
