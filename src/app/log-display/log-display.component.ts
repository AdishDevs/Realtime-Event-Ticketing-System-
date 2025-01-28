import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-log-display',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.css']
})
export class LogDisplayComponent implements OnInit {
  logs: string[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.fetchLogs();
    setInterval(() => this.fetchLogs(), 5000); // Fetch logs every 5 seconds
  }

  fetchLogs() {
    this.ticketService.getLogs().subscribe(
      (data) => {
        this.logs = data || []; // Ensure logs are updated or default to an empty array
      },
      (error) => {
        console.error('Error fetching system logs:', error);
      }
    );
  }
}
