import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private router: Router) { }

  cidade = 'São Paulo';

  ngOnInit() {
  }

  goToFundacao(){
    this.router.navigate(['/fundacao']);
  }

  goToIndependencia(){
    this.router.navigate(['/independencia']);
  }

  goToVisita(){
    this.router.navigate(['/visita']);
  }

}
