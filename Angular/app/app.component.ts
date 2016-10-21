/**
 * Created by Alexey on 10/13/2016.
 */
import { Component } from '@angular/core';

export class Item{
    framework: string;
    year: number;
    used: boolean;

    constructor(framework: string, year: number, used : boolean) {

        this.framework = framework;
        this.year = year;
        this.used = used;
    }
}

@Component({
    selector: 'frameworks',
    //templateUlr
    template: `<div class="page-header">
        <h1> List of js frameworks  </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "Name" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="year" placeholder="Year" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="checkbox" class="form-control" [(ngModel)]="used" placeholder="Using" />
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(name, year, used)">Add</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                   <th> Name </th>
                   <th> Year </th>
                   <th> Are you use it ?</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.framework}}</td>
                    <td>{{item.year}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.used" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent {
    items: Item[] =
        [
            { framework: "Angular", year: 2009, used: true },
            { framework: "Angular2", year: 2016, used: true },
            { framework: "Aurelia", year: 2016, used: true },
            { framework: "React", year: 2015, used:false }
        ];
    addItem(name: string, year: number, used: boolean): void {

        if(name==null || name==undefined || name.trim()=="")
            return;
        if(year==null || year==undefined)
            return;
        this.items.push(new Item(name, year, used));
    }
}