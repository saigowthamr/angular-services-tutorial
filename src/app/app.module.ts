import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiDirective } from './emoji.directive';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiDirective,
    SecondComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
