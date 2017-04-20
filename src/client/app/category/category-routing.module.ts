import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'category', component: CategoryComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule {  }
