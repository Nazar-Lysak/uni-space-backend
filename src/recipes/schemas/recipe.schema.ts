import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Recipe extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  imageUrl: string;
 
  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true, type: Number })
  difficulty: number;

  @Prop({ required: true, type: [String] })
  ingredients: string[];

  @Prop({ required: true })
  instructions: string; 

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  createdBy: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);