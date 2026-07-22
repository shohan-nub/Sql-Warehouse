import { InferInsertModel, InferSelectModel } from "drizzle-orm"

import { products, purchases } from "./db/schema"

export type product=InferSelectModel<typeof products>;
export type newProduct=InferInsertModel<typeof products>

export type newPurchase=InferInsertModel<typeof purchases>