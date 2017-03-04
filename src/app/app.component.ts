import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;

  firstCourse:any;

  constructor(private af: AngularFire)
  {
    // const courses$ : FirebaseListObservable<any> = af.database.list('courses');
    // const course$ = af.database.object('courses/-KePVBgGM8ijK18Qdujx');
    //  courses$.subscribe(console.log);

    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(console.log);

    this.lesson$ = af.database.object('lessons/-KePVBgLtuFDpJuZWYE2');
    this.lesson$.subscribe(console.log);

    this.courses$.map(courses => courses[0])
      .subscribe(
        course => this.firstCourse = course
      );
  }

  listShow() {

    
    this.courses$.subscribe(console.log);
  }


  listPush() {
    this.courses$.push({description: "TEST NEW COURSE"})
      .then(
        () => console.log('List Push Done'),
        console.error 
      )
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, { description: 'Angular 2 HTTP Modified'});
  }
  objUpdate() {
    this.lesson$.update({description: 'UPDATE NEW description'});
  }
  objSet() {
        this.lesson$.set({description: 'SET NEW description'});

  }

}
