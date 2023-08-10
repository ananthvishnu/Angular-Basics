import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
 // numbers = [1, 2, 3, 4, 5, 6, 7];
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [2, 4, 6, 8, 10];
  onlyOdd = false;
  value = 10;
}
