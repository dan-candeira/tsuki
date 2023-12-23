import { Component, OnInit, WritableSignal, signal } from '@angular/core';

@Component({
	selector: 'app-pomodoro',
	standalone: true,
	imports: [],
	template: `
		<svg
			viewBox="0 0 117 111"
			xmlns="http://www.w3.org/2000/svg"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5"
		>
			<ellipse
				cx="58.069"
				cy="64.569"
				rx="58.069"
				ry="46.369"
				style="fill:#fb594a"
			/>
			<path
				d="M105.87 38.249c6.475 7.479 10.456 16.551 10.268 26.32-.743 38.591-45.766 47.262-58.069 46.369 0 0 31.24-11.992 42.855-29.654 12.268-18.655 4.946-43.035 4.946-43.035Z"
				style="fill:#d95347"
			/>
			<path
				d="M55.242 14.752c-4.737.21-25.33 3.785-26.204 17.316 5.087.022 7.431-4.848 14.734-6.067 0 0-5.246 10.517-2.6 14.734 0 0 11.221-6.411 13-14.734 1.702 2.467-5.882 11.561 5.2 20.801-.147-.014.353-6.14 2.469-12.591.931-2.838.609-4.006 2.732-6.476.26 5.266 10.621 10.404 14.734 15.6 0 0 .175-12.423-4.334-16.467l12.134 5.2s-4.333-18.424-27.735-17.556c-.648-10.724 7.801-10.178 7.801-10.178L63.706 0c-9.864.775-8.464 14.752-8.464 14.752Z"
				style="fill:#347b5e"
			/>
			<circle cx="37.57" cy="47.37" r="8.533" style="fill:#fafcfd" />
			<circle
				cx="38.194"
				cy="48.332"
				r="6.869"
				style="fill:#252a40"
			/>
			<circle
				cx="38.949"
				cy="52.368"
				r="3.095"
				style="fill:#fafcfd"
			/>
			<circle
				cx="75.974"
				cy="49.103"
				r="8.533"
				style="fill:#fafcfd"
			/>
			<circle
				cx="75.674"
				cy="49.97"
				r="6.869"
				style="fill:#252a40"
			/>
			<circle
				cx="73.543"
				cy="53.613"
				r="2.849"
				style="fill:#fafcfd"
			/>
			<path
				d="m2.99 79.997 111.781.36"
				style="fill:none;stroke:#fafcfd;stroke-width:4.17px"
				id="horizontal-line"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xml:space="preserve"
				id="vertical-lines"
				x="61"
			>
				<g>
					@for (time of timer(); track $index) { @if (time !== 1)
					{
					<path
						[attr.d]="'m' + ($index + 1) * 6 + ' 79.997 v3 10'"
						style="fill:#fafcfd;stroke:#fafcfd;stroke-width:2px"
						id="vertical-line"
					/>
					<text
						[attr.x]="($index + 1) * 6 - 2"
						y="99.997"
						style="font-size: 8px; fill: #fafcfd"
					>
						{{ time }}
					</text>
					} @else {
					<path
						[attr.d]="'m' + ($index + 1) * 6 + ' 79.997 v3 5'"
						style="fill:#fafcfd;stroke:#fafcfd;stroke-width:2px"
						id="vertical-line"
					/>
					} }
				</g>
			</svg>
			<path
				d="M42.343 66.334h29.313s-15.811 17.3-29.313 0"
				style="fill:#551813"
			/>
			<path
				d="m66.47 75.23-3.818-8.887c2.111-.078 4.486-.032 7.506-.032L66.47 75.23ZM46.015 69.842l1.521-3.492c-.994 0-2.194.008-3.63.008l2.109 3.484Z"
				style="fill:#fafcfd"
			/>
			<path
				d="M17.557 36.968c-2.789-.402-13.61 12.229-9.001 14.453 4.348 2.097 3.178-5.473 8.387-8.051 5.209-2.578 5.57-5.687.614-6.402Z"
				style="fill:#ff8b81"
			/>
		</svg>
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
				if (index === 1) {
					return 0;
				}
				if (index % 5 === 0) {
					return index;
				}
				return 1;
			}
		);
		this.timer.set(chunks);
	}
}
