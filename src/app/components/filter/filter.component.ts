import {
  Component,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() inputChanged = new EventEmitter<string>();

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputChanged.emit(inputElement.value);
  }

}
