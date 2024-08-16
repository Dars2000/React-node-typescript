import mongoose, { Document, Schema } from 'mongoose';

interface IItem extends Document {
  name: string;
  description: string;
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Item = mongoose.model<IItem>('Item', ItemSchema);

export default Item;
