import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComputerVisionComponent } from './computer-vision/computer-vision.component';
import 'rxjs/add/operator/toPromise';
import * as $ from "jquery";
import { OutputSectionComponent } from './directives/output-section.component';
import { ApiHeaderComponent } from './directives/api-details-header.component';
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { DataService } from "app/services/data.service";
import { VisionDataService } from "app/services/vision-data.service";
import { CognitiveApiService } from "app/services/cognitive-api.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { HeroBannerComponent } from './directives/hero-banner.component';
import { ContactDataService } from './services/contact-data.service';
@NgModule({
  declarations: [
    AppComponent,
    ComputerVisionComponent,
    OutputSectionComponent,
    ApiHeaderComponent,
    HeroBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ng2Bootstrap.Ng2BootstrapModule
  ],
  providers: [DataService,
              CognitiveApiService,
              VisionDataService,
              ContactDataService,
              ng2Bootstrap.ComponentLoaderFactory,
              ng2Bootstrap.PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
