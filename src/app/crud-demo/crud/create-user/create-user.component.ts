import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { ReactiveFormComponent } from "../../../reactive-form/reactive-form.component";

@Component({
    selector: 'app-create-user',
    standalone: true,
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css'],
    imports: [CommonModule, ReactiveFormComponent]
})
export class CreateUserComponent {
  @Output() userCreated = new EventEmitter();
constructor(private appService: AppService = Inject(AppService)){}

  onUser(user: Person){
    this.appService.addUser(user).subscribe(user => {
      console.log(user);
      this.userCreated.emit();
    });
  }

}
