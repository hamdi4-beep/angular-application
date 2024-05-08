import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {}
