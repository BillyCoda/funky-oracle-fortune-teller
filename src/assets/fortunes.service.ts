import { Injectable } from "@angular/core";

@Injectable()
export class FortuneService {
  private usedIndex: number[] = [];
  private fortunes: string[] = [
    "run",
    "No snowflake in an avalanche ever feels responsible",
    "About time I got outta that cookie",
    "If you eat something but no one sees you eat it, it has no calories",
    "Your heart will skip a beat",
    "Your last fortune was wrong",
    "You will marry a professional athelete == if you consider bowling a sport",
    "You laugh now, wait 'til you get home",
    "You are not illiterate",
    "Three can keep a secret, if you get rid of two",
    // 10^
    "Avoid playing the lotto in the near future - Lucky numbers: 38, 8 ,27, 45, 12",
    "Your efforts to do whatever might not go unnoticed",
    "Do not eat",
    "Never gonna give you up, never gonna let you down",
    "When you sqeeuze an orange, orange juice comes out - cause that's what's inside of an orange",
    "Why not treat yourself to a good time instead of waiting for someone else to do it?",
    "They can't all be zingers",
    "Your lucky numbers might be lucky for someone else",
    "Catch on fire with enthusiasm and people will come from miles to watch you burn",
    "Love is on the horizon. The stars predict he will be tall, dark, and a centaur.",
    // 20^
    "Don't trust the cat",
    "Pigeon poop burns the retina for 13 hours. You will learn this the hard way.",
    "You are about to finish reading a fortune",
    "How much deeper would the ocean be without sponges?",
    "Your resemblance to a muppet will keep the world from taking you seriously",
    "There is no angry way to say bubbles",
    "",
    "",
    "",
    "",
    // 30^
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // 40^
  ];

  /**
   * getAllFortunes
   */
  public getAllFortunes() {
    return this.fortunes.slice();
  }

  /**
   * getRandomFortune
   */
  public getRandomFortune() {
    if (this.usedIndex.length === this.fortunes.length) {
      return "All out of fresh fortunes!";
    }
    let index = this.randomizer();

    while (this.usedIndex.includes(index)) {
      index = this.randomizer();
    }

    this.usedIndex.push(index);
    return this.fortunes[index];
  }

  /**
   * Make random number
   */
  private randomizer() {
    let num = Math.floor(Math.random() * this.fortunes.length);
    return num;
  }
}
