export class App {
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


