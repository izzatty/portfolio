import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tech {
  name: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  images: string[];
  github?: string;
  view: boolean;
  status: boolean;
  date: string;
  demo: boolean;
  personal: boolean;
  currentIndex: number;
  tech: Tech[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: "FYP - Network Intrusion Detection System (NIDS)",
      description: "A Final Year Project focused on detecting network intrusions using Conditional GAN, Deep Neural Networks, and Explainable AI (SHAP). Designed to improve detection accuracy and provide interpretability in cybersecurity systems.",
      images: [
        "assets/fyp-nids3.png",
        "assets/fyp-nids2.JPG",
        "assets/fyp-nids1.png"
      ],
      github: "https://github.com/izzatty/FYP-NIDS",
      view: false,
      status: false,
      date: "2025",
      demo: false,
      personal: false,
      currentIndex: 0,
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
      images: [
        "assets/ibm2.JPG",
        "assets/ibm3.JPG",
        "assets/8.jpg"
      ],
      github: "https://github.com/izzatty/IBM_Hackathon",
      view: false,
      status: false,
      date: "2024",
      demo: false,
      personal: false,
      currentIndex: 0,
      tech: [
        { name: "IBM Watsonx AI", image: "assets/ibm.jpg" },
        { name: "Github", image: "assets/github.svg" }
      ]
    }
  ];

  /** Move to the next image in the project's slider */
  nextSlide(project: Project) {
    project.currentIndex = (project.currentIndex + 1) % project.images.length;
  }

  /** Move to the previous image in the project's slider */
  prevSlide(project: Project) {
    project.currentIndex =
      (project.currentIndex - 1 + project.images.length) % project.images.length;
  }

  /** Track by index for better rendering performance */
  trackByIndex(index: number): number {
    return index;
  }

  selectedImage: string | null = null;

  /** Open full image modal */
  openImage(img: string) {
    this.selectedImage = img;
  }

  /** Close full image modal */
  closeImage() {
    this.selectedImage = null;
  }

  /** Expand icon image */
  expandIconSrc = 'assets/expand.webp';
}