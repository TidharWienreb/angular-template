import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CalendarModule } from "./features/calendar/calendar.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
