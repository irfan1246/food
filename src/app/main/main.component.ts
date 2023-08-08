import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  dataList: any;
  random = {};
  ingredients = [];
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {
    const randomFromCache = JSON.parse(localStorage.getItem('random'));
    const ingredientsFromCache = JSON.parse(localStorage.getItem('ingredients'));
    if (randomFromCache !== null || randomFromCache !== {}) {
      this.random = randomFromCache;
      this.ingredients = ingredientsFromCache;
    }
   }

  ngOnInit() {
    // this.fetchData();
    this.fetchPro();
  }

  private fetchPro() {
    this.recipeService.fetchProfile().subscribe((data => {
      this.dataList = data;
      console.log('444444444444',this.dataList)
    }))
  }

  listIngredients() {
    this.ingredients = [];
    for (let i = 1; i < 21; i++) {
      let ingredient;
      if (this.dataList[`strMeasure${i}`] !== null
        && this.dataList[`strMeasure${i}`] !== undefined
        && this.dataList[`strIngredient${i}`] !== undefined
        && this.dataList[`strIngredient${i}`] !== null) {
        ingredient = `${this.dataList[`strMeasure${i}`]} ${this.dataList[`strIngredient${i}`]}`;
        this.ingredients = [...this.ingredients, ingredient];
      }
    }
  }

  removeWhitespace(str: string) {
    return str.replace(/\s+/g, '-');
  }
}
