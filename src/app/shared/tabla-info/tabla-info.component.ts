import { Component } from '@angular/core';
import { Tabla } from '../../interfaz/tabla';
import { RecursosService } from '../../servicios/recursos.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-info',
  imports: [],
  templateUrl: './tabla-info.component.html',
  styleUrl: './tabla-info.component.css'
})
export class TablaInfoComponent {
  tabla:Tabla[]=[];
  constructor(private recursosService: RecursosService,
    private router: Router,
  ){
         recursosService.obtenerDatosTabla().subscribe(respuesta=>{
           this.tabla= respuesta as Array<Tabla>
           console.log(respuesta as Array<Tabla>)
          
          })
}

obtenerId(id:number){
  this.router.navigate(['/detalles',id])
  
}

}
