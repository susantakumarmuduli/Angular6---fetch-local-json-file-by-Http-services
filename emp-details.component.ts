import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  public empList = [];
  constructor(private _ApicallService: ApicallService) { }

  ngOnInit() {
    this._ApicallService.getData()
    .subscribe(data => this.empList = data);
  }

}
