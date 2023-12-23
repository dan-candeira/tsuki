import { Component } from '@angular/core';
import { PomodoroComponent } from '../../components/pomodoro/pomodoro.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PomodoroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
