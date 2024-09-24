import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gs: GifsService) {}

  get tags() {
    return this.gs.tagsHistory;
  }

  searchTag(tag: string) {
    this.gs.searchTag(tag);
  }
}
