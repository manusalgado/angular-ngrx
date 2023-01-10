import { Component, Input } from '@angular/core';
import { TableData, TableTitle } from './table.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: TableData[] = [];
  @Input() tableTitle: TableTitle[] = [];

}
