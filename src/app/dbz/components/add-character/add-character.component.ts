import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-bdz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<CharacterInterface>= new EventEmitter()

  public character: CharacterInterface={
    name: '',
    power: 0,
    id: uuid()
  }

  emitCharacter(): void{
    // console.log( this.character );
    if( this.character.name.length === 0 )
      return

    this.onNewCharacter.emit( this.character)

    this.character={ name:'', power:0, id: uuid()}
  }
}
