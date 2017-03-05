import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];
