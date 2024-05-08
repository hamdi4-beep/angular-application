import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  user = {
    name: '',
    avatar_url: ''
  }

  sequence = new Observable((observer: Observer<string>) => observer.next('hamdi4-beep'))

  constructor() {
    const {sequence} = this

    sequence.subscribe(async username => {
      const res = await fetch(`http://api.github.com/users/${username}`)
      this.user = await res.json()
    })
  }

  isEmpty(obj: Object) {
    const keys = Object.keys(obj)
    return keys.length === 0
  }
}
