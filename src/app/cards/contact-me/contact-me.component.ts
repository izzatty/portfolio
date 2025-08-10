import { Component } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  constructor(public confettiService: ConfettiService) { }
  value ="izzattysuaidii@gmail.com"

  handleClick(event: MouseEvent) {
    event.preventDefault();  // Prevent default link behavior

    // Trigger confetti animation
    this.confettiService.stars();
    setTimeout(() => {
      window.location.href = 'https://github.com/izzatty';
    }, 2000);  // Redirect after 2 seconds
}}