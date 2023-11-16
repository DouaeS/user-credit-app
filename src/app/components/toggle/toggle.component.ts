import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() icon?: string;
  @Output() themeChanged = new EventEmitter<boolean>();

  checked = false;

  toggleTheme(): void {
    this.checked = !this.checked;
    this.themeChanged.emit(this.checked);
  }
}
