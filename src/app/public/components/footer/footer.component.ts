import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  assets = [
    {src: "assets/images/linkedin-icon.png", href: "https://www.linkedin.com/in/karen-rodrigues1/", alt: "ícone linkedin"},
    {src: "assets/images/email-icon.png", href: "mailto:karenrodrigues.dev@gmail.com", alt: "ícone email"},
    {src: "assets/images/github-icon.png", href: "https://github.com/karenrodriguesx", alt: "ícone github"}
  ]
}
