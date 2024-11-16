import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  realTime = faClock;
  reports = faBug;
  ui = faMobileAndroid;
}
