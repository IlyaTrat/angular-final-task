import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { ApiResponceData } from 'src/app/interfaces/youtube/api-responce-data';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.sass']
})
export class ItemsListComponent implements OnInit {

  constructor(private apiData: ApiDataService) { }
  data: ApiResponceData

  ngOnInit() {
    this.apiData.getData().subscribe(data => {
      this.data = JSON.parse(JSON.stringify(data));
      console.log(this.data.items[0])
    });
  }

}
