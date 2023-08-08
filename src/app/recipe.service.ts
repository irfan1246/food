import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Profile } from './profile';

export interface Meal {
  meal: any;
}

export interface Recipes {
  meals: any;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  categoryURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  allCategoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  areaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

  favourites = [];

  constructor(
    private http : HttpClient
  ) { }

  fetchCategories(category: string) {
    return this.http.get(this.categoryURL + category);
  }

  fetchRecipes(meal: any) {
    return this.http.get(this.recipeURL + meal);
  }

  fetchProfile() {
    return this.http.get<{[key: string]: Profile}>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .pipe(map((res) => {
      const profile = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)) {
          profile.push(res[key])
        }
      }
      return profile  ;
    }))

  }

  fetchAllCategories() {
    return this.http.get(this.allCategoriesURL);
  }

}
