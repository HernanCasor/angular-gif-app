import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gifs!: Gif;

  ngOnInit(): void {
    if (!this.gifs) throw new Error('Gif property us required');
  }
}
