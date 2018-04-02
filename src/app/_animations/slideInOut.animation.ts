// import the required animation functions from the angular animations module
import { trigger, state, animate, query, stagger, transition, style } from '@angular/animations';
 
export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
         
        state('*', style({ transform: 'translateX(0px)' })),
 
        // route 'enter' transition
        query(':enter', [
            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                transform: 'translateX(-200vw)'
            }),

 
            // animation and styles at end of transition
            animate('1s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                transform: 'translateX(0px)',
            })),
        ])
 
        // // route 'leave' transition
        // transition(':leave', [
        //     // animation and styles at end of transition
        //     animate('.5s ease-in-out', style({
        //         // transition the right position to -400% which slides the content out of view
        //         right: '-400%',
 
        //         // transition the background opacity to 0 to fade it out
        //         backgroundColor: 'rgba(0, 0, 0, 0)'
        //     }))
        // ])
    ]);
