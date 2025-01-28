import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-configuration-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent {
  config = {
    totalTickets: 0,
    ticketReleaseRate: 0,
    customerRetrievalRate: 0,
    maxTicketCapacity: 0
  };

  constructor(private ticketService: TicketService) {}

  onSaveConfiguration() {
    console.log('Saving configuration...');
    this.ticketService.configureSystem(this.config).subscribe(
      (response) => {
        console.log('Configuration saved successfully:', response);
        alert('Configuration saved successfully!');
      },
      (error) => {
        console.error('Error saving configuration:', error);
        alert('Failed to save configuration. Please check the backend server.');
      }
    );
  }
}
