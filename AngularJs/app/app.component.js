/**
 * Created by Alexey on 10/13/2016.
 */
function Item(framework, year, used ) {
    this.framework = framework;
    this.year = year;
    this.used = used;

}

var AppComponent = ng.core.Component({
    selector: 'framework-app',
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
    .Class({
        constructor: function() {

            this.items= [
                new Item("Angular", 2009, true),
                new Item("Angular2", 2016, true),
                new Item("Aurelia", 2016, true),
                new Item("React", 2015, false)
            ];
        }
    });

AppComponent.prototype.addItem = function (name, year, used) {
    if (name == null || name == undefined || name.trim() == "")
        return;
    if (year == null || year == undefined)
        return;
    this.items.push(new Item(name, year, used));
};