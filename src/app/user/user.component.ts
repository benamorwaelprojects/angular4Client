import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name = "";
  id = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route);
    console.log(this.route.snapshot.params);
    this.name = this.route.snapshot.params.name;
    this.id = this.route.snapshot.params.id;
  }
}
