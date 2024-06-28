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

public filterCompany(company : string) :Array<InternType> {
  return this._interns.filter((intern: InternType) => intern.Compagnie.name === company)
}

  private setInterns() : void {
    this._interns = [
        {
            lastname : 'Jacky',
            firstname : 'Test',
            promo : 'Poec décembre2020',
            Compagnie :
            {
              name : 'Airbus'
            },    
        },
        {
          lastname : 'James',
          firstname : 'Anbi',
          
          promo : 'Poec janv2018',
          Compagnie :
          {
            name : 'thalès'
          },
        },
        {
          lastname : 'Rachid',
          firstname : 'jule',
          promo : 'Poec Avril2016',
          Compagnie :
          {
            name : 'ferrari'
          },
        },
        {
          lastname : 'Rémi',
          firstname : 'Viviendi',
          promo : 'Poec Juillet2015',
          Compagnie :
          {
            name : 'Renault'
          },
        },

        {
          lastname : 'Test',
          firstname : 'Jean-Luc',
          promo : 'Poec Juillet2019',
          Compagnie :
          {
            name : 'Renault'
          },
        },
    
      ]
    
  }

  

}
