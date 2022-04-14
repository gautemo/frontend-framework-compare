import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent {

  darkMode!: boolean

  constructor() { 
    const initialDarkMode = Boolean(localStorage.getItem('darkMode') ?? window.matchMedia('(prefers-color-scheme: dark)').matches)
    this.setDarkMode(initialDarkMode)
  }

  setDarkMode(value: boolean){
    this.darkMode = value
    if(this.darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'on')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('darkMode')
    }
  }
}
