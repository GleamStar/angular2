import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FrameworkComponent } from './components/frameworks/framework.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CoursesComponent,
        FrameworkComponent,
        HomeComponent,
    ],
    imports: [
        UniversalModule,
        FormsModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'frameworks', component: FrameworkComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
