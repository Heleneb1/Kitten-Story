import { Component, Output, EventEmitter } from '@angular/core';
import { Kitten } from './kitten';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css'],
})
export class AppCreateKittenComponent {
  model: Kitten = new Kitten('', '', '', '');
  selectedImage: File | null = null;
  constructor(private toastr: ToastrService) {}

  onSubmit(): void {
    const newKitten: Kitten = new Kitten(
      this.model.name,
      this.model.race,
      this.model.birthday,
      this.model.imageSrc
    );
    console.log('Formulaire envoyé !');
    console.log(this.model);
    this.sendKittenToParent(newKitten);
  }
  isActive: boolean = false;

  changeColor() {
    this.isActive = !this.isActive;
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.model.imageSrc = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  @Output() createKitten: EventEmitter<Kitten> = new EventEmitter();

  sendKittenToParent(newKitten: Kitten): void {
    this.createKitten.emit(newKitten);
    // this.toastr.success('Chaton Ajouté');
    alert('Chaton Ajouté');
  }
}
