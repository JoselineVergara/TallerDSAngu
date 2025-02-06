import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CartaComponent } from './shared/carta/carta.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent,CartaComponent,InicioComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TallerDSAngu';
  
}
