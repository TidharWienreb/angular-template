import { NgModule } from "@angular/core";
import { CalendarComponent } from "./calendar.component";
import { CalendarDayComponent } from "./day/calendar-day.component";

@NgModule({
  declarations: [CalendarComponent, CalendarDayComponent],
  imports: [],
  bootstrap: [],
  exports: [CalendarComponent]
})
export class CalendarModule {}
