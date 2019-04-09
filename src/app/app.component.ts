import { Component } from "@angular/core";
import { FortuneService } from "../assets/fortunes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "the Fortune Teller";
  fortune: string = "---";
  buttonText: string = "Try your luck!";
  btnIndex: number = 0;

  constructor(private fortuneServe: FortuneService) {}

  makeFortune() {
    this.fortune = this.fortuneServe.getRandomFortune();
    this.btnIndex++;
    let totalFortunes: number = this.fortuneServe.getAllFortunes().length;

    switch (this.btnIndex) {
      case 1:
        this.buttonText = "Try another!";
        break;
      case 30:
        this.buttonText = "Try some more!";
        break;
      case totalFortunes:
        this.buttonText = "That's all for now!";
        break;
      case totalFortunes + 11:
        this.buttonText = "That's probably enough clicking ♥";
        break;
      case totalFortunes + 17:
        this.buttonText = "Still trying?";
        break;
      case totalFortunes + 25:
        this.buttonText = "...";
        break;
      case totalFortunes + 30:
        this.buttonText = "Still?";
        break;
      case totalFortunes + 40:
        this.buttonText = "Wow.";
        break;
      case totalFortunes + 50:
        this.buttonText =
          "You know, you don't get anything for clicking this button anymore.";
        break;
      case totalFortunes + 80:
        this.buttonText = "it's time to stop";
        break;
      case totalFortunes + 110:
        this.buttonText = "srs, tho";
        break;
      case totalFortunes + 140:
        this.buttonText = "No more easter eggs here";
        break;
      case totalFortunes + 170:
        this.buttonText = "You think I'm kidding.";
        break;
      default:
        return;
    }
  }
}
