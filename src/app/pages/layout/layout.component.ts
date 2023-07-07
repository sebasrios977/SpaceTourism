import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/MenuItem.interface';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public isMenuShown: boolean = false;
  private screenWidth: number = 0;

  public menuItems: MenuItem[] = [
    { name: 'Home', route: '/space/home', number: '00' },
    { name: 'Destination', route: '/space/destination', number: '01' },
    { name: 'Crew', route: '/space/crew', number: '02' },
    { name: 'Technology', route: '/space/technology', number: '03' },
  ]

  constructor() {
    this.getScreenSize(); // Obtener el tamaño de la pantalla al inicializar el componente
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenSize(); // Actualizar el tamaño de la pantalla al cambiar el tamaño de la ventana
  }

  getScreenSize() {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth >= 768) {
      this.isMenuShown = true;
      return;
    }
    this.isMenuShown = false;
  }

  showMenu(showMenu: boolean): void {
    this.isMenuShown = showMenu;
  }
}
