import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-machistometro',
  templateUrl: './machistometro.component.html'
})
export class MachistometroComponent implements OnInit, AfterViewInit {
  unityInstance: any;
  a: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "unity/Build/build.json");
  }

}
