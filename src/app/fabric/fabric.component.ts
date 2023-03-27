import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { filterBackend } from 'fabric/fabric-impl';
@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.css']
})
export class FabricComponent implements OnInit {
  title = "src - app - fabric - fabric.component.ts";

  constructor() { }

  ngOnInit() {

    ////////////////////////////////////////
    //////////////// part 1 ////////////////
    ////////////////////////////////////////

    var canvas = new fabric.Canvas('canvas1', {
      backgroundColor: 'rgb(250,250,150)',
      selectionColor: 'blue',
      selectionLineWidth: 2
    });

    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });

    canvas.add(rect);
    rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
    rect.set('angle', 15).set('flipY', true);
    rect.set('selectable', false);
    
    var circle = new fabric.Circle({
      radius: 20, fill: 'orange', left: 200, top: 100
    });
    var triangle = new fabric.Triangle({
      width: 20, height: 30, fill: 'blue', left: 50, top: 50
    });

    canvas.add(circle, triangle);

    fabric.Image.fromURL("../../assets/image/cat.png", function (img) {
      img.set({
        left: 250,
        top: 150,
        angle: 60
      });
      img.scaleToHeight(400);
      img.scaleToWidth(400);
      canvas.add(img).renderAll().setActiveObject(img);
    });

    // path로 추가하기

    var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
    path.set({ left: 400, top: 150 });
    path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
    canvas.add(path);

    var path2 = new fabric.Path('M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
      c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
      0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
      c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
      -2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
      12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
      -20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z');

    canvas.add(path2.set({ left: 550, top: 50 }));

    canvas.renderAll();

    ////////////////////////////////////////
    ////////////// part 2, 3 ///////////////
    ////////////////////////////////////////

    var canvas2 = new fabric.Canvas('canvas2', {
      backgroundColor: 'rgb(200,250,150)',
      selectionColor: 'red',
      selectionLineWidth: 2
    });

    var rect2 = new fabric.Rect({
      left: 250,
      top: 140,
      fill: 'green',
      width: 50,
      height: 50,
    });

    canvas2.add(rect2);

    // animate

    rect2.animate('angle', 45, {
      onChange: canvas2.renderAll.bind(canvas2)
    });
    rect2.animate('left', '+=100', { onChange: canvas2.renderAll.bind(canvas2) });
    rect2.animate('angle', '-=5', { onChange: canvas2.renderAll.bind(canvas2) });
    
    rect2.animate('left', 600, {
      onChange: canvas2.renderAll.bind(canvas2),
      duration: 1000,
      easing: fabric.util.ease.easeOutBounce
    });

    // lmage 

    fabric.Image.fromURL("../../assets/image/cat2.png", function (img) {
      img.set({
        left: 20,
        top: 220
      });
      img.filters?.push(new fabric.Image.filters.Grayscale());
      
      img.scaleToHeight(200);
      img.scaleToWidth(200);
      img.applyFilters();
      
      canvas2.add(img).renderAll().setActiveObject(img);
    });

    fabric.Image.fromURL("../../assets/image/cat2.png", function (img) {
      img.set({
        left: 230,
        top: 220
      });
      img.filters?.push(new fabric.Image.filters.Sepia());
      
      img.scaleToHeight(200);
      img.scaleToWidth(200);
      img.applyFilters();

      canvas2.add(img).renderAll().setActiveObject(img);
    });

    // circle gradient 

    // 1.
    var circle1 = new fabric.Circle({
      left: 20,
      top: 20,
      radius: 50
    });
    
    var gradient1 = new fabric.Gradient({
      type: 'linear',
      gradientUnits: 'pixels', // or 'percentage'
      coords: { x1: 0, y1: 0, x2: 0, y2: circle1.height },
      colorStops:[
        { offset: 0, color: '#000' },
        { offset: 1, color: '#fff'}
      ]
    })
    
    circle1.set('fill', gradient1);
    // 2.
    var circle2 = new fabric.Circle({
      left: 140,
      top: 20,
      radius: 50
    });
    
    var gradient2 = new fabric.Gradient({
      type: 'linear',
      gradientUnits: 'pixels', // or 'percentage'
      coords: { x1: 0, y1: 0, x2: circle2.width, y2: 0 },
      colorStops:[
        { offset: 0, color: 'red' },
        { offset: 1, color: 'blue'}
      ]
    })
    
    /* 
    // or in percentage
      var gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'percentage',
        coords: { x1: 0, y1: 0, x2: 1, y2: 0 },
        colorStops:[
          { offset: 0, color: 'red' },
          { offset: 1, color: 'blue'}
        ]
      })
    */
    circle2.set('fill', gradient2);
    // 3. 
    var circle3 = new fabric.Circle({
      left: 260,
      top: 20,
      radius: 50
    });
    
    var gradient3 = new fabric.Gradient({
      type: 'linear',
      gradientUnits: 'pixels', // or 'percentage'
      coords: { x1: 0, y1: 0, x2: circle3.width, y2: 0 },
      colorStops:[
        { offset: 0, color: 'red' },
        { offset: 0.2, color: 'orange' },
        { offset: 0.4, color: 'yellow' },
        { offset: 0.6, color: 'green' },
        { offset: 0.8, color: 'blue' },
        { offset: 1, color: 'purple' }
      ]
    });
    
    circle3.set('fill', gradient3);
    
    var group = new fabric.Group([ circle1, circle2, circle3 ], {
      left: 20,
      top: 10
    });
    canvas2.add(group);

     // text
    var shadowText1 = new fabric.Text("I'm a text with shadow, italic text", {
      shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
      fontSize: 30,
      fontStyle: 'italic',
      fontFamily: 'Delicious',
      left: 20,
      top : 490
    })
    var shadowText2 = new fabric.Text("Lorem ipsum dolor sit, italic text", {
      shadow: 'green -5px -5px 3px',
      fontSize: 30,
      fontStyle: 'italic',
      fontFamily: 'Hoefler Text',
      left: 20,
      top : 520
    });

    canvas2.add(shadowText1);
    canvas2.add(shadowText2);
    
    var text = 'Text with a stroke\this is\na multiline\ntext\naligned right!';
    var textWithStroke = new fabric.Text(text, {
      stroke: '#F0F0F0',
      fontFamily: 'Impact',
      textBackgroundColor: 'rgb(150,200,100)',
      fontSize: 30,
      strokeWidth: 1.5,
      lineHeight: 0.8,
      left: 20,
      top : 600
    });
    var loremIpsumDolor = new fabric.Text("Lorem ipsum dolor", {
      fontFamily: 'Impact',
      stroke: '#c3bfbf',
      strokeWidth: 3,
      fontSize: 50,
      left: 20,
      top : 550
    });

    canvas2.add(textWithStroke);
    canvas2.add(loremIpsumDolor);

    var cir = new fabric.Circle({
      radius: 100,
      fill: '#eef',
      scaleY: 0.5,
      originX: 'center',
      originY: 'center'
    });
    
    var txt = new fabric.Text('hello world', {
      fontSize: 30,
      originX: 'center',
      originY: 'center'
    });
    
    var grp = new fabric.Group([ cir, txt ], {
      left: 150,
      top: 100,
      angle: -10
    });
    
    canvas2.add(grp);
  }
}
