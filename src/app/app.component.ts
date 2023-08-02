import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    effect(() => console.log(this.actions()));
  }

  title = signal<string>('ng16-course');
  vote = signal<number>(0);
  actions = signal<string[]>([]);
  doubleLengthOfActions = computed(() => this.actions().length * 2);

  like() {
    this.vote.update((oldVote) => oldVote + 1);
    this.actions.mutate((value) => value.push('Like'));
  }

  dislike() {
    this.vote.update((oldVote) => {
      if (oldVote) {
        this.actions.mutate((value) => value.push('Dislike'));
        return oldVote - 1;
      }
      return 0;
    });
  }
}
