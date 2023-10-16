import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
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
    surName : 'Xtzidimitrakopoyulos',
    age : 48,
    address: "Athens, Greece",
  };

}
