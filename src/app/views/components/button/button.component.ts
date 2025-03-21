import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text!:string;
  @Input() clasStyle!:string;
  @Output() clicker: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() :void{
    this.clicker.emit();
  }

}
