import { Component } from '@angular/core';
import { ClickscountService } from './clickscount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickscountService]
})
export class AppComponent {
  constructor(private clicksCount: ClickscountService) {
  }

  handleClick() {
    this.clicksCount.increment();
  }
}
