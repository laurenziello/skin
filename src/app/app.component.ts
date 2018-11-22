import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { OnInit } from '@angular/core';
import { Theme } from './models/theme.model';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RaceService } from './race.service';
import { VgAPI } from 'videogular2/core';

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

  centerFlex = Array.from({ length: 4 }, (_, i) => `Nav Item ${i + 1}`);

  threearray = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 50 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  races: any;

  next: any;

  hlsBitrates: any;

  api: VgAPI;


  /**
  * Temi disponibili
  */
  themes: Theme[] = [
    {
      primary: '#e65100',
      name: 'light-indigo-theme'
    },
    {
      primary: '#00C853',
      name: 'light-deep-purple-theme'
    },
    {
      primary: '#009688',
      name: 'dark-pink-theme'
    },
    {
      primary: '#2979FF',
      name: 'dark-purple-theme'
    },
  ];

  /**
    * Tema selezionato
    */
  currentTheme: Theme;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    private raceService: RaceService) {
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
    this.getRaces();
    this.getNext();
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

  racedetail(id: number) {
    this.router.navigate(['race/', id]);
  }

  home(): void {
    this.router.navigate(['main/']);
  }

  getRaces(): void {
    this.raceService.getRaces()
        .subscribe(races => this.races = races);
  }

  getNext(): void {
    this.raceService.getNext()
        .subscribe(next => this.next = next);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onGetBitrates(event: any) {
    console.log(event);
    this.hlsBitrates = event;
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log( this.api.getDefaultMedia());
    this.api.getDefaultMedia().subscriptions.canPlayThrough.subscribe(
      () => {
          this.api.volume = 0;
          this.api.play();
      }
  );


}
}
