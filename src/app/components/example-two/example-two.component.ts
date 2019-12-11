import { Component, OnInit } from "@angular/core";

//importing the example two service
import {
  ExampleTwoService,
  ProfileFormat
} from "../../services/example-two.service";

@Component({
  selector: "app-example-two",
  templateUrl: "./example-two.component.html",
  styleUrls: ["./example-two.component.css"]
})
export class ExampleTwoComponent implements OnInit {
  userProfile: ProfileFormat;
  constructor(private _exampleTwoService: ExampleTwoService) {
    console.log("constructor example-two.component");
  }

  ngOnInit() {
    this.userProfile = this._exampleTwoService.getProfileInfo();
    console.log("userProfile-->", this.userProfile);
  }
}
