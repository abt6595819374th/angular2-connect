import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private items;
  
  constructor(private meta: MetaService,
              private http: Http) { }

  ngOnInit() {
    this.meta.setTitle("HOME");
    this.meta.updateTag('property="og:title"', { property: 'og:title', content: 'Home page' });

    this.http.get('http://localhost:4200/api/test').subscribe((data: Response) => {
      this.meta.setTitle(data.json().results[0].name);
      this.items = data.json().results;
    });
  }

}
