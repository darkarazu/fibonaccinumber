import { animate, style, transition, trigger } from "@angular/animations";

/*
    * Animates elements hidden or shown with fading animation
    ! This animation is for ng if hidden/shown elements
*/
const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('300ms ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('300ms ease-out', style({
    opacity: 0
  }))
]);

export const fadeIn = trigger('fadeIn', [
  enterTransition
]);

export const fadeOut = trigger('fadeOut', [
  leaveTrans
]);