import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productsTable = sqliteTable("products", {
  id: int().primaryKey({ autoIncrement: true }),
  brand_id: int().references(() => brandsTable.id),
  name: text().notNull(),
  imgURL: text(),
  maxContent: int().notNull(),
});

export const brandsTable = sqliteTable("brands", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export const locationsTable = sqliteTable("locations", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export const productLogTable = sqliteTable("product_log", {
  id: int().primaryKey({ autoIncrement: true }),
  product_id: int().references(() => productsTable.id),
  location_id: int().references(() => locationsTable.id),
  expirationDate: text(),
  currentContent: int().notNull(),
});
