import { Component, OnInit } from '@angular/core';
import {FindActivityService} from "../find-activity/find-activity.service";
import {Activity} from "../find-activity/activity";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  activity: Activity | undefined

  constructor(private findActivityService: FindActivityService) { }

  ngOnInit(): void {
    // this.activity = {
    //   activity: "Click button to load",
    //   type: "Default",
    //   participants: 0,
    //   price: 0,
    //   link: "",
    //   key: ""
    //
    // }
  }

  findActivity() {
    this.findActivityService.getConfig().subscribe((data: Activity) => {
        this.activity = data;
        console.log("data " + JSON.stringify(data))
      }
    )
  }

}
