import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { CharacterInterface } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(
   private dbzService:DbzService
  ) { }

  get characters(): CharacterInterface[]{
    return [ ...this.dbzService.characters ];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacters(character:CharacterInterface):void{
    this.dbzService.onNewCharacters(character)
  }
}
