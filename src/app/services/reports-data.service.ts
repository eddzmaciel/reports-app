import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ReportsDataService {
  private reportsData: any = [
    {
      name: "Luke Skywalker",
      count: "001",
      commitment: "$323,000.00",
      balance: "$434,990.00",
      comments: "comments example"
    },
    {
      name: "Dart Vader",
      count: "002",
      commitment: "$1,000.00",
      balance: "$434,990.00",
      comments: "comments example"
    },
    {
      name: "Han Solo",
      count: "003",
      commitment: "$4,000.00",
      balance: "$434,990.00",
      comments: "comments example"
    }
  ];

  constructor() {
    console.log("reports data service running..");
  }

  getReportsData() {
    return this.reportsData;
  }

  getReportDataDetail(id: string) {
    return this.reportsData[id];
  }
}
