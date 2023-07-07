import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Crew } from 'src/app/interfaces/Crew.interface';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-crew-page',
  templateUrl: './crew-page.component.html',
  styleUrls: ['./crew-page.component.scss']
})
export class CrewPageComponent implements OnInit, OnDestroy {

  // subscription = inject(Subscription);

  public person: number = 0;
  public subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = interval(4000).subscribe( () => {
      this.changePersonPosition();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public crew: Crew[] = [
    {
      name: 'Douglas Hurley',
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: '../../../assets/crew/image-douglas-hurley.png'
    },
    {
      name: 'Mark Shuttleworth',
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: '../../../assets/crew/image-mark-shuttleworth.png'
    },
    {
      name: 'Victor Glover',
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: '../../../assets/crew/image-victor-glover.png'
    },
    {
      name: 'Anousheh Ansari',
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: '../../../assets/crew/image-anousheh-ansari.png'
    },
  ];

  changePersonPosition(): void {
    this.person += 1;
      if (this.person >= 4) {
        this.person = 0;
      }
    }
}
