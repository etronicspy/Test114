import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:Item[]=this.itemsService.items;
  jsonItems:string=JSON.stringify(this.itemsService.items);

  constructor(private itemsService:ItemsService) { }


  ngOnInit(): void {
  }

}
