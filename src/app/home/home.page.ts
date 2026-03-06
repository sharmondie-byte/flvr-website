import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  // These variables hold the form data
  contactData = {
    name: '',
    email: ''
  };

  constructor(private alertController: AlertController) {}

  async handleSubmit() {
    if (this.contactData.name && this.contactData.email.includes('@')) {
      const alert = await this.alertController.create({
        header: 'Success!',
        message: `Thanks ${this.contactData.name}, we will contact you at ${this.contactData.email}`,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter a valid name and email.',
        buttons: ['Retry'],
      });
      await alert.present();
    }
  }
}