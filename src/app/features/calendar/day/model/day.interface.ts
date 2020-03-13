import { IEvent } from "../../../event/model/event.interface";

export interface IDay {
  dayNumber: number;
  events?: IEvent[];
  isWeeken: boolean;
}
