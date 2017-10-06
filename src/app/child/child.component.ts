import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input("myAwesomeValue") myBadValue;
  constructor() { }

  ngOnInit() {
    console.log(this.myBadValue, "is was i got!");
    console.log(this.myBadValue, "is was i got!");
  }
}
