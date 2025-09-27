import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-root',
  standalone: true,          // 👈 Standalone activado
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
    });
  }
}
