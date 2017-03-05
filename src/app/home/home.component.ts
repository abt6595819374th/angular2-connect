import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setTitle("HOME");
    this.meta.updateTag('property="og:title"', { property: 'og:title', content: 'Home page' });
  }

}
