import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [],
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.scss'
})
export class FilmeComponent {
  @Input({ required: true } ) titulo ='';
}
