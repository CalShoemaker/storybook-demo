import { Component, Input } from '@angular/core';

@Component({
    selector: 'behr-master-spec',
    templateUrl: './behr-master-spec.component.html',
    styleUrls: ['./behr-master-spec.component.css'],
})

export default class BehrMasterSpec {
  /**
   * Header mainline
   */
   @Input()
   Header: string = 'Behr Master Spec';
 
  /**
   * Header subline
   */
  @Input()
  Subheader: string = 'Download the Behr Master Architectural Painting Specification for Section 09 90 00 Paints and Coatings.';

}
