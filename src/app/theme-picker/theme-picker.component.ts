import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Theme } from '../models/theme.model';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

  /**
   * Tema selezionato
   */
  @Output() selectTheme: EventEmitter<Theme> = new EventEmitter();
  /**
   * Temi disponibili
   */
  @Input() themes: Theme[];
  /**
   * Tema corrente
   */
  @Input() currentTheme: Theme;
  /**
   * Emette evento selezione di un nuovo tema
   * @param theme Tema selezionato
   */
  installTheme(theme: Theme) {
    this.selectTheme.emit(theme);
  }

}
