import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Katafanas";
  lastname = "Katsa";
person: Person = {
    givenName :'George',
    surName : 'Katsafanas',
    age : 28,
    address: "Athens, Greece",
  };
  
  person2: Person = {
    givenName :'George',
    surName : 'Katsafssssanas',
    age : 28,
    address: "Athesssssns, Greece"
  };
  
}
