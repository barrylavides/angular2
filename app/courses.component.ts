import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './directives/auto-grow.directive'

@Component({
	selector: 'courses',
	template: `
		<h2 myHighlight>Courses</h2>
		{{ title }}
		<input type="text" />
		<ul>
			<li *ngFor="#course of courses">
				{{course}}
			</li>
		</ul>
	`,
	providers: [CourseService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
	title = "The title of courses page";
	courses;

	constructor(courseService: CourseService) {
		this.courses = courseService.getCourses();
	}
}