import { Injectable } from '@angular/core';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  private _interns : Array<InternType> = []

  constructor() { 
    this.setInterns()
  }

/**
 * 
 * @returns InternType[]
 */
  public findAll() : Array<InternType> {
   return [...this._interns]
  }

  private setInterns() : void {
    this._interns = [
        {
            lastname : 'Jacky',
            firstname : 'Test',
            job : 'Airbus',
            promo : 'Poec décembre2020'
        },
        {
          lastname : 'James',
          firstname : 'Anbi',
          job : 'thalès',
          promo : 'Poec janv2018'
        },
        {
          lastname : 'Rachid',
          firstname : 'jule',
          job : 'ferrari',
          promo : 'Poec Avril2016'
        },
        {
          lastname : 'Rémi',
          firstname : 'Viviendi',
          job : 'twingo',
          promo : 'Poec Juillet2015'
        },
    
      ]
    
  }

}
