import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'behr-button',
  templateUrl: './behr-button.component.html',
  styleUrls: ['./behr-button.css'],
})
export default class BehrButtonComponent {
  /**
   * How large should the button be?
   */
   @Input()
   size: 'small' | 'medium' | 'large' = 'medium';
 
  /**
   * Which implementation is the button?
   */
  @Input()
  type: 'orange' | 'black' | 'outline' | 'text' = 'orange';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Behr Button';


  @Input() 
  isDisabled = false;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['behr-button', `behr-button--${this.type}`, `behr-button--${this.size}`];
  }
}
