import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

import { TicketDisplayComponent } from './ticket-display/ticket-display.component';
import { LogDisplayComponent } from "./log-display/log-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfigurationFormComponent, ControlPanelComponent, TicketDisplayComponent, LogDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventTicketingSys';
}
