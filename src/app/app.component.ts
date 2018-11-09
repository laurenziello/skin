import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, HostBinding} from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { DocsSiteTheme } from './models/docsSiteTheme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  @HostBinding('class') componentCssClass;

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 10}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

 /**
   * Temi disponibili
   */
  themes: DocsSiteTheme[] = [
    {
      primary: '#3F51B5',
      accent: 'Indigo Light',
      href: 'indigo-pink.css',
      isDefault: true
    },
    {
      primary: '#673ab7',
      accent: 'Purple Light',
      href: 'deeppurple-amber.css',
    },
    {
      primary: '#e91e63',
      accent: 'dark-theme',
      href: 'pink-bluegrey.css',
    },
    {
      primary: '#9c27b0',
      accent: 'Purple Dark',
      href: 'purple-green.css',
    },
  ];

    /**
   * Tema selezionato
   */
  currentTheme: DocsSiteTheme;

  onSetTheme(theme) {
    console.log(theme);
    this.currentTheme = theme;
      this.componentCssClass = theme.accent;
    }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
