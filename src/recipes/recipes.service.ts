import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './schemas/recipe.schema';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel({
      ...createRecipeDto,
      createdAt: new Date(),
    });
    return createdRecipe.save();
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async findOne(id: string): Promise<Recipe> {
    const recipe = await this.recipeModel.findById(id).exec();
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return recipe;
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const updatedRecipe = await this.recipeModel.findByIdAndUpdate(id, updateRecipeDto, {
      new: true,
    }).exec();
    if (!updatedRecipe) {
      throw new NotFoundException('Recipe not found');
    }
    return updatedRecipe;
  }

  async remove(id: string): Promise<Recipe> {
    const deletedRecipe = await this.recipeModel.findByIdAndDelete(id).exec();
    if (!deletedRecipe) {
      throw new NotFoundException('Recipe not found');
    }
    return deletedRecipe;
  }
}