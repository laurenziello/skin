import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DocsSiteTheme } from '../models/docsSiteTheme.model';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

  /**
   * Tema selezionato
   */
  @Output() selectTheme: EventEmitter<DocsSiteTheme> = new EventEmitter();
  /**
   * Temi disponibili
   */
  @Input() themes: DocsSiteTheme[];
  /**
   * Tema corrente
   */
  @Input() currentTheme: DocsSiteTheme;
  /**
   * Emette evento selezione di un nuovo tema
   * @param theme Tema selezionato
   */
  installTheme(theme: DocsSiteTheme) {
    this.selectTheme.emit(theme);
  }

}
