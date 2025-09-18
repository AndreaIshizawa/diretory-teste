import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretory-teste';

  constructor(private router: Router) {}

  subpasta() {
    this.router.navigate(['subpasta'])
  }

  voltar() {
    this.router.navigate(['/'])
  }
}
