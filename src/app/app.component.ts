import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerComponent],
  providers: [LoggerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-preview-card-main';

  constructor(
    public logger: LoggerService
  ) {
    logger.log('Running the App Component\'s Constructor.')
  }
}
