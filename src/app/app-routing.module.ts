import { RecipeBookPageComponent } from './dashboard/pages/recipe-book/recipe-book-page.component';
import { PlannerPageComponent } from './dashboard/pages/planner/planner-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantryPageComponent } from './dashboard/pages/pantry/pantry-page.component';

const routes: Routes = [
  { path: 'home', component: PlannerPageComponent },
  { path: 'planner', component: PlannerPageComponent },
  { path: 'recipe-book', component: RecipeBookPageComponent },
  { path: 'pantry', component: PantryPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
