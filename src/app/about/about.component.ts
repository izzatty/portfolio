import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openPopup(companyId: any): void {
    console.log(companyId);
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';
  }

  // About me text
  aboutme: string = `I am Izzatty Suaidi, a Bachelor of Computer Science (Hons.) Netcentric Computing student,
    with a strong interest in artificial intelligence and cybersecurity. I have practical experience in Java, Python, C++,
    and tools such as TensorFlow, Pandas, PyTorch, and SHAP XAI, alongside cybersecurity tools like Kali Linux, Snort, and AWS.
    My recent projects include developing a Network Intrusion Detection System using cGAN, DNN, and Explainable AI,
    as well as participating in the IBM Hackathon with IBM Watsonx AI.`;

  // Education array
  education: Array<any> = [
    {
      studied_at: "Universiti Teknologi MARA (UiTM)",
      qualified: "Bachelor of Computer Science (Hons.) Netcentric Computing",
      time_period: "2022 - Present",
      place: "Shah Alam, Selangor",
      logo: "assets/uitm.png"
    },
    {
      studied_at: "Kolej Matrikulasi",
      qualified: "Computer Science (Module 2)",
      time_period: "2020 - 2022",
      place: "Banting, Selangor",
      logo: "assets/matriks.png"
    },
    {
      studied_at: "SMK Sultan Abdul Aziz Shah (SAAS)",
      qualified: "Grafik Komunikasi Teknikal (GKT)",
      time_period: "2015 - 2019",
      place: "Kajang, Selangor",
      logo: "assets/saas.jpg"
    }
  ];
}