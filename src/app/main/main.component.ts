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

  sequence = new Observable((observer: Observer<{
    name: string
    avatar_url: string
  }>) => {
    (async () => {
      const res = await fetch('http://api.github.com/users/hamdi4-beep')
      observer.next(await res.json())
    })()
  })

  constructor() {
    const {sequence} = this

    sequence.subscribe(({
      name,
      avatar_url
    }) => {
      this.user = {
        name,
        avatar_url
      }
    })
  }

  isEmpty(obj: Object) {
    const keys = Object.keys(obj)
    return keys.length === 0
  }
}
