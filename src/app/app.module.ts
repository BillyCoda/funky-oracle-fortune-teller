import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FortuneService } from "../assets/fortunes.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [FortuneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
