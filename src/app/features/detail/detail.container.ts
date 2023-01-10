import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/shared/entities/entities';
import { DetailFacade } from './detail.facade';

@Component({
  selector: 'detail-container',
  templateUrl: './detail.container.html'
})
export class DetailContainer implements OnInit {

  public heroe: Heroe = {id: 0, name: '', heroe_type: '', condition: '', cities_id: 0, image_url: ''};

  constructor(
    private route: ActivatedRoute,
    public facade: DetailFacade
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.getHeroe(id);
    this.heroe$.subscribe((heroe) => {
      this.heroe = heroe;
    })    
  }

  get heroe$(): Observable<Heroe> {
    return this.facade.heroe$;
  }

  public getHeroe(id: string): void {
    this.facade.getHeroe(+id);
  }

}
