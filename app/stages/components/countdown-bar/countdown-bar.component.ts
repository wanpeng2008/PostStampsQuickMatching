import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";

@Component({
  moduleId: module.id,
  selector: 'app-countdown-bar',
  templateUrl: './countdown-bar.component.html',
  styleUrls: ['./countdown-bar.component.scss']
})
export class CountdownBarComponent implements OnInit,AfterViewInit,OnDestroy {

  @ViewChild('countdownBar') public countdownBar:ElementRef;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
      let bar:StackLayout = this.countdownBar.nativeElement;
  }

  ngOnDestroy(): void {
  }

}
