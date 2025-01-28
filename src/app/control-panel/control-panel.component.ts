import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})

export class ControlPanelComponent {
  constructor(private ticketService: TicketService) {}

  startSystem() {
    this.ticketService.startSystem().subscribe(
      (response) => {
        console.log(response);
        alert('System started successfully!');
      },
      
    );
  }
  
  stopSystem() {
    this.ticketService.stopSystem().subscribe(
      (response) => {
        console.log(response);
        alert('System stopped successfully!');
      },
      
    );
  }
}

