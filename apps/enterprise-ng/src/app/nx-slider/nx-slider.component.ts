import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'enterprise-ng-nx-slider',
  templateUrl: './nx-slider.component.html',
  styleUrls: ['./nx-slider.component.scss'],
})
export class NxSliderComponent implements OnInit {
  @Input()
  nxAmount = 0;

  constructor() {}

  ngOnInit(): void {}
}
