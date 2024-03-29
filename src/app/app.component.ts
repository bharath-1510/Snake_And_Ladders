import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Snake } from './snake.model';
import { Player } from './player.model';
import { Ladder } from './ladder.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  num!: number[];
  snake!: Snake[];
  ladder!: Ladder[];
  player!: Player;
  diceValue: number = 0;
  disableButton!: boolean;
  hideDice: string[] = ['one1', 'two1', 'three1', 'four1', 'five1', 'six1'];
  constructor() {
    let k = 10;
    let j = 1;
    this.num = [];
    for (let i = 0; i < 100; i++) {
      if (i <= 9) {
        this.num[i] = i + 1;
      } else {
        if (i % 10 == 0) {
          k = j % 2 == 1 ? 10 * (j + 1) : 10 * j + 1;
          j++;
        }
        if (j % 2 == 1) {
          this.num[i] = k++;
        } else {
          this.num[i] = k--;
        }
      }
    }
  }
  ngOnInit(): void {
    this.player = new Player(1, 0, 'lightcoral');
    this.snake = [];
    this.ladder = [];
  }
  ngAfterViewInit(): void {
    for (let index = 0; index < this.hideDice.length; index++) {
      const element = this.hideDice[index];
      const ele = document.getElementById(element) as HTMLElement;
      ele.style.display = 'none';
    }
    let startArr = [1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24];
    let endArr = [71, 73, 74, 87, 88, 89, 90, 91, 92, 93, 94];
    let start = this.getRandomInt(startArr);
    let end = this.getRandomInt(endArr);
    this.snake[0] = new Snake(start, end);
    let elStart = document.getElementById(start + '');
    let elEnd = document.getElementById(end + '');
    let elStartLeft = 0;
    let elStartTop = 0;
    let elEndLeft = 0;
    let elEndTop = 0;
    if (elStart != null) {
      elStartLeft = this.getOffset(elStart).left + 30;
      elStartTop = this.getOffset(elStart).top - 10;
    }
    if (elEnd != null) {
      elEndLeft = this.getOffset(elEnd).left + 13;
      elEndTop = this.getOffset(elEnd).top + 20;
    }

    let line = document.getElementById('line');
    line?.setAttribute(
      'd',
      'M ' +
        elStartLeft +
        ' ' +
        elStartTop +
        ' C 600 200 500 700 ' +
        elEndLeft +
        ' ' +
        elEndTop
    );
    let startArr1 = [5, 7, 14, 15, 16, 25, 26, 27];
    let endArr1 = [75, 76, 77, 84, 85, 86, 95, 96, 97];

    let start1 = this.getRandomInt(startArr1);
    let end1 = this.getRandomInt(endArr1);
    this.snake[1] = new Snake(start1, end1);
    let elStart1 = document.getElementById(start1 + '');
    let elEnd1 = document.getElementById(end1 + '');
    let elStartLeft1 = 0;
    let elStartTop1 = 0;
    let elEndLeft1 = 0;
    let elEndTop1 = 0;
    if (elStart1 != null) {
      elStartLeft1 = this.getOffset(elStart1).left + 40;
      elStartTop1 = this.getOffset(elStart1).top - 10;
    }
    if (elEnd1 != null) {
      elEndLeft1 = this.getOffset(elEnd1).left + 15;
      elEndTop1 = this.getOffset(elEnd1).top + 20;
    }
    let line1 = document.getElementById('line1');
    line1?.setAttribute(
      'd',
      'M ' +
        elStartLeft1 +
        ' ' +
        elStartTop1 +
        ' C 800 200 400 600 ' +
        elEndLeft1 +
        ' ' +
        elEndTop1
    );

    let startArr2 = [41, 42, 59, 60];
    let endArr2 = [78, 79, 80, 81, 82, 83];

    let start4 = this.getRandomInt(startArr2);
    let end4 = this.getRandomInt(endArr2);
    this.snake[2] = new Snake(start4, end4);
    let elStart4 = document.getElementById(start4 + '');
    let elEnd4 = document.getElementById(end4 + '');
    let elStartLeft4 = 0;
    let elStartTop4 = 0;
    let elEndLeft4 = 0;
    let elEndTop4 = 0;
    if (elStart4 != null) {
      elStartLeft4 = this.getOffset(elStart4).left + 35;
      elStartTop4 = this.getOffset(elStart4).top + 12;
    }
    if (elEnd4 != null) {
      elEndLeft4 = this.getOffset(elEnd4).left + 13;
      elEndTop4 = this.getOffset(elEnd4).top + 25;
    }
    let line4 = document.getElementById('line4');
    line4?.setAttribute(
      'd',
      'M ' +
        elStartLeft4 +
        ' ' +
        elStartTop4 +
        ' C 500 300 400 600 ' +
        elEndLeft4 +
        ' ' +
        elEndTop4
    );

    let start2 = 6;
    let end2 = 72;
    this.ladder[0] = new Ladder(start2, end2);
    let elStart2 = document.getElementById(start2 + '');
    let elEnd2 = document.getElementById(end2 + '');
    let elStartLeft2 = 0;
    let elStartTop2 = 0;
    let elEndLeft2 = 0;
    let elEndTop2 = 0;
    if (elStart2 != null) {
      elStartLeft2 = this.getOffset(elStart2).left + 20;
      elStartTop2 = this.getOffset(elStart2).top - 5;
    }
    if (elEnd2 != null) {
      elEndLeft2 = this.getOffset(elEnd2).left + 5;
      elEndTop2 = this.getOffset(elEnd2).top + 25;
    }
    let line2 = document.getElementById('arrow-line2');
    line2?.setAttribute(
      'd',
      'M' +
        elStartLeft2 +
        ',' +
        elStartTop2 +
        ',' +
        elEndLeft2 +
        ',' +
        elEndTop2
    );
    let start3 = 12;
    let end3 = 98;
    this.ladder[1] = new Ladder(start3, end3);
    let elStart3 = document.getElementById(start3 + '');
    let elEnd3 = document.getElementById(end3 + '');
    let elStartLeft3 = 0;
    let elStartTop3 = 0;
    let elEndLeft3 = 0;
    let elEndTop3 = 0;
    if (elStart3 != null) {
      elStartLeft3 = this.getOffset(elStart3).left + 10;
      elStartTop3 = this.getOffset(elStart3).top;
    }
    if (elEnd3 != null) {
      elEndLeft3 = this.getOffset(elEnd3).left + 25;
      elEndTop3 = this.getOffset(elEnd3).top + 25;
    }
    let line3 = document.getElementById('arrow-line1');
    line3?.setAttribute(
      'd',
      'M' +
        elStartLeft3 +
        ',' +
        elStartTop3 +
        ',' +
        elEndLeft3 +
        ',' +
        elEndTop3
    );
  }
  getOffset(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }
  getRandomInt(arr: number[]): number {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  async dice() {
    this.disableButton = true;
    this.diceValue = this.getRandomIntInclusive(1, 6);
    const ele = document.getElementById(
      this.hideDice[this.diceValue - 1]
    ) as HTMLElement;
    ele.style.display = 'block';
    const playerDiv1 = document.getElementById(
      'div' + this.player.position
    ) as HTMLElement;
    if (this.player.position != 0) {
      playerDiv1.style.background = 'white';
    }
    await sleep(1000);
    ele.style.display = 'none';

    this.disableButton = false;
    this.player.position = this.player.position + this.diceValue;
    if (this.ladder[0].start == this.player.position) {
      this.player.position = this.ladder[0].end;
    } else if (this.ladder[1].start == this.player.position) {
      this.player.position = this.ladder[1].end;
    } else if (this.snake[0].end == this.player.position) {
      this.player.position = this.snake[0].start;
    } else if (this.snake[1].end == this.player.position) {
      this.player.position = this.snake[1].start;
    } else if (this.snake[2].end == this.player.position) {
      this.player.position = this.ladder[2].start;
    } else if (this.player.position > 100) {
      this.player.position -= this.diceValue;
    } else if (this.player.position === 100) {
      alert('winner ' + this.player.id + ' Dice Value : ' + this.diceValue);
      this.player.position = 0;
      this.diceValue = 0;
    }
    const playerDiv = document.getElementById(
      'div' + this.player.position
    ) as HTMLElement;

    playerDiv.style.background = this.player.color;
  }

  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
