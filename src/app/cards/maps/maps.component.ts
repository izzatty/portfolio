import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  // Inject DomSanitizer to safely trust the URL
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127488.48696853389!2d101.51651280000003!3d3.090607449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d8b932abdc7%3A0x6e65e085abb091c5!2sShah%20Alam%2C%20Selangor!5e0!3m2!1sen!2smy!4v1754858325183!5m2!1sen!2smy';

    // Sanitize the URL so Angular allows it in iframe
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
