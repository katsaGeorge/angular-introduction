import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-crud-uder-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css']
})
export class CrudUserSearchComponent {
  foundUser: Person | undefined;
  userNotFound = false;
@ViewChild('userId')  userIdInput!: ElementRef<HTMLInputElement>;
@Output() userFound = new EventEmitter<Person | undefined>()
constructor(private  appService: AppService = Inject(AppService)){}

onsearch(){
  const id = this.userIdInput.nativeElement.value;
   this.appService.getUserById(parseInt(id)).subscribe({
    next: (user) => {
        console.log(user)
        this.foundUser = user;
        this.userNotFound = false;
        this.userFound.emit(this.foundUser)
    },
    error: (error) => {
      this.userNotFound =true;
      this.foundUser = undefined;
      console.log(error);
      this.userFound.emit(this.foundUser);
    },
    complete: () => {
      console.log('Operation Completed')
    }
   })
    }
}

