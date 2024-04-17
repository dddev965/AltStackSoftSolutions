import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"",component:HomeComponent},
    {path:"view",component:ViewComponent},
    {path:"edit/:id",component:EditComponent},
];
