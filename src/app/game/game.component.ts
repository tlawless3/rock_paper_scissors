import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import * as ml5 from 'ml5'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let video;
    // Create a KNN classifier
    const knnClassifier = ml5.KNNClassifier();
    let featureExtractor;

    this.createCanvas()
  }

  private p5;

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    p.setup = () => {
      p.createCanvas(700, 600);
    };

    p.draw = () => {
      p.background(255);
      p.fill(0);
      p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }

}
