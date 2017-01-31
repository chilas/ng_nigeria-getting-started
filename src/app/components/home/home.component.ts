import { Component, OnInit } from '@angular/core';
import { NetworkInfoData, NetworkInfoService } from '../../services/network-info.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [NetworkInfoService],
    styleUrls: []
})
export class HomeComponent implements OnInit {


    constructor(private _networkInfo: NetworkInfoService) { }

    networkInfoData = new NetworkInfoData();
    mapUrl = "";
    ngOnInit() {
        this._networkInfo.getNetworkInfo()
            .subscribe(
            data => {
                this.networkInfoData = {
                    City: data.city,
                    Country: data.country,
                    IP: data.query,
                    ISP: data.isp
                }

                this.mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${data.lat},${data.lon}&zoom=17&size=600x300&maptype=roadmap&markers=color:green|${data.lat},${data.lon}&key=AIzaSyAFuqOJWBxlgNf335w5sqN4j9t2QQsLhis`;

                console.log(data);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log("done!");
            }
            )
    }
}