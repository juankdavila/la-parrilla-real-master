import { Component } from '@angular/core';
import { MoreComponent } from "../more/more.component";

@Component({
  selector: 'app-sidebar',
  imports: [MoreComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
