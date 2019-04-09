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
  private counter: number
  private countdown: boolean = false

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
    if (this.countdown) {
      return
    }
    this.counter = 4
    let countedDown = false
    let countdown = () => {
      if (!countedDown) {
        this.countdown = true
      }
      if (this.counter > 0 && this.countdown) {
        this.counter--
        setTimeout(() => {
          countdown()
        }, 1000)
      }
      //this if clause is what happens when the countdown is over
      if (this.counter === 0 && !countedDown) {
        this.countdown = false
        countedDown = true
      }
    }
    countdown()
  }

  private createCapture() {
    this.p5 = new p5()
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

}
