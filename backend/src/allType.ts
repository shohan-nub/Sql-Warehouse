import { InferInsertModel, InferSelectModel } from "drizzle-orm"

import { products } from "./db/schema"

export type product=InferSelectModel<typeof products>;
export type newProduct=InferInsertModel<typeof products>