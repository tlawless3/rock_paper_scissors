import { Component, OnInit } from '@angular/core';
declare var p5: any;
import * as ml5 from 'ml5'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor() {
  }

  // private video

  ngOnInit() {

    this.createCanvas()
  }

  private p5;

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    let capture;
    // Create a KNN classifier
    // const knnClassifier = ml5.KNNClassifier();
    // let featureExtractor;


    p.setup = () => {
      p.createCanvas(480, 480);
      console.log(p)
      capture = p.createCapture(p.VIDEO);
      capture.size(320, 240);
    };

    p.draw = () => {
      p.image(capture, 0, 0, p.width, p.width * capture.height / capture.width);
      p.filter(p.INVERT);
      // p.background(255);
      // p.fill(0);
      // p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }

}
