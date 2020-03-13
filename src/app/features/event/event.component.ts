import { Component, ChangeDetectionStrategy } from "@angular/core";
import { IEvent } from "./model/event.interface";

@Component({
  selector: "calendar-day",
  templateUrl: "./event.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements IEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  participates: string[];
}
