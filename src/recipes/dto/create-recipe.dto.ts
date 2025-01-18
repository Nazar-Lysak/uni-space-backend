export class CreateRecipeDto {
    title: string;
    imageUrl: string;
    shortDescription: string;
    difficulty: number;
    ingredients: string[];
    instructions: string;
    createdBy: string;
}