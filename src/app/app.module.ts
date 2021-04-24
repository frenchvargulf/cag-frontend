import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ControlsPanelComponent } from './components/controls-panel/controls-panel.component';
import { ControlsPanelItemWrapperComponent } from './components/controls-panel-item-wrapper/controls-panel-item-wrapper.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { ChoosenFilledBoxDirective } from './directives/choosen-filled-box.directive';
import { PrimaryLinkComponent } from './components/primary-link/primary-link.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ControlsPanelComponent,
    ControlsPanelItemWrapperComponent,
    ChoosenFilledBoxDirective,
    RangeSliderComponent,
    PrimaryLinkComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
