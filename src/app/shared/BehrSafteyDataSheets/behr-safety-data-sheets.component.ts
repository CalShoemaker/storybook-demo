import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'behr-safety-data-sheets',
    templateUrl: './behr-safety-data-sheets.component.html',
    styleUrls: ['./behr-safety-data-sheets.component.css'],
})

export default class BehrSafetyDataSheets {
  /**
   * Header mainline
   */
   @Input()
   Header: string = 'Safety Data Sheets';
 
  /**
   * Header subline
   */
  @Input()
  Subheader: string = 'Look up Safety Data Sheets for all BEHR® and KILZ® Paints and Primers.';

  /**
   * Placeholder text
   */
   @Input()
   Placeholder: string = 'Search by product number';

   @Output()
   Search = new EventEmitter<Event>();

   public search:string = '';
}
