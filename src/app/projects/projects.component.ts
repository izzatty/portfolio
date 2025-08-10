import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "FYP - Network Intrusion Detection System (NIDS)",
      description: "A Final Year Project focused on detecting network intrusions using Conditional GAN, Deep Neural Networks, and Explainable AI (SHAP). Designed to improve detection accuracy and provide interpretability in cybersecurity systems.",
      image: ["assets/fyp-nids1.png"],
      github: "https://github.com/izzatty/FYP-NIDS",
      view: false,
      status: false,
      date: "2025",
      demo: false,
      personal: false,
      tech: [
        { name: "Python", image: "assets/python.png" },
        { name: "TensorFlow", image: "assets/tensorflow.png" },
        { name: "PyTorch", image: "assets/pytorch.png" },
        { name: "SHAP XAI", image: "assets/shap.png" },
        { name: "Visual Studio Code", image: "assets/vscode.png" },
        { name: "Scikit-Learn", image: "assets/scikit-learn.png" },
        { name: "Matplotlib", image: "assets/matplotlib.png" },
        { name: "Jupyter Notebook", image: "assets/jupyter.png" }
      ]
    },
    {
      name: "IBM Hackathon Project",
      description: "A project developed for the IBM Hackathon using IBM Watsonx AI to address real-world challenges. Focused on leveraging AI models and cloud-based solutions for practical problem-solving.",
      image: ["assets/8.jpg"],
      github: "https://github.com/izzatty/IBM_Hackathon",
      view: false,
      status: false,
      date: "2024",
      demo: false,
      personal: false,
      tech: [
        { name: "IBM Watsonx AI", image: "assets/ibm.jpg" },
        { name: "Github", image: "assets/github.svg" }
      ]
    }
  ];

  // small trackBy for performance & to avoid template error if used
  trackByIndex(index: number, item: any): number {
    return index;
  }

}