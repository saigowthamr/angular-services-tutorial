import { Component, OnInit } from '@angular/core';
import { ClickscountService } from '../clickscount.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [ClickscountService]
})
export class SecondComponent implements OnInit {

  constructor(private clickservice: ClickscountService) { }

  ngOnInit() {
  }

  handleClick() {
    this.clickservice.increment();
  }
}
