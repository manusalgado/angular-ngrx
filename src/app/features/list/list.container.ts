import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData, TableTitle } from 'src/app/shared/components/table/table.interfaces';
import { Heroe } from 'src/app/shared/entities/entities';
import { HeroesFacade } from './list.facade';

@Component({
  selector: 'list-container',
  templateUrl: './list.container.html'
})
export class ListContainer implements OnInit {

    public tableData: TableData[] = [];
    public tableTitle: TableTitle[] = [{
        name: 'Name',
        type: 'Type',
        condition: 'Condition',
        image: 'Image'
    }];

    constructor(public facade: HeroesFacade) {}

    ngOnInit() {
        this.getHeroes();
        this.heroes$.subscribe((data) => {
            if (data && data.length) {
                data.map((heroe) => {
                    const {name, heroe_type, condition, image_url, id} = heroe;
                    this.tableData = [...this.tableData, {
                        name,
                        type: heroe_type,
                        condition,
                        image: image_url,
                        id,
                        path: `/detail/${id}`
                    }]                    
                })
            }
        })
    }

    get heroes$(): Observable<Heroe[]> {
        return this.facade.heroes$
    }

    public getHeroes(): void {
        this.facade.getHeroes();
    }

}
