import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  readonly VAPID_PUBLIC_KEY = 'BP_kK8ybQ8fEuk5XTN-QK19HmsFGFw5FKvgFttWMauqmpdlg1RViN4JgwzpMdzVL1gfTDLllrn4_cRvjf5V5q_E';

  constructor(public updates: SwUpdate, public swPush: SwPush, public snackBar: MatSnackBar) {
    // If updates are enabled

    if (this.updates.isEnabled) {
      // poll the service worker to check for updates
      interval(30000).subscribe(() => this.updates.checkForUpdate());
    }

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => console.log(sub.toJSON()))
      .catch(err => console.error('Could not subscribe to notifications', err));

  }

  // Called from app.components.ts constructor
  public checkForUpdates() {
    console.log(this.updates.isEnabled);
    if (this.updates.isEnabled) {
      this.updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        this.promptUser(event);
      });
      this.updates.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
    }
  }

  // If there is an update, promt the user
  private promptUser(e): void {
    if (e.available) {
      const snackBarRef = this.snackBar.open(
        `E' stata rilasciata una nuova verione del sito`,
        'Update',
        { horizontalPosition: 'left' }
      );
      snackBarRef
        .onAction()
        .subscribe(() => window.location.reload());
    }
  }

}
