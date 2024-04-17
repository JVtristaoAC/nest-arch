import { randomUUID } from 'node:crypto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ default: randomUUID() })
    id: string;

  @Prop()
    name: string;

  @Prop()
    email: string;

  @Prop()
    password: string;

  @Prop()
    createdAt: Date;

  @Prop()
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
