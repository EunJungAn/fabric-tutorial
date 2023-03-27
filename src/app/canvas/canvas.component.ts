
import { Component } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent {
  private canvas: any;
  private isDrawing: boolean = false;

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true
    });
    this.canvas.freeDrawingBrush.width = 5;
    this.canvas.freeDrawingBrush.color = '#000';
  }

  public toggleDrawing() {
    this.isDrawing = !this.isDrawing;
    if (this.isDrawing) {
      this.canvas.isDrawingMode = true;
    } else {
      this.canvas.isDrawingMode = false;
    }
  }
}
