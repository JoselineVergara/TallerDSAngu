import { Component } from '@angular/core';
import { Tabla } from '../../interfaz/tabla';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-tabla-detalles',
  imports: [
    RouterLink
  ],
  providers: [RecursosService],
  templateUrl: './tabla-detalles.component.html',
  styleUrl: './tabla-detalles.component.css'
})
export class TablaDetallesComponent {

  id:number = 0;

  tabla: Tabla | undefined;

  constructor(
    private service: RecursosService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(params => {
      const paramId = params.get('id');
      this.id = paramId ? +paramId : 0; // Convierte el valor a número, si existe, sino asigna 0
      console.log(this.id); // Mostrar el id procesado
    });

    this.service.obtenerDetallePosts(this.id).subscribe(details =>{
        this.tabla = details as Tabla;
        console.log(details)
    })

  }

}
