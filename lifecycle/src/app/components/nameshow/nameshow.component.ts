import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nameshow',
  templateUrl: './nameshow.component.html',
  styleUrls: ['./nameshow.component.css']
})
export class NameshowComponent implements OnInit, OnChanges {

  @Input() nombre: string

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change")
  }

  ngOnInit(): void {
  }

}
