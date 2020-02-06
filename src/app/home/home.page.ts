import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    number = 0

    message = ""

  constructor(public toastController: ToastController, public alertController: AlertController, public actionSheetController: ActionSheetController) {}

  incrementPressed() {
    this.message = ""
    this.number++
  }
  

  async decrementPressed() {
    if (this.number == 0) {
      // this.message = "Number cannot be negative"
      const toast = await this.toastController.create({
        message: 'Number cannot be negative',
        duration: 2000
      });
      toast.present();
    }
    else {
      this.number--
    }
  }

  resetPressed() {
    this.message = ""
    this.number = 0
  }

  async alertButton() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Ta-Da!',
      message: 'This is an alert message!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async actionButton() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  }



