import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: require('./courses.component.html')
})
export class CoursesComponent {
    public show: boolean = false;
    public Show() {
        this.show = true;
    }
}
