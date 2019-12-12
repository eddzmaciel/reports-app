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
  reportData: any = {};

  currentDate = new Date().toLocaleString();

  constructor(
    private activateroute: ActivatedRoute,
    private _reportsDataService: ReportsDataService,
    private router: Router
  ) {
    console.log("form report result");
    console.log("currentDate: ", this.currentDate);
    this.activateroute.params.subscribe(params => {
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

  onReturn() {
    this.router.navigate(["/status-reports"]);
  }

  ngOnInit() {
    console.log("reportData: ", this.reportData);
  }
}
