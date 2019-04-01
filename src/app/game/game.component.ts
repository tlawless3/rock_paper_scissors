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
    this.createCapture()
  }

  private p5;

  private createCapture() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    let capture;
    // Create a KNN classifier
    // const knnClassifier = ml5.KNNClassifier();
    // let featureExtractor;


    p.setup = () => {
      capture = p.createCapture(p.VIDEO);
      capture.parent('userVideo')
      capture.size(320, 240);
    };

    p.draw = () => {
      // p.background(255);
      // p.fill(0);
      // p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }

}
