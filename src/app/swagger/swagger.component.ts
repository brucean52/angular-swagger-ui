import {AfterViewInit, Component, ElementRef} from '@angular/core';

import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: []
})
export class SwaggerComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const ui = SwaggerUI({
      url: 'http://petstore.swagger.io/v2/swagger.json',
      domNode: this.el.nativeElement.querySelector('.swagger'),
      deepLinking: true,
      presets: [
        SwaggerUI.presets.apis
      ],
    });
  }
}
