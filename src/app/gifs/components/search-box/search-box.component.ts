import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gs: GifsService) {}

  // public searchTag(newTag: string) {
  public searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gs.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
