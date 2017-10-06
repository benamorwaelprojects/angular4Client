import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('MyInputText') inputText;

  name = "My 1st app angular for wael";
  lastName = "Ben amor";
  visible = true;
  counter = 0;
  result = 2;
  result1 = 1;
  myCostomString = "";
  username = "wael";
  userLastname = "Ben Amor";
  data = "";

  constructor() {
    setTimeout(() => {
      this.result = 50;
    }, 2000);
    setInterval(() => {
      this.sendToServe();
    }, 1000);
  }

  myFavLang = {
    frontent: ["html", "css", "javascript"],
    backend: ["nodejs", "php", "python", "ruby"]
  };

  languages = [
    { name: "html", type: "frontent" },
    { name: "css", type: "frontent" },
    { name: "js", type: "frontent" },
    { name: "java", type: "backent" }
  ];

  onClick() {
    this.visible = !this.visible;
    this.counter++;
  }

  myFunction() {
    console.log("this was fired");
  }

  myFunction1(event) {
    console.log(event);
  }

  myFunction2(event) {
    this.myCostomString += event.target.value;
  }

  changeUserName(ev) {
    this.username = ev.target.value;
  }

  // -----------------------@ViewChild------------------------

  sendToServe() {
    let data = this.inputText.nativeElement;
    console.log(data.value);
  }

  // -----------------------@Input------------------------


}
