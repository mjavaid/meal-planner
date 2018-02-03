import { RouterModule } from '@angular/router';
import { RecipeBookPageComponent } from './pages/recipe-book/recipe-book-page.component';
import { PlannerPageComponent } from './pages/planner/planner-page.component';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PantryPageComponent } from './pages/pantry/pantry-page.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,

    PlannerPageComponent,
    RecipeBookPageComponent,
    PantryPageComponent
  ],
  exports: [
    DashboardComponent,

    PlannerPageComponent,
    RecipeBookPageComponent,
    PantryPageComponent
  ]
})
export class DashboardModule {}
