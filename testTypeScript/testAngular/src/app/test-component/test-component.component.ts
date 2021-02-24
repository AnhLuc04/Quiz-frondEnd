import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  fontSize = 14;
  constructor() { }
  onChange(value: any) {
    this.fontSize = value;
  }
  ngOnInit() {
  }

}
