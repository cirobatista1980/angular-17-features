import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmeComponent } from './components/filme/filme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-features';
logado = true;
autenticado = true;
status = 'aprovado';
filmes = [
  'ação',
  'aventura',
  'terror'
]
filme = this.filmes[0];

}
