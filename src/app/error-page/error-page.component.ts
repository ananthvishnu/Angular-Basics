import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errormessage?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errormessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.errormessage = data['message'];
    });
  }
}
