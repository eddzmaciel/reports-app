import { Component, OnInit } from "@angular/core";

//router
import { Router } from "@angular/router";

//services
import { ReportsDataService } from "../../services/reports-data.service";

@Component({
  selector: "app-status-reports",
  templateUrl: "./status-reports.component.html",
  styleUrls: ["./status-reports.component.css"]
})
export class StatusReportsComponent implements OnInit {
  reportsData: any = [];
  constructor(
    private _reportsDataService: ReportsDataService,
    private router: Router
  ) {
    console.log("mounting status-reports component..");
  }

  ngOnInit() {
    this.reportsData = this._reportsDataService.getReportsData();
  }

  onOpenReport(id: number) {
    console.log("onOpenReport: ", id);
    this.router.navigate(["/form-reports", id]);
  }
}
