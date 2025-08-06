import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  @Input({ required: true }) items!: { id: number; name: string }[];
  @Output() textEvent = new EventEmitter<string>();

  selectedItem: { id: number; name: string } = { id: 0, name: '' };

  selectRandomItem() {
    this.selectedItem =
      this.items[Math.floor(Math.random() * this.items.length)];
    this.sendText();
  }

  sendText() {
    this.textEvent.emit(
      `Hello from ItemsComponent! Selected Item: ${this.selectedItem.name}`
    );
  }
}
