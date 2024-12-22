import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  market: string;

  @Prop({ default: 'user' })
  role: string;

  @Prop({ default: 'default' })
  image: string;
}

export const UserSchema = SchemaFactory.createForClass(User);