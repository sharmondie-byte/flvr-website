import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular'; // MUST have IonicModule
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule], // MUST include IonicModule here
})
export class HomePage {
  contactData = { name: '', email: '' };
  constructor(private alertController: AlertController) {}

  async handleSubmit() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Message sent to FLVR Systems!',
      buttons: ['OK']
    });
    await alert.present();
  }
}