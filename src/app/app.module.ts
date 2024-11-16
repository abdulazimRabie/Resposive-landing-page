import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HeroComponent },
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';

// Fontawesome for angular 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CtaComponent } from './components/cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    LogoComponent,
    FeaturesComponent,
    AboutComponent,
    CtaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position when navigating back
      anchorScrolling: 'enabled',           // Enables anchor scrolling
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
