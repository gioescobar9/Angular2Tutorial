import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{title}}
    <ul>
        <li *ngFor="#course of courses">{{course}}</li>
    </ul>
    `
})
export class CoursesComponent{
    title: string = "The title of course page!!!!!!!!";
    courses = ["Course1", "Course 2", "Course3"];
}