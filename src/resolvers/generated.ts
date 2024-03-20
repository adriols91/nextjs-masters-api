import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import type { MercuriusContext } from "mercurius";
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import("mercurius-codegen").DeepPartial<TResult>>
  | import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  JSON: string;
  _FieldSet: unknown;
};

export enum Sort {
  ASC = "ASC",
  DESC = "DESC",
}

export type Mutation = {
  cartCreate: CartCreatePayload;
  itemCreate: ItemCreatePayload;
  itemUpdate: ItemUpdatePayload;
  itemDelete: ItemDeletePayload;
  orderCreate: OrderCreatePayload;
  orderUpdate: OrderUpdatePayload;
  reviewCreate: ReviewCreatePayload;
};

export type MutationcartCreateArgs = {
  input?: InputMaybe<CartCreateInput>;
};

export type MutationitemCreateArgs = {
  input: ItemCreateInput;
};

export type MutationitemUpdateArgs = {
  input: ItemUpdateInput;
};

export type MutationitemDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationorderCreateArgs = {
  input: OrderCreateInput;
};

export type MutationorderUpdateArgs = {
  input: OrderUpdateInput;
};

export type MutationreviewCreateArgs = {
  input: ReviewCreateInput;
};

export type Query = {
  cart?: Maybe<Cart>;
  item?: Maybe<Item>;
  order?: Maybe<Order>;
  orders: OrderConnection;
  categories: CategoryConnection;
  category?: Maybe<Category>;
  collections: CollectionConnection;
  collection?: Maybe<Collection>;
  products: ProductConnection;
  product?: Maybe<Product>;
};

export type QuerycartArgs = {
  id: Scalars["ID"];
};

export type QueryitemArgs = {
  cartId: Scalars["ID"];
  productId: Scalars["ID"];
};

export type QueryorderArgs = {
  id: Scalars["ID"];
};

export type QueryordersArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QuerycategoriesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QuerycategoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type QuerycollectionsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QuerycollectionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type QueryproductsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  filter?: InputMaybe<ProductFilterInput>;
  orderBy?: InputMaybe<Array<ProductsOrderByInput>>;
};

export type QueryproductArgs = {
  id: Scalars["ID"];
};

export type Cart = {
  id: Scalars["ID"];
  email?: Maybe<Scalars["String"]>;
  items: Array<Item>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CartCreateInput = {
  email?: InputMaybe<Scalars["String"]>;
};

export type CartCreatePayload = {
  cart?: Maybe<Cart>;
};

export type Item = {
  id: Scalars["ID"];
  product: Product;
  quantity: Scalars["Int"];
};

export type ItemCreateInput = {
  cartId: Scalars["ID"];
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
};

export type ItemUpdateInput = {
  id: Scalars["ID"];
  quantity: Scalars["Int"];
};

export type ItemCreatePayload = {
  item: Item;
};

export type ItemUpdatePayload = {
  item: Item;
};

export type ItemDeletePayload = {
  id: Scalars["ID"];
  success: Scalars["Boolean"];
};

export type Category = {
  id: Scalars["ID"];
  name: Scalars["String"];
  slug: Scalars["String"];
  description: Scalars["String"];
  image?: Maybe<Image>;
  products: Array<Product>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CategoryConnection = {
  items: Array<Category>;
  totalCount: Scalars["Int"];
};

export type Collection = {
  id: Scalars["ID"];
  name: Scalars["String"];
  slug: Scalars["String"];
  description: Scalars["String"];
  image?: Maybe<Image>;
  products: Array<Product>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CollectionConnection = {
  items: Array<Collection>;
  totalCount: Scalars["Int"];
};

export enum OrderStatus {
  CANCELLED = "CANCELLED",
  CREATED = "CREATED",
  FULFILLED = "FULFILLED",
  PAID = "PAID",
}

export type Order = {
  id: Scalars["ID"];
  lines: Scalars["JSON"];
  totalAmount: Scalars["Int"];
  status: OrderStatus;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type OrderConnection = {
  items: Array<Order>;
  totalCount: Scalars["Int"];
};

export type OrderCreateInput = {
  lines: Scalars["JSON"];
  totalAmount: Scalars["Int"];
};

export type OrderUpdateInput = {
  id: Scalars["ID"];
  status: OrderStatus;
};

export type OrderCreatePayload = {
  order?: Maybe<Order>;
};

export type OrderUpdatePayload = {
  order?: Maybe<Order>;
};

export type Color = {
  id: Scalars["ID"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type Image = {
  id: Scalars["ID"];
  url: Scalars["String"];
  alt?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type Product = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Int"];
  popularity: Scalars["Int"];
  rating?: Maybe<Scalars["Float"]>;
  colors: Array<Color>;
  sizes: Array<Size>;
  categories: Array<Category>;
  collections: Array<Collection>;
  images: Array<Image>;
  reviews: Array<Review>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type ProductimagesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type ProductreviewsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ReviewOrderByInput>>;
};

export type ProductConnection = {
  items: Array<Product>;
  totalCount: Scalars["Int"];
};

export type ProductFilterInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  collectionId?: InputMaybe<Scalars["String"]>;
  nameContains?: InputMaybe<Scalars["String"]>;
  relatedTo?: InputMaybe<Scalars["String"]>;
};

export type ProductsOrderByInput = {
  popularity?: InputMaybe<Sort>;
  price?: InputMaybe<Sort>;
  rating?: InputMaybe<Sort>;
};

export type Review = {
  id: Scalars["ID"];
  author: Scalars["String"];
  email: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
  rating: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type ReviewCreateInput = {
  productId: Scalars["ID"];
  author: Scalars["String"];
  email: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
  rating: Scalars["Float"];
};

export type ReviewOrderByInput = {
  createdAt?: InputMaybe<Sort>;
};

export type ReviewCreatePayload = {
  review?: Maybe<Review>;
};

export type Size = {
  id: Scalars["ID"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Sort: Sort;
  Mutation: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  JSON: ResolverTypeWrapper<Scalars["JSON"]>;
  Cart: ResolverTypeWrapper<Cart>;
  CartCreateInput: CartCreateInput;
  CartCreatePayload: ResolverTypeWrapper<CartCreatePayload>;
  Item: ResolverTypeWrapper<Item>;
  ItemCreateInput: ItemCreateInput;
  ItemUpdateInput: ItemUpdateInput;
  ItemCreatePayload: ResolverTypeWrapper<ItemCreatePayload>;
  ItemUpdatePayload: ResolverTypeWrapper<ItemUpdatePayload>;
  ItemDeletePayload: ResolverTypeWrapper<ItemDeletePayload>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Category: ResolverTypeWrapper<Category>;
  CategoryConnection: ResolverTypeWrapper<CategoryConnection>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  OrderStatus: OrderStatus;
  Order: ResolverTypeWrapper<Order>;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  OrderCreateInput: OrderCreateInput;
  OrderUpdateInput: OrderUpdateInput;
  OrderCreatePayload: ResolverTypeWrapper<OrderCreatePayload>;
  OrderUpdatePayload: ResolverTypeWrapper<OrderUpdatePayload>;
  Color: ResolverTypeWrapper<Color>;
  Image: ResolverTypeWrapper<Image>;
  Product: ResolverTypeWrapper<Product>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductFilterInput: ProductFilterInput;
  ProductsOrderByInput: ProductsOrderByInput;
  Review: ResolverTypeWrapper<Review>;
  ReviewCreateInput: ReviewCreateInput;
  ReviewOrderByInput: ReviewOrderByInput;
  ReviewCreatePayload: ResolverTypeWrapper<ReviewCreatePayload>;
  Size: ResolverTypeWrapper<Size>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  ID: Scalars["ID"];
  Query: {};
  Int: Scalars["Int"];
  String: Scalars["String"];
  DateTime: Scalars["DateTime"];
  JSON: Scalars["JSON"];
  Cart: Cart;
  CartCreateInput: CartCreateInput;
  CartCreatePayload: CartCreatePayload;
  Item: Item;
  ItemCreateInput: ItemCreateInput;
  ItemUpdateInput: ItemUpdateInput;
  ItemCreatePayload: ItemCreatePayload;
  ItemUpdatePayload: ItemUpdatePayload;
  ItemDeletePayload: ItemDeletePayload;
  Boolean: Scalars["Boolean"];
  Category: Category;
  CategoryConnection: CategoryConnection;
  Collection: Collection;
  CollectionConnection: CollectionConnection;
  Order: Order;
  OrderConnection: OrderConnection;
  OrderCreateInput: OrderCreateInput;
  OrderUpdateInput: OrderUpdateInput;
  OrderCreatePayload: OrderCreatePayload;
  OrderUpdatePayload: OrderUpdatePayload;
  Color: Color;
  Image: Image;
  Product: Product;
  Float: Scalars["Float"];
  ProductConnection: ProductConnection;
  ProductFilterInput: ProductFilterInput;
  ProductsOrderByInput: ProductsOrderByInput;
  Review: Review;
  ReviewCreateInput: ReviewCreateInput;
  ReviewOrderByInput: ReviewOrderByInput;
  ReviewCreatePayload: ReviewCreatePayload;
  Size: Size;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  cartCreate?: Resolver<
    ResolversTypes["CartCreatePayload"],
    ParentType,
    ContextType,
    Partial<MutationcartCreateArgs>
  >;
  itemCreate?: Resolver<
    ResolversTypes["ItemCreatePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationitemCreateArgs, "input">
  >;
  itemUpdate?: Resolver<
    ResolversTypes["ItemUpdatePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationitemUpdateArgs, "input">
  >;
  itemDelete?: Resolver<
    ResolversTypes["ItemDeletePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationitemDeleteArgs, "id">
  >;
  orderCreate?: Resolver<
    ResolversTypes["OrderCreatePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationorderCreateArgs, "input">
  >;
  orderUpdate?: Resolver<
    ResolversTypes["OrderUpdatePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationorderUpdateArgs, "input">
  >;
  reviewCreate?: Resolver<
    ResolversTypes["ReviewCreatePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationreviewCreateArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  cart?: Resolver<
    Maybe<ResolversTypes["Cart"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycartArgs, "id">
  >;
  item?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<QueryitemArgs, "cartId" | "productId">
  >;
  order?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryorderArgs, "id">
  >;
  orders?: Resolver<
    ResolversTypes["OrderConnection"],
    ParentType,
    ContextType,
    Partial<QueryordersArgs>
  >;
  categories?: Resolver<
    ResolversTypes["CategoryConnection"],
    ParentType,
    ContextType,
    Partial<QuerycategoriesArgs>
  >;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    Partial<QuerycategoryArgs>
  >;
  collections?: Resolver<
    ResolversTypes["CollectionConnection"],
    ParentType,
    ContextType,
    Partial<QuerycollectionsArgs>
  >;
  collection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    Partial<QuerycollectionArgs>
  >;
  products?: Resolver<
    ResolversTypes["ProductConnection"],
    ParentType,
    ContextType,
    Partial<QueryproductsArgs>
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, "id">
  >;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export interface JSONScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export type CartResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Cart"] = ResolversParentTypes["Cart"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartCreatePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["CartCreatePayload"] = ResolversParentTypes["CartCreatePayload"],
> = {
  cart?: Resolver<Maybe<ResolversTypes["Cart"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Item"] = ResolversParentTypes["Item"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemCreatePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["ItemCreatePayload"] = ResolversParentTypes["ItemCreatePayload"],
> = {
  item?: Resolver<ResolversTypes["Item"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUpdatePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["ItemUpdatePayload"] = ResolversParentTypes["ItemUpdatePayload"],
> = {
  item?: Resolver<ResolversTypes["Item"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemDeletePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["ItemDeletePayload"] = ResolversParentTypes["ItemDeletePayload"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["Image"]>, ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryConnectionResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["CategoryConnection"] = ResolversParentTypes["CategoryConnection"],
> = {
  items?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["Image"]>, ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["CollectionConnection"] = ResolversParentTypes["CollectionConnection"],
> = {
  items?: Resolver<
    Array<ResolversTypes["Collection"]>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lines?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["OrderStatus"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderConnectionResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["OrderConnection"] = ResolversParentTypes["OrderConnection"],
> = {
  items?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCreatePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["OrderCreatePayload"] = ResolversParentTypes["OrderCreatePayload"],
> = {
  order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderUpdatePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["OrderUpdatePayload"] = ResolversParentTypes["OrderUpdatePayload"],
> = {
  order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Color"] = ResolversParentTypes["Color"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Image"] = ResolversParentTypes["Image"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  colors?: Resolver<Array<ResolversTypes["Color"]>, ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes["Size"]>, ParentType, ContextType>;
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  collections?: Resolver<
    Array<ResolversTypes["Collection"]>,
    ParentType,
    ContextType
  >;
  images?: Resolver<
    Array<ResolversTypes["Image"]>,
    ParentType,
    ContextType,
    Partial<ProductimagesArgs>
  >;
  reviews?: Resolver<
    Array<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    Partial<ProductreviewsArgs>
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["ProductConnection"] = ResolversParentTypes["ProductConnection"],
> = {
  items?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  author?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewCreatePayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["ReviewCreatePayload"] = ResolversParentTypes["ReviewCreatePayload"],
> = {
  review?: Resolver<Maybe<ResolversTypes["Review"]>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SizeResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Size"] = ResolversParentTypes["Size"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Cart?: CartResolvers<ContextType>;
  CartCreatePayload?: CartCreatePayloadResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemCreatePayload?: ItemCreatePayloadResolvers<ContextType>;
  ItemUpdatePayload?: ItemUpdatePayloadResolvers<ContextType>;
  ItemDeletePayload?: ItemDeletePayloadResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryConnection?: CategoryConnectionResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  OrderCreatePayload?: OrderCreatePayloadResolvers<ContextType>;
  OrderUpdatePayload?: OrderUpdatePayloadResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewCreatePayload?: ReviewCreatePayloadResolvers<ContextType>;
  Size?: SizeResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import("fastify").FastifyReply;
  },
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import("mercurius").MercuriusContext & {
    reply: import("fastify").FastifyReply;
  },
> {
  Cart?: {
    id?: LoaderResolver<Scalars["ID"], Cart, {}, TContext>;
    email?: LoaderResolver<Maybe<Scalars["String"]>, Cart, {}, TContext>;
    items?: LoaderResolver<Array<Item>, Cart, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Cart, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Cart, {}, TContext>;
  };

  CartCreatePayload?: {
    cart?: LoaderResolver<Maybe<Cart>, CartCreatePayload, {}, TContext>;
  };

  Item?: {
    id?: LoaderResolver<Scalars["ID"], Item, {}, TContext>;
    product?: LoaderResolver<Product, Item, {}, TContext>;
    quantity?: LoaderResolver<Scalars["Int"], Item, {}, TContext>;
  };

  ItemCreatePayload?: {
    item?: LoaderResolver<Item, ItemCreatePayload, {}, TContext>;
  };

  ItemUpdatePayload?: {
    item?: LoaderResolver<Item, ItemUpdatePayload, {}, TContext>;
  };

  ItemDeletePayload?: {
    id?: LoaderResolver<Scalars["ID"], ItemDeletePayload, {}, TContext>;
    success?: LoaderResolver<
      Scalars["Boolean"],
      ItemDeletePayload,
      {},
      TContext
    >;
  };

  Category?: {
    id?: LoaderResolver<Scalars["ID"], Category, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Category, {}, TContext>;
    slug?: LoaderResolver<Scalars["String"], Category, {}, TContext>;
    description?: LoaderResolver<Scalars["String"], Category, {}, TContext>;
    image?: LoaderResolver<Maybe<Image>, Category, {}, TContext>;
    products?: LoaderResolver<Array<Product>, Category, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Category, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Category, {}, TContext>;
  };

  CategoryConnection?: {
    items?: LoaderResolver<Array<Category>, CategoryConnection, {}, TContext>;
    totalCount?: LoaderResolver<
      Scalars["Int"],
      CategoryConnection,
      {},
      TContext
    >;
  };

  Collection?: {
    id?: LoaderResolver<Scalars["ID"], Collection, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Collection, {}, TContext>;
    slug?: LoaderResolver<Scalars["String"], Collection, {}, TContext>;
    description?: LoaderResolver<Scalars["String"], Collection, {}, TContext>;
    image?: LoaderResolver<Maybe<Image>, Collection, {}, TContext>;
    products?: LoaderResolver<Array<Product>, Collection, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Collection, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Collection, {}, TContext>;
  };

  CollectionConnection?: {
    items?: LoaderResolver<
      Array<Collection>,
      CollectionConnection,
      {},
      TContext
    >;
    totalCount?: LoaderResolver<
      Scalars["Int"],
      CollectionConnection,
      {},
      TContext
    >;
  };

  Order?: {
    id?: LoaderResolver<Scalars["ID"], Order, {}, TContext>;
    lines?: LoaderResolver<Scalars["JSON"], Order, {}, TContext>;
    totalAmount?: LoaderResolver<Scalars["Int"], Order, {}, TContext>;
    status?: LoaderResolver<OrderStatus, Order, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Order, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Order, {}, TContext>;
  };

  OrderConnection?: {
    items?: LoaderResolver<Array<Order>, OrderConnection, {}, TContext>;
    totalCount?: LoaderResolver<Scalars["Int"], OrderConnection, {}, TContext>;
  };

  OrderCreatePayload?: {
    order?: LoaderResolver<Maybe<Order>, OrderCreatePayload, {}, TContext>;
  };

  OrderUpdatePayload?: {
    order?: LoaderResolver<Maybe<Order>, OrderUpdatePayload, {}, TContext>;
  };

  Color?: {
    id?: LoaderResolver<Scalars["ID"], Color, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Color, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Color, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Color, {}, TContext>;
  };

  Image?: {
    id?: LoaderResolver<Scalars["ID"], Image, {}, TContext>;
    url?: LoaderResolver<Scalars["String"], Image, {}, TContext>;
    alt?: LoaderResolver<Maybe<Scalars["String"]>, Image, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Image, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Image, {}, TContext>;
  };

  Product?: {
    id?: LoaderResolver<Scalars["ID"], Product, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Product, {}, TContext>;
    description?: LoaderResolver<Scalars["String"], Product, {}, TContext>;
    price?: LoaderResolver<Scalars["Int"], Product, {}, TContext>;
    popularity?: LoaderResolver<Scalars["Int"], Product, {}, TContext>;
    rating?: LoaderResolver<Maybe<Scalars["Float"]>, Product, {}, TContext>;
    colors?: LoaderResolver<Array<Color>, Product, {}, TContext>;
    sizes?: LoaderResolver<Array<Size>, Product, {}, TContext>;
    categories?: LoaderResolver<Array<Category>, Product, {}, TContext>;
    collections?: LoaderResolver<Array<Collection>, Product, {}, TContext>;
    images?: LoaderResolver<Array<Image>, Product, ProductimagesArgs, TContext>;
    reviews?: LoaderResolver<
      Array<Review>,
      Product,
      ProductreviewsArgs,
      TContext
    >;
    createdAt?: LoaderResolver<Scalars["DateTime"], Product, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Product, {}, TContext>;
  };

  ProductConnection?: {
    items?: LoaderResolver<Array<Product>, ProductConnection, {}, TContext>;
    totalCount?: LoaderResolver<
      Scalars["Int"],
      ProductConnection,
      {},
      TContext
    >;
  };

  Review?: {
    id?: LoaderResolver<Scalars["ID"], Review, {}, TContext>;
    author?: LoaderResolver<Scalars["String"], Review, {}, TContext>;
    email?: LoaderResolver<Scalars["String"], Review, {}, TContext>;
    title?: LoaderResolver<Scalars["String"], Review, {}, TContext>;
    description?: LoaderResolver<Scalars["String"], Review, {}, TContext>;
    rating?: LoaderResolver<Scalars["Float"], Review, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Review, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Review, {}, TContext>;
  };

  ReviewCreatePayload?: {
    review?: LoaderResolver<Maybe<Review>, ReviewCreatePayload, {}, TContext>;
  };

  Size?: {
    id?: LoaderResolver<Scalars["ID"], Size, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Size, {}, TContext>;
    createdAt?: LoaderResolver<Scalars["DateTime"], Size, {}, TContext>;
    updatedAt?: LoaderResolver<Scalars["DateTime"], Size, {}, TContext>;
  };
}
export type getCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type getCategoriesQuery = {
  categories: {
    totalCount: number;
    items: Array<{
      id: string;
      name: string;
      slug: string;
      createdAt: Date;
      updatedAt: Date;
    }>;
  };
};

export type getCollectionsQueryVariables = Exact<{ [key: string]: never }>;

export type getCollectionsQuery = {
  collections: {
    totalCount: number;
    items: Array<{
      id: string;
      name: string;
      slug: string;
      createdAt: Date;
      updatedAt: Date;
    }>;
  };
};

export type getProductsQueryVariables = Exact<{ [key: string]: never }>;

export type getProductsQuery = {
  products: {
    totalCount: number;
    items: Array<{
      id: string;
      name: string;
      price: number;
      rating?: number | null;
      description: string;
      createdAt: Date;
      updatedAt: Date;
      colors: Array<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      }>;
      sizes: Array<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      }>;
      categories: Array<{
        id: string;
        name: string;
        slug: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
      }>;
      collections: Array<{
        id: string;
        name: string;
        slug: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
      }>;
      images: Array<{
        id: string;
        url: string;
        alt?: string | null;
        createdAt: Date;
        updatedAt: Date;
      }>;
      reviews: Array<{
        id: string;
        author: string;
        email: string;
        title: string;
        description: string;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
      }>;
    }>;
  };
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(
    private value: string,
    public __meta__?: { hash: string },
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const getCategoriesDocument = new TypedDocumentString(`
    query getCategories {
  categories(limit: 10, offset: 0) {
    items {
      id
      name
      slug
      createdAt
      updatedAt
    }
    totalCount
  }
}
    `) as unknown as TypedDocumentString<
  getCategoriesQuery,
  getCategoriesQueryVariables
>;
export const getCollectionsDocument = new TypedDocumentString(`
    query getCollections {
  collections(limit: 10, offset: 0) {
    items {
      id
      name
      slug
      createdAt
      updatedAt
    }
    totalCount
  }
}
    `) as unknown as TypedDocumentString<
  getCollectionsQuery,
  getCollectionsQueryVariables
>;
export const getProductsDocument = new TypedDocumentString(`
    query getProducts {
  products(limit: 10, offset: 0) {
    items {
      id
      name
      price
      rating
      description
      colors {
        id
        name
        createdAt
        updatedAt
      }
      sizes {
        id
        name
        createdAt
        updatedAt
      }
      categories {
        id
        name
        slug
        description
        createdAt
        updatedAt
      }
      collections {
        id
        name
        slug
        description
        createdAt
        updatedAt
      }
      images(limit: 1) {
        id
        url
        alt
        createdAt
        updatedAt
      }
      reviews(limit: 1) {
        id
        author
        email
        title
        description
        rating
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    totalCount
  }
}
    `) as unknown as TypedDocumentString<
  getProductsQuery,
  getProductsQueryVariables
>;
declare module "mercurius" {
  interface IResolvers
    extends Resolvers<import("mercurius").MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
