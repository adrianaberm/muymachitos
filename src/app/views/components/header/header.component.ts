import { Component, Input, OnInit } from '@angular/core';


interface menuItem {
  ruta:string;
  texto: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() styleclass!: string;

  menu: menuItem[] = [
    {ruta:'/home', texto:'Inicio'},
    {ruta:'/podcast', texto:'Podcast'},
    {ruta:'/pqr', texto:'¡Opina · Critica · Pregunta!'},
    {ruta:'/machistometro', texto:'Machistómetro'},
    {ruta:'/libro', texto:'Libro'}
  ]
  
  constructor(){
    // addEventListener('DOMContentLoaded', () =>{
    //   const menu = document.querySelector('.menu-logo')
    //   if(menu) {
    //     menu.addEventListener('click',() => {
    //       const wapper = document.querySelector('header .wapper')
    //       wapper?.classList.toggle('nav')
    //     })
    //   }
    // })
  }
  
}
