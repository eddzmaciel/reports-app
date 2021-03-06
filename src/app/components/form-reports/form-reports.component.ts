import { Component, OnInit } from "@angular/core";

//router
import { Router, ActivatedRoute } from "@angular/router";

//services
import { ReportsDataService } from "../../services/reports-data.service";

@Component({
  selector: "app-form-reports",
  templateUrl: "./form-reports.component.html",
  styleUrls: ["./form-reports.component.css"]
})
export class FormReportsComponent implements OnInit {
  reportData: any = {
    name: "",
    count: "",
    commitment: "",
    balance: "",
    comments: ""
  };

  constructor(
    private activateroute: ActivatedRoute,
    private _reportsDataService: ReportsDataService
  ) {
    console.log("form report result");
    this.activateroute.params.subscribe(params => {
      console.log(
        "here is the param: ",
        params,
        " specific param",
        params["id"]
      );
      this.reportData = this._reportsDataService.getReportDataDetail(
        params["id"]
      );
    });
  }

  onInputValue(path, value: string) {
    console.log(path, value);

    const reportData = this.reportData;

    console.log("this.reportData[path]:", reportData.path);

    this.reportData.path += value;
  }

  ngOnInit() {
    console.log("reportData: ", this.reportData);
  }
}
