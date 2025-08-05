import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$: Observable<{id: number, name:string}[]> = this.loadData();
  dataSignal = toSignal(this.data$, { initialValue: [] });

  // Original data source
  private loadData(): Observable<any[]> {
    return of([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 1, name: 'Item 4' },
      { id: 2, name: 'Item 5' },
      { id: 3, name: 'Item 6' }
    ]);
  }

  // Method to access the data
  getData() {
    console.log(this.dataSignal()); // Will log the complete array
  }
}
