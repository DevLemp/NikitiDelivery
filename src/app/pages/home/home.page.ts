import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  searchQuery: string = '';
  items: string[];
  searchTerm: any;
  hidden: boolean;

  constructor(
    private nav: NavController
  ) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Muse',
      'Nel Fuoco'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.items = this.items.filter((item) => (item.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
  }

  toggle(){
    this.hidden = !this.hidden;
  }

}
