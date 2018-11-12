import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { OnInit } from '@angular/core';
import { Theme } from './models/theme.model';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  fullImagePath: string;

  mobileQuery: MediaQueryList;

  @HostBinding('class') componentCssClass;

  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 10 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

    /**
    * Temi disponibili
    */
   themes: Theme[] = [
    {
      primary: '#3f51b5',
      name: 'light-indigo-theme'
    },
    {
      primary: '#673AB7',
      name: 'light-deep-purple-theme'
    },
    {
      primary: '#E91E63',
      name: 'dark-pink-theme'
    },
    {
      primary: '#9C27B0',
      name: 'dark-purple-theme'
    },
  ];

  /**
    * Tema selezionato
    */
  currentTheme: Theme;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.fullImagePath = './assets/MST.png';
    this.matIconRegistry.addSvgIcon(
      'horse',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/horse.svg')
    );
  }


  ngOnInit() {
    this.componentCssClass = 'light-indigo-theme';
    this.overlayContainer.getContainerElement().classList.add('light-indigo-theme');
  }

  onSetTheme(theme) {
    this.currentTheme = theme;
    this.componentCssClass = theme.name;

    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme.name);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
