import { Component, Input } from '@angular/core';

export type AvenoraState =
  | 'idle'
  | 'wave'
  | 'explain'
  | 'hint'
  | 'happy'
  | 'celebrate';

@Component({
  selector: 'app-avenora-guide',
  standalone: true,
  templateUrl: './avenora-guide.html',
  styleUrl: './avenora-guide.scss',
})
export class AvenoraGuide {
  @Input() state: AvenoraState = 'wave';
  @Input() message = 'Hi there! Ready for a new adventure?';
  @Input() characterName = 'Avenora';
}