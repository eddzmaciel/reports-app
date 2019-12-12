import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //barChart
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series C" }
  ];

  //doughnutChart
  public doughnutChartLabels = [
    "Sales Q1",
    "Sales Q2",
    "Sales Q3",
    "Sales Q4",
    "Sales Q5"
  ];
  public doughnutChartData = [120, 150, 180, 90, 100];
  public doughnutChartType = "doughnut";

  //radarChart
  public radarChartLabels = ["Q1", "Q2", "Q3", "Q4", "Q5"];
  public radarChartData = [
    { data: [120, 130, 180, 70, 33], label: "2017" },
    { data: [90, 150, 200, 45, 55], label: "2018" }
  ];
  public radarChartType = "radar";

  //pieChart
  public pieChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = "pie";
}
