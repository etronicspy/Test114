import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";

@Injectable()
export class ItemsService {

    // id=0;

    items:Item[]=[
        {"id":1,"name":"брус 150*50*6000","description":"сырой, некалиброванный"},
        {"id":2,"name":"брус 150*50*3000","description":"сухой, некалиброванный"},
        {"id":3,"name":"брус 145*45*6000","description":"сырой, калиброванный"},
        {"id":4,"name":"брус 145*45*3000","description":"сухой, калиброванный"},
        {"id":5,"name":"брус 200*50*6000","description":"сырой, некалиброванный"},
        {"id":6,"name":"брус 200*50*3000","description":"сухой, некалиброванный"},
        {"id":7,"name":"брус 195*45*6000","description":"сырой, калиброванный"},
        {"id":8,"name":"брус 195*45*3000","description":"сухой, калиброванный"}
    ];

    // readItem(id?:number){
    //     if (id===undefined){return undefined}
    //     else
    //     return this.items.slice()[id];
    // }

    // createItem(item:Item){
    //     this.items.push(item);
    // }
    // deleteItem(id?:number){
    //     if (id===undefined){}
    //     else
    //     this.items.splice(id,1);
    // }
    // updateItem(id:number,item:Item){
    //     this.items[id]=item;
    // }
}