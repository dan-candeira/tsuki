import { Component, OnInit, WritableSignal, signal } from '@angular/core';

@Component({
	selector: 'app-pomodoro',
	standalone: true,
	imports: [],
	template: `
		<div style="display: flex; gap: 1rem;">
			@for (time of timer(); track $index) {
			<span>{{ time }}</span>
			}
		</div>
		<div>
			@for (option of timerOptions; track $index) {
			<button (click)="selectTimerOption(option)">
				<span class="vh">{{ option }} minutes</span>
				<span aria-hidden="true">{{ option }}min</span>
			</button>
			}
		</div>
	`,
	styleUrl: './pomodoro.component.css',
})
export class PomodoroComponent implements OnInit {
	timerOptions = [15, 25, 45];
	timer: WritableSignal<number[]> = signal([]);

	ngOnInit(): void {
		this.selectTimerOption(this.timerOptions[0]);
	}

	selectTimerOption(timer: number): void {
		const chunks = Array.from(
			{ length: timer },
			(_: null, index: number) => {
				index += 1;
				if (index === 1 || index % 5 === 0) {
					return index;
				}
				return 1;
			}
		);
		this.timer.set(chunks);
	}
}
