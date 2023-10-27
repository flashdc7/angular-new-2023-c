import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: CharacterInterface[]=[
    {
      name: 'trunk',
      power: 100,
      id: uuid()
    }
  ]

  @Output()
  onDeleteId:EventEmitter<string>= new EventEmitter()

  onDeleteCharacter(index:string){
    // todo: emitir el id del personaje
    // console.log(index);
    this.onDeleteId.emit( index );
  }
}
