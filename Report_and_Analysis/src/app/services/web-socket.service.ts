import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    // Initialize WebSocket connection
    this.socket$ = new WebSocketSubject('ws://localhost:8080/realtime-data');
  }

  // Function to send data over the WebSocket
  public sendMessage(message: any): void {
    this.socket$.next(message);
  }

  // Function to receive real-time data from WebSocket
  public getMessages(): Observable<any> {
    return this.socket$;
  }

  // Function to close WebSocket connection
  public close(): void {
    this.socket$.complete();
  }
}
