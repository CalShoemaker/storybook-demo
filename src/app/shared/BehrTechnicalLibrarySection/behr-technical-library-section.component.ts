
import { Component, Input } from '@angular/core';

@Component({
    selector: 'behr-technical-library-section',
    templateUrl: './behr-technical-library-section.component.html',
    styleUrls: ['./behr-technical-library-section.component.css'],
})

export default class BehrTechnicalLibraryComponent {
  /**
   * Header mainline
   */
   @Input()
   Header: string = 'Behr Technical Library';
 
  /**
   * Header subline
   */
  @Input()
  Subheader: string = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';

}
