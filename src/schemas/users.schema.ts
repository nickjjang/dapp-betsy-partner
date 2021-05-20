import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema()
export class UserCustomField {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  birthday: string;

  @Prop()
  phone: string;

  @Prop()
  isCashOutAllowed: boolean;

  @Prop()
  operatorUser: string;

  @Prop({
    default: false,
  })
  isVerified: boolean;

  @Prop()
  userCountry: string;

  @Prop({
    type: String,
    enum: ['positive', 'negative'],
    default: 'positive',
  })
  userStatus: string;

  @Prop()
  userSessionIP: string;

  @Prop()
  userSessionCountry: string;
}

@Schema({
  toJSON: {
    transform: function (doc, ret) {
      ret.userId = ret._id;
    },
  },
})
export class User {
  @Prop({ unique: true })
  token: string;

  @Prop({ default: 0 })
  balance: number;

  @Prop()
  currency: string;

  @Prop({ type: UserCustomField })
  customFields: UserCustomField;

  @Prop()
  isTest: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
