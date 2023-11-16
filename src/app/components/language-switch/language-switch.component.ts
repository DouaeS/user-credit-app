import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitcherComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
