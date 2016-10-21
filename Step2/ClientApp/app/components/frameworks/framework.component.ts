
import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FrameworksService} from './frameworks.service'

export class Item implements  IItemData {
    framework: string;
    year: number;
    used: boolean;

    constructor(framework: string, year: number, used: boolean) {

        this.framework = framework;
        this.year = year;
        this.used = used;
    }
    }
    export interface IItemData {
      framework: string;
      year: number;
      used: boolean;
    }

    @Component({
        selector: 'frameworks',
        template: require('./framework.component.html'),
        providers: [FrameworksService]
    })
    export class FrameworkComponent implements OnInit {
        items: IItemData[];
        errorMessage: string;
        ngOnInit() { this.getFrameworks(); }
        constructor(private frameworkService: FrameworksService) { }
        getFrameworks() {
            this.frameworkService.getFrameworks()
                .subscribe(
                    result => this.items = result,
                    error => this.errorMessage = <any>error);
        }

        addItem(name: string, year: number, used: boolean): void {

            if (name == null || name == undefined || name.trim() == "")
                return;
            if (year == null || year == undefined)
                return;
            let newItem: Item = new Item(name, year, used);
            this.items.push(newItem);
            this.frameworkService.addFramework(newItem);
        }
    }