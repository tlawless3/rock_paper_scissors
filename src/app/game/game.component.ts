import { Component, OnInit } from '@angular/core';
declare let p5: any;
declare let ml5: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor() {
  }

  private aiSelection
  private p5;
  private knnClassifier
  private video

  ngOnInit() {
    this.aiSelection = ''
    this.createCapture()
    this.knnClassifier = ml5.KNNClassifier()
  }

  private aiMove() {
    let rock = ['\u{1F91B}'];
    let paper = ['\u{270B}'];
    let scissors = ['\u{270C}'];

    let selectionArr = [rock, paper, scissors]

    this.aiSelection = selectionArr[Math.floor(Math.random() * 3)]
  }

  private trainNeuralNet(move) {
    console.log(move)
  }

  private createCapture() {
    this.p5 = new p5(this.sketch)
    this.video = this.p5.createCapture({
      audio: false,
      video: {
        facingMode: "user"
      }
    })
    this.video.parent('userVideo')
    this.video.size(320, 240)
    // this.video.hide()
  }

  private sketch(p: any) {
    let capture
    // Create a KNN classifier
    // const knnClassifier = ml5.KNNClassifier();
    // let featureExtractor;

    p.setup = () => {
      //   capture = p.createCapture({
      //     audio: false,
      //     video: {
      //       facingMode: "user"
      //     }
      //   })
      //   capture.parent('userVideo')
      //   capture.size(320, 240)
    };
  }

}
