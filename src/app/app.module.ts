import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MovingCard } from "./movingCard.directive";
import { ClosingCard } from "./closeCard.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MovingCard, ClosingCard],
  bootstrap: [AppComponent]
})
export class AppModule {}
