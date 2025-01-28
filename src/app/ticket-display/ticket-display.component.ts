import { Component, OnInit, OnDestroy } from '@angular/core';
import { TicketService } from '../ticket.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ticket-display',
  standalone: true,
  templateUrl: './ticket-display.component.html',
  styleUrls: ['./ticket-display.component.css'],
})
export class TicketDisplayComponent implements OnInit, OnDestroy {
  availableTickets: number = 0;
  totalTickets: number = 0;
  private ticketUpdateSubscription: Subscription | undefined;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.startFetchingTickets(); // Automatically start fetching tickets when the component loads
  }

  ngOnDestroy() {
    this.stopFetchingTickets(); // Cleanup subscription to avoid memory leaks
  }

  startFetchingTickets() {
    // Fetch ticket updates every second
    this.ticketUpdateSubscription = interval(1000).subscribe(() => this.fetchTickets());
  }

  fetchTickets() {
    // Fetch available tickets
    this.ticketService.getAvailableTickets().subscribe(
      (data) => {
        this.availableTickets = data;
      },
      (error) => {
        console.error('Error fetching available tickets:', error);
      }
    );

    // Fetch total tickets from the configuration
    this.ticketService.getConfiguration().subscribe(
      (config) => {
        this.totalTickets = config.totalTickets;
      },
      (error) => {
        console.error('Error fetching configuration:', error);
      }
    );
  }

  stopFetchingTickets() {
    // Stop periodic updates
    if (this.ticketUpdateSubscription) {
      this.ticketUpdateSubscription.unsubscribe();
      this.ticketUpdateSubscription = undefined;
    }
  }
}
