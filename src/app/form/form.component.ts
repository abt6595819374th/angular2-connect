import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { Http, Response } from '@angular/http';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private model = {
    houseNumber: null,
    postalCode: null
  };

  constructor(private meta: MetaService,
              private http: Http) {}

  ngOnInit() {
    this.meta.setTitle("FORM");
    this.meta.updateTag('property="og:title"', {property: 'og:title', content: 'Page with form'});
  }

  validateAddress() {
    if (this.model.houseNumber && this.model.postalCode) {
      const request = {
        houseNumber: this.model.houseNumber,
        postalCode: this.model.postalCode
      }
      this.http.post('http://localhost:4200/api/validateAddress', request).subscribe(
        (data: Response) => {
          console.log('data.json().results', data.json().results);
        },
        (err) => {
          console.log('err', err);
        });
    }

  }
}
