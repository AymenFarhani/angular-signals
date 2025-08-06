import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { DUMMY_ITEMS } from './dummy-items';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items = DUMMY_ITEMS;
  private data$: Observable<{id: number, name:string}[]> = this.loadData();
  dataSignal = toSignal(this.data$, { initialValue: [] });

  // Original data source
  private loadData(): Observable<any[]> {
    return of(this.items);
  }

  // Method to access the data
  getData() {
    console.log(this.dataSignal()); // Will log the complete array
  }
}
