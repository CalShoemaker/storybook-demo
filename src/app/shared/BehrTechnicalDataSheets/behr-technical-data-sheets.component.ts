import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'behr-technical-data-sheets',
    templateUrl: './behr-technical-data-sheets.component.html',
    styleUrls: ['./behr-technical-data-sheets.component.css'],
})

export default class BehrTechnicalDataSheets {
  /**
   * Header mainline
   */
   @Input()
   Header: string = 'Technical Data Sheets';
 
  /**
   * Header subline
   */
  @Input()
  Subheader: string = 'View Technical Data Sheets for all BEHR and KILZ paints and primers';

  @Output()
  ddlChange = new EventEmitter<Event>();

  public dataSheets = ['Select a Product Line','Behr','Data','Test'];

}
