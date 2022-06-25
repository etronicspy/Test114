import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item?:Item;
  jsonItem?:string;

  constructor(private itemsService:ItemsService) { }

  ngOnInit(): void {
    this.jsonItem=JSON.stringify(this.item);
  }

}
