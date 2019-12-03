import { trigger, transition, animate, style } from "@angular/animations";

export const Fader = {
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(1500, style({ opacity: 1 }))
      ])
    ])
  ]
};
