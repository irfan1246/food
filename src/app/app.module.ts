import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    component: RecipeComponent,
    path:'recipe'
  },
  // {
  //   path: 'category/:category.strCategory',
  //   component: CategoryListingComponent
  // },
  {
    path: 'category/:category.strCategory/:dish.strMeal/:dish.idMeal',
    component: RecipeComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
