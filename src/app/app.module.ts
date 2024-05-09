import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './home/about/about.component';
import { DomainsComponent } from './home/domains/domains.component';
import { ContactComponent } from './home/contact/contact.component';
import { MatExpansionModule } from '@angular/material/expansion'; // Import this module
import { MatButtonModule } from '@angular/material/button'; // Example of importing another module
import { MatIconModule } from '@angular/material/icon'; // Example of importing another module

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DomainsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
