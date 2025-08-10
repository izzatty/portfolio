import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I work with a versatile range of programming languages, AI frameworks, and cybersecurity tools 
                  to design innovative solutions and tackle complex challenges. My toolkit blends research-driven 
                  approaches with hands-on technical expertise to deliver impactful, high-quality results. 🚀🔐`
  items: Array<any> = [
    {
      name: "TensorFlow",
      description: 'TensorFlow is an open-source machine learning platform for building and deploying AI models.',
      link: 'https://www.tensorflow.org/',
      image: 'assets/tensorflow.png'
    },
    {
      name: "PyTorch",
      description: 'PyTorch is an open-source machine learning library based on the Torch library, used for computer vision, NLP, and deep learning research.',
      link: 'https://pytorch.org/',
      image: 'assets/pytorch.png'
    },
    {
      name: "Keras",
      description: 'Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow.',
      link: 'https://keras.io/',
      image: 'assets/keras.png'
    },
    {
      name: "Matplotlib",
      description: 'Matplotlib is a Python plotting library for creating static, animated, and interactive visualizations.',
      link: 'https://matplotlib.org/',
      image: 'assets/matplotlib.png'
    },
    {
      name: "Scikit-learn",
      description: 'Scikit-learn is a Python module for machine learning, providing simple and efficient tools for data mining and analysis.',
      link: 'https://scikit-learn.org/',
      image: 'assets/scikit-learn.png'
    },
    {
      name: "SHAP",
      description: 'SHAP (SHapley Additive exPlanations) is a tool for interpreting machine learning models using Shapley values.',
      link: 'https://shap.readthedocs.io/',
      image: 'assets/shap.png'
    },
    {
      name: "Pandas",
      description: 'Pandas is a Python library providing high-performance, easy-to-use data structures and analysis tools.',
      link: 'https://pandas.pydata.org/',
      image: 'assets/pandas.png'
    },
    {
      name: "Wireshark",
      description: 'Wireshark is a network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.',
      link: 'https://www.wireshark.org/',
      image: 'assets/wireshark.png'
    },
    {
      name: "Nmap",
      description: 'Nmap is a free and open-source utility for network discovery and security auditing.',
      link: 'https://nmap.org/',
      image: 'assets/nmap.jpg'
    },
    {
      name: "Kali Linux",
      description: 'Kali Linux is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing.',
      link: 'https://www.kali.org/',
      image: 'assets/kali.png'
    },
    {
      name: "Metasploit",
      description: 'Metasploit Framework is an open-source penetration testing framework for developing and executing exploit code.',
      link: 'https://www.metasploit.com/',
      image: 'assets/metasploit.png'
    },
    {
      name: "Burp Suite",
      description: 'Burp Suite is a graphical tool for testing Web application security.',
      link: 'https://portswigger.net/burp',
      image: 'assets/burpsuite.png'
    },
    {
      name: "Ubuntu",
      description: 'Ubuntu is a popular free and open-source Linux-based operating system, is used for a wide range of purposes, including powering desktops, servers, cloud platforms.',
      link: 'https://www.kernel.org/',
      image: 'assets/ubuntu.png'
    },
    {
      name: "Java",
      description: 'Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.',
      link: 'https://www.oracle.com/java/',
      image: 'assets/java.png'
    },
    {
      name: "C++",
      description: 'C++ is a high-performance programming language used for system/software development, game engines, and performance-critical applications.',
      link: 'https://isocpp.org/',
      image: 'assets/cpp.png'
    },
    {
      name: "Python",
      description: 'Python is a high-level programming language known for its readability, versatility, and extensive library ecosystem for AI and data science.',
      link: 'https://www.python.org/',
      image: 'assets/python.png'
    },
    {
      name: "Laravel",
      description: 'Laravel is a PHP framework designed for building web applications. It follows the MVC pattern and offers robust tools for modern web development.',
      link: 'https://laravel.com/',
      image: 'assets/laravel.png'
    },
    {
      name: "Angular",
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      link: 'https://angular.io',
      image: 'assets/angular.png'
    },
    {
      name: "Tailwind CSS",
      description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
      link: 'https://tailwindcss.com/',
      image: 'assets/tailwind.png'
    },
    {
      name: "Bootstrap",
      description: 'Bootstrap is a popular open-source CSS framework for developing responsive and mobile-first websites.',
      link: 'https://getbootstrap.com/',
      image: 'assets/bootstrap.png'
    },
    {
      name: "HTML5",
      description: 'HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: 'assets/html5.png'
    },
    {
      name: "CSS3",
      description: 'CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: 'assets/css3.png'
    },
    {
      name: "JavaScript",
      description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: 'assets/javascript.webp'
    },
    {
      name: "MySQL",
      description: 'MySQL is an open-source relational database management system based on SQL (Structured Query Language).',
      link: 'https://www.mysql.com/',
      image: 'assets/mysql.svg'
    },
    {
      name: "GitHub",
      description: 'GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.',
      link: 'https://github.com/',
      image: 'assets/github.svg'
    },
    {
      name: "Figma",
      description: 'Figma is a powerful, collaborative design tool for teams. Explore ideas and gather feedback, build realistic prototypes.',
      link: 'https://www.figma.com',
      image: 'assets/figma.png'
    },
    {
      name: "AWS",
      description: 'Amazon Web Services (AWS) offers a comprehensive suite of cloud services for computing, storage, and networking.',
      link: 'https://aws.amazon.com/',
      image: 'assets/aws.png'
    },
    {
      name: "Visual Studio Code",
      description: 'Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/',
      image: 'assets/vscode.png'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/typescript.png'
    },
    {
      name: "Docker",
      description: 'Docker is a software platform that facilitates building, testing, and deploying applications efficiently by packaging them into standardized units called containers.',
      link: 'https://www.docker.com',
      image: 'assets/docker.svg'
    },
  ];
}