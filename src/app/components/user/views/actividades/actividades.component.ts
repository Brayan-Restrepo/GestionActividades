import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../../services/public/public.service';
import { Actividades } from '../../../../shared/model/actividades.model';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  public actividades: Actividades[];

  constructor(private _publicService: PublicService) { }

  ngOnInit() {
    this._publicService.getActividades()
      .subscribe( (response: Actividades[]) => {
        this.actividades = response;
      });
  }

}
