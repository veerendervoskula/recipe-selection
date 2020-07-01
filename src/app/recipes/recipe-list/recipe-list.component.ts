import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('murgh curry','yummy chciken curry with spices','https://images.media-allrecipes.com/userphotos/4465974.jpg'),
    new Recipe('chicken biryani','delicious indian hyderabadi biryani','https://www.thedeliciouscrescent.com/wp-content/uploads/2016/06/Easy-Hyderabadi-Chicken-Biryani-4.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
