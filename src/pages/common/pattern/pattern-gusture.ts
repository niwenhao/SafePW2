import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';

const WIDTH = 6000;
const HEIGHT = 6000;
@Component({
  selector: 'sp-pattern-input',
  templateUrl: 'pattern-gusture-input.html',
  styleUrls: [ 'pattern-gusture-input.scss' ]
})
export class PatternGustureInput implements AfterViewInit {
  @Input() dataserial : string[];
  @Input() rowCount: number;
  @Input() columnCount: number;
  @Input() refreshMS: number;
  @Input() stillRefreshTimes: number;

  @Output() decided: EventEmitter<string[]>;

  @ViewChild("sp_pattern_input") patternInput: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  gusturePath: Array<{x: number, y:number}> = [];
  stillIndexes: number[] = [];
  timerId: number = 0;

  drawBasePoint():void {
    const wd = WIDTH/this.columnCount;
    const hd = HEIGHT/this.rowCount;
    const d = (wd > hd ? hd : wd)/6;

    const ct = this.context;
    ct.beginPath();
    for(let r=0; r<this.rowCount; r++) {
      for(let c=0; c<this.columnCount; c++) {
        const x = WIDTH * (c + 0.5) / this.columnCount;
        const y = HEIGHT * (r + 0.5) / this.rowCount;
        const path = new Path2D();
        ct.arc(x, y, d, 0, 2*Math.PI);
      }
    }
    ct.fill();
  }

  drawPath():void {
    const f = this.stillIndexes[0];
    const t = this.stillIndexes[this.stillIndexes.length-1];
    if ( f < t) {
      this.context.beginPath();
      for(let i=f; i<=t; i++) {
        const p = this.gusturePath[i];
        this.context.lineTo(p.x, p.y);
      }
      this.context.stroke();
    }
  }

  shinkGusturePath():void {

  }

  refreshByTimer():void {
    const idx = this.gusturePath.length - 1;
    this.stillIndexes.push(idx);
    if (this.stillIndexes.length > this.stillRefreshTimes) {
      this.stillIndexes.shift();
    }
    this.shinkGusturePath();
    this.context.clearRect(0, 0, WIDTH, HEIGHT);
    this.drawBasePoint();
    this.drawPath();
  }


  ngAfterViewInit():void {
    this.context = this.patternInput.getContext("2d");
  }

  startDraw() {
    if (this.gusturePath.length) {
      this.gusturePath = [];
    }
    if (this.stillIndexes.length) {
      this.stillIndexes = [];
    }

    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = 0;
    }
  }

  on_mousedown(event):void {
    this.startDraw()

    this.timerId = window.setInterval(()=> {
      this.refreshByTimer();
    }, this.refreshMS);
  }

  on_mouseup(event):void {

  }

  on_pane(event):void {

  }

  on_mouseleave(event): void {

  }
}
