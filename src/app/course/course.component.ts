import { products } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  message = 'products';
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
