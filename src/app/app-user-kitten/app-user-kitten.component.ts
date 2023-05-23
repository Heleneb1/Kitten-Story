import { Component, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../app-create-kitten/kitten';
@Component({
  selector: 'app-app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.css'],
})
export class AppUserKittenComponent {
  newKitten: string = '';
  @Output() kittenAdopted: EventEmitter<string> = new EventEmitter();

  myKittenList: Kitten[] = [];
  miaouciVisible = false;
  sendTokittenList(kitten: Kitten): void {
    this.kittenAdopted.emit(this.newKitten);

    const adopted = this.myKittenList.indexOf(kitten);
    if (adopted !== -1) {
      this.myKittenList.splice(adopted, 1);
      this.miaouciVisible = true;
    }
  }
}
