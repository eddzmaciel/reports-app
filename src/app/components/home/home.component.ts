import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit
} from "@angular/core";
import loanData from "./collateralLoanData.json";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements AfterViewInit {
  title = "angular-gmap";
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 37.7169082;
  lng = -122.0297493;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 10
  };

  infowindow = new google.maps.InfoWindow({});

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    loanData.forEach(location => {
      let latLng = {
        lat: Number(location["Collateral_Latitude"]),
        lng: Number(location["Collateral_Longitude"])
      };

      // Set the position and title
      let marker = new google.maps.Marker({
        position: latLng,
        title: location["Collateral_City"],
        map: this.map
      });
      marker.setMap(this.map);
    });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //barChart
  public barChartLabels = [
    "Q3'18",
    "Q4'18",
    "Q1'19",
    "Q2'19",
    "Q3'19",
    "Q4'19"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [165, 176, 152, 179, 151, 153, 168], label: "Improving" },
    { data: [180, 191, 164, 158, 172, 152, 161], label: "Stable" },
    { data: [145, 144, 160, 167, 178, 177, 153], label: "Deteriorating" }
  ];

  //doughnutChart
  public doughnutChartLabels = [
    "05 - Special Mention",
    "06 - Substandard High",
    "07 - Substandard Low",
    "08 - Doubtful"
  ];
  public doughnutChartData = [54, 76, 9, 2];
  public doughnutChartType = "doughnut";

  //radarChart
  public radarChartLabels = [
    "05 - Special Mention",
    "06 - Substandard High",
    "07 - Substandard Low",
    "08 - Doubtful"
  ];
  public radarChartData = [
    { data: [66, 74, 65, 45], label: "Q3'19" },
    { data: [54, 76, 69, 42], label: "Q4'19" }
  ];
  public radarChartType = "radar";

  //pieChart
  public pieChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = "pie";
}
