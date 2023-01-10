import { Component, Input } from '@angular/core';
import { Heroe } from '../../entities/entities';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent {
  @Input() heroe: Heroe = {id: 0, name: '', heroe_type: '', condition: '', cities_id: 0, image_url: ''};
}
