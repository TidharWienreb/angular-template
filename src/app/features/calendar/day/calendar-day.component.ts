import { Component } from "@angular/core";
import { IDay } from "./model/day.interface";
import { IEvent } from "../../event/model/event.interface";

@Component({
  selector: "calendar-day",
  templateUrl: "./calendar-day.component.html"
})
export class CalendarDayComponent implements IDay {
  public dayNumber: number;
  public events?: IEvent[];
  public get isWeeken(): boolean {
    return false;
  }
}
