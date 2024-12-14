import { Component } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {

  modalDisplay = 'none';

  openModal() {
    this.modalDisplay = 'block';
  }

  closeModal() {
    this.modalDisplay = 'none';
  }

  submitForm(event: Event) {
    event.preventDefault(); 

    this.showNotification();


    setTimeout(() => {
      this.closeModal();
    }, 5000);
  }

  showNotification() {
    const notification = document.getElementById('notification')!;
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 8000);
  }
}


