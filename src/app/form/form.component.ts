import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private items;

  constructor(private meta: MetaService,
              private http: Http,) {
  }

  ngOnInit() {
    this.meta.setTitle("FORM");
    this.meta.updateTag('property="og:title"', {property: 'og:title', content: 'Page with form'});

    this.items = [{name: "INITIAL SERVER"}];

    this.http.get('http://localhost:4200/api/test').subscribe((data: Response) => {
      this.meta.setTitle(data.json().results[0].name);
      this.items = data.json().results;
    })
  }

}
