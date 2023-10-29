import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DangerAreYouSureComponent } from '../../utils/danger-are-you-sure/danger-are-you-sure.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, PersonCardComponent, DangerAreYouSureComponent],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();
  foundUser: Person | undefined;
  userNotFound = false;
  @ViewChild('userId')  userIdInput!: ElementRef<HTMLInputElement>;
  @Output() confirm = new EventEmitter<boolean>();
  constructor(
  private appService: AppService = Inject(AppService),
  private http: HttpClient =Inject(HttpClient)
  ){}

  onclick() {
    const id = this.userIdInput.nativeElement.value;
    // this.appService.deleteUser(parseInt(id)).subscribe({
    //   next : (user) =>{console.log(user); this.userDeleted.emit()},
    //   error: (error) =>{
    //     console.log(error)
    //     this.userNotFound = true;
    //   },
    //   complete: ()=> {
    //     console.log("Procedure Completed")
    //   }
    // })
    this.http.delete<Person>(`http://localhost:3000/users/${id}`).subscribe({
      next : (user) =>{
      console.log(user); 
      this.userDeleted.emit()},
      error: (error) =>{
        console.log(error)
        this.userNotFound = true;
      },
      complete: ()=> {
        console.log("Procedure Completed")
      }

    })
  }
  
  onUserFound(user: Person | undefined) {
      if(user){
        this.foundUser = user;
      }
  }
  onConfirm(answer : boolean){
   if (answer && this.foundUser){
    const id = this.foundUser.id ?? -1;
    this.appService.deleteUser(id).subscribe({
        next : (user) =>{console.log(user);
         this.userDeleted.emit()
        },
        error: (error) =>{
          console.log(error)
          this.userNotFound = true;
        },
        complete: ()=> {
          console.log("Procedure Completed")
        }
      })
   }else{
    this.foundUser = undefined;
   }

  }
}
