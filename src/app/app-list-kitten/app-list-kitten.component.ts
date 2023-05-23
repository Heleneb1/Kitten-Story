import { Component, Input } from '@angular/core';
import { Kitten } from '../app-create-kitten/kitten';
@Component({
  selector: 'app-app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.css'],
})
export class AppListKittenComponent {
  kittenList: Kitten[] = [];
  kittenAdopted: Kitten[] = [];
  miaouciVisible = false;

  constructor() {
    this.kittenList.push(
      new Kitten('Neunoeil', 'Race 1', '01-01-2023', '../assets/image1.jpg'),
      new Kitten('Bouba', 'Race 2', '02-02-2023', '../assets/image2.jpg'),
      new Kitten('Guismo', 'Race 3', '03-03-2023', '../assets/image3.jpg'),
      new Kitten('Michoco', 'Race 4', '04-04-2023', '../assets/image4.jpg'),
      new Kitten('Module', 'Race 5', '05-05-2023', '../assets/image5.jpg')
    );
  }
  /**
   *
   * @param newKitten
   */
  receiveNewKitten(newKitten: Kitten): void {
    console.log('Nouveau chaton reçu :', newKitten);
    this.kittenList.push(newKitten);
  }
  adoptKitten(kitten: Kitten): void {
    this.kittenAdopted.push(kitten);

    const adopted = this.kittenList.indexOf(kitten);
    if (adopted !== -1) {
      this.kittenList.splice(adopted, 1);
      this.miaouciVisible = true;
    }
  }
}
