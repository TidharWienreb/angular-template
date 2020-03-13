import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CalendarModule } from "./features/calendar/calendar.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material/mat.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarModule, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
