import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
  }]

  onDeleteCharacter(id?: string):void {
    if(!id) return;
    console.log({id});
    this.onDelete.emit(id);
  }

  //onDelete = Index value : number   tarea: unicamente va emitir el index value

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
}
