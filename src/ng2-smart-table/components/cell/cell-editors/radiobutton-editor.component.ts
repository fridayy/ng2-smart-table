import {Component} from "@angular/core";
import {DefaultEditor} from "./default-editor";

@Component({
  selector: 'radiobutton-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <div *ngFor="let option of cell.getColumn().getConfig()?.list">
    <input  [value]="option.value" 
            [ngClass]="inputClass"
            [(ngModel)]="cell.newValue"
           type="radio"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)">{{option.title}}
    </div>
    `,
})
export class RadiobuttonEditorComponent extends DefaultEditor {
  constructor() {
    super();
  }

}
