import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from "./components/services/services.component";
import { MoreComponent } from "./components/more/more.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HomeComponent, AboutComponent, ServicesComponent, MoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'la-parrilla-real';
}
