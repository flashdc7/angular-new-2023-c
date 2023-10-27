import { Injectable } from '@angular/core';
import { CharacterInterface } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: CharacterInterface[] = [
    {
      id: uuid(),
      name: 'krilliiiiiiiiiin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'goku',
      power: 20000
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 10000
    }
  ]

  onNewCharacters( character: CharacterInterface ):void{
    let { id, ...restData }= character;
    // debugger;
    // console.log('main page');
    // console.log(character);
    id= uuid();
    this.characters.push( { ...restData, id } )

  }

  // public onDeleteCharacters( id:number ):void{
  //   this.characters.splice(id, 1)
  public deleteCharacterById(id: string):void{
    console.log({id});

    this.characters= this.characters.filter( character => character.id !== id )
  }
}
