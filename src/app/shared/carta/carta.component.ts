import { Component } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carta',
  imports: [HttpClientModule],
  providers:[RecursosService],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {

  
  medios:any[]=[
      {
        "cartaTexto": "Discover new places and experiences with our exclusive travel guides. Plan your next adventure today!",
        "boton1": "Explore",
        "boton2": "Book Now",
        "minutos": "15min"
      },
      {
        "cartaTexto": "Stay updated with the latest technology trends and innovations shaping the future of the digital world.",
        "boton1": "Read More",
        "boton2": "Subscribe",
        "minutos": "7min"
      },
      {
        "cartaTexto": "Learn how to cook delicious meals with easy-to-follow recipes from top chefs around the world.",
        "boton1": "View Recipe",
        "boton2": "Save",
        "minutos": "12min"
      },
      {
        "cartaTexto": "Get inspired by the best fitness routines to help you achieve your health and wellness goals.",
        "boton1": "Start Now",
        "boton2": "Share",
        "minutos": "10min"
      },
      {
        "cartaTexto": "Improve your productivity with these simple but effective time management tips for everyday life.",
        "boton1": "Learn More",
        "boton2": "Bookmark",
        "minutos": "8min"
      },
      {
        "cartaTexto": "Discover the latest fashion trends and styling tips to upgrade your wardrobe effortlessly.",
        "boton1": "See Trends",
        "boton2": "Shop Now",
        "minutos": "5min"
      },
      {
        "cartaTexto": "Explore fascinating historical facts and stories that shaped the world as we know it today.",
        "boton1": "Read Story",
        "boton2": "Discuss",
        "minutos": "14min"
      },
      {
        "cartaTexto": "Master the basics of financial planning and start building a secure future with smart investments.",
        "boton1": "Get Started",
        "boton2": "Consult",
        "minutos": "11min"
      },
      {
        "cartaTexto": "Find out how to take better care of your mental health with expert advice and self-care techniques.",
        "boton1": "Discover",
        "boton2": "Join",
        "minutos": "9min"
      }
   ]

     fotos: Foto[]=[];
     constructor(private recursosService: RecursosService){
       recursosService.obtenerDatos().subscribe(respuesta=>{
         this.fotos= respuesta as Array<Foto>

         this.medios.forEach((card, index) => {
          if (this.fotos[index]) {
            card.foto = this.fotos[index].url;  
          } else {
            card.foto = 'assets/img/default.jpg'; // Imagen por defecto si no hay suficientes fotos
          }
        });

       })

     }
 

}
