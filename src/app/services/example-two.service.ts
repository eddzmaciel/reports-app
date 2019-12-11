import { Injectable } from "@angular/core";

@Injectable()
export class ExampleTwoService {
  private defaultProfile: ProfileFormat = {
    name: "Edson",
    lastName: "Maciel",
    age: 20
  };
  constructor() {
    console.log("I am the ExampleTwoService!!");
  }

  getProfileInfo() {
    return this.defaultProfile;
  }
}

export interface ProfileFormat {
  name: string;
  lastName: string;
  age: number;
}
