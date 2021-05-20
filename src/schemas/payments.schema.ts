import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type PaymentDocument = Payment & Document;

@Schema()
export class PaymentMetadata {
  @Prop()
  disciplineId: string;

  @Prop()
  discipline: string;

  @Prop()
  tournamentId: string;

  @Prop()
  tournament: string;

  @Prop()
  tournamentRegionCode: string;

  @Prop()
  eventId: string;

  @Prop()
  event: string;

  @Prop()
  eventDate: string;

  @Prop()
  marketId: string;

  @Prop()
  market: string;

  @Prop()
  outcomeId: string;

  @Prop()
  outcome: string;

  @Prop()
  coefficient: number;

  @Prop()
  stage: number;
}

@Schema({
  toJSON: {
    transform: function (doc, ret) {
      ret.userId = ret._id;
    },
  },
})
export class Payment {
  @Prop()
  token: string;

  @Prop({ default: 0 })
  transactionId: string;

  @Prop()
  currency: string;

  @Prop({ default: 0 })
  amount: number;

  @Prop()
  userId: string;

  @Prop()
  info: string;

  @Prop()
  type: number;

  @Prop({ type: PaymentMetadata })
  metadata: PaymentMetadata;

  @Prop()
  coefficient: number;

  @Prop()
  ip: string;

  @Prop()
  subPartnerId: string;

  @Prop()
  requestId: string;

  @Prop()
  bonusId: number;

  @Prop()
  bonusTemplateId: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
