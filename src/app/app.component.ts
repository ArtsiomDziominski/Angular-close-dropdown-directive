import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dropdown';
  public numberInArray = -1;

  public arrayItem: string[] = ['item 1', 'item 2', 'item 3']
  public item: string = 'Select...';
  public isOpen: boolean = false;

  public choiceItem(item: string): void {
    this.item = item;
    this.numberInArray = this.arrayItem.indexOf(this.item);
  }

  public arrowUp(): void {
    this.numberInArray = this.numberInArray <= 0 ? this.arrayItem.length - 1 : --this.numberInArray
  }

  public arrowDown(): void {
    this.numberInArray = this.numberInArray >= this.arrayItem.length - 1 ? 0 : ++this.numberInArray
  }

  public choiceItemEnter(): void {
    this.item = this.arrayItem[this.numberInArray];
  }

  public openMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
