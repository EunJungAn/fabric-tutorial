import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricComponent } from './fabric/fabric.component';
import { CanvasComponent } from './canvas/canvas.component';
@NgModule({
  declarations: [
    AppComponent,
    FabricComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
