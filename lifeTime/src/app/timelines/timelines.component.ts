import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}

