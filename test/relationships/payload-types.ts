/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    posts: Post;
    postsLocalized: PostsLocalized;
    relation: Relation;
    'strict-access': StrictAccess;
    chained: Chained;
    'custom-id': CustomId;
    'custom-id-number': CustomIdNumber;
    screenings: Screening;
    movies: Movie;
    directors: Director;
    movieReviews: MovieReview;
    'polymorphic-relationships': PolymorphicRelationship;
    tree: Tree;
    pages: Page;
    'rels-to-pages': RelsToPage;
    'rels-to-pages-and-custom-text-ids': RelsToPagesAndCustomTextId;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    posts: PostsSelect<false> | PostsSelect<true>;
    postsLocalized: PostsLocalizedSelect<false> | PostsLocalizedSelect<true>;
    relation: RelationSelect<false> | RelationSelect<true>;
    'strict-access': StrictAccessSelect<false> | StrictAccessSelect<true>;
    chained: ChainedSelect<false> | ChainedSelect<true>;
    'custom-id': CustomIdSelect<false> | CustomIdSelect<true>;
    'custom-id-number': CustomIdNumberSelect<false> | CustomIdNumberSelect<true>;
    screenings: ScreeningsSelect<false> | ScreeningsSelect<true>;
    movies: MoviesSelect<false> | MoviesSelect<true>;
    directors: DirectorsSelect<false> | DirectorsSelect<true>;
    movieReviews: MovieReviewsSelect<false> | MovieReviewsSelect<true>;
    'polymorphic-relationships': PolymorphicRelationshipsSelect<false> | PolymorphicRelationshipsSelect<true>;
    tree: TreeSelect<false> | TreeSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'rels-to-pages': RelsToPagesSelect<false> | RelsToPagesSelect<true>;
    'rels-to-pages-and-custom-text-ids': RelsToPagesAndCustomTextIdsSelect<false> | RelsToPagesAndCustomTextIdsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: 'en' | 'de';
  user: User & {
    collection: 'users';
  };
  jobs?: {
    tasks: unknown;
    workflows?: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title?: string | null;
  description?: string | null;
  number?: number | null;
  relationField?: (string | null) | Relation;
  blocks?:
    | {
        relationField?: (string | null) | Relation;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  defaultAccessRelation?: (string | null) | StrictAccess;
  chainedRelation?: (string | null) | Chained;
  maxDepthRelation?: (string | null) | Relation;
  customIdRelation?: (string | null) | CustomId;
  customIdNumberRelation?: (number | null) | CustomIdNumber;
  filteredRelation?: (string | null) | Relation;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relation".
 */
export interface Relation {
  id: string;
  name?: string | null;
  disableRelation: boolean;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "strict-access".
 */
export interface StrictAccess {
  id: string;
  name?: string | null;
  disableRelation: boolean;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "chained".
 */
export interface Chained {
  id: string;
  name?: string | null;
  relation?: (string | null) | Chained;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-id".
 */
export interface CustomId {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-id-number".
 */
export interface CustomIdNumber {
  id: number;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "postsLocalized".
 */
export interface PostsLocalized {
  id: string;
  title?: string | null;
  relationField?: (string | null) | Relation;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "screenings".
 */
export interface Screening {
  id: string;
  name?: string | null;
  movie?: (string | null) | Movie;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "movies".
 */
export interface Movie {
  id: string;
  name?: string | null;
  director?: (string | null) | Director;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "directors".
 */
export interface Director {
  id: string;
  name?: string | null;
  movies?: (string | Movie)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "movieReviews".
 */
export interface MovieReview {
  id: string;
  movieReviewer: string | User;
  likes?: (string | User)[] | null;
  visibility: 'followers' | 'public';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "polymorphic-relationships".
 */
export interface PolymorphicRelationship {
  id: string;
  polymorphic?: {
    relationTo: 'movies';
    value: string | Movie;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tree".
 */
export interface Tree {
  id: string;
  text?: string | null;
  parent?: (string | null) | Tree;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  menu?:
    | {
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rels-to-pages".
 */
export interface RelsToPage {
  id: string;
  page?: (string | null) | Page;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rels-to-pages-and-custom-text-ids".
 */
export interface RelsToPagesAndCustomTextId {
  id: string;
  rel?:
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'custom-id';
        value: string | CustomId;
      } | null)
    | ({
        relationTo: 'custom-id-number';
        value: number | CustomIdNumber;
      } | null);
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'postsLocalized';
        value: string | PostsLocalized;
      } | null)
    | ({
        relationTo: 'relation';
        value: string | Relation;
      } | null)
    | ({
        relationTo: 'strict-access';
        value: string | StrictAccess;
      } | null)
    | ({
        relationTo: 'chained';
        value: string | Chained;
      } | null)
    | ({
        relationTo: 'custom-id';
        value: string | CustomId;
      } | null)
    | ({
        relationTo: 'custom-id-number';
        value: number | CustomIdNumber;
      } | null)
    | ({
        relationTo: 'screenings';
        value: string | Screening;
      } | null)
    | ({
        relationTo: 'movies';
        value: string | Movie;
      } | null)
    | ({
        relationTo: 'directors';
        value: string | Director;
      } | null)
    | ({
        relationTo: 'movieReviews';
        value: string | MovieReview;
      } | null)
    | ({
        relationTo: 'polymorphic-relationships';
        value: string | PolymorphicRelationship;
      } | null)
    | ({
        relationTo: 'tree';
        value: string | Tree;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'rels-to-pages';
        value: string | RelsToPage;
      } | null)
    | ({
        relationTo: 'rels-to-pages-and-custom-text-ids';
        value: string | RelsToPagesAndCustomTextId;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  number?: T;
  relationField?: T;
  blocks?:
    | T
    | {
        block?:
          | T
          | {
              relationField?: T;
              id?: T;
              blockName?: T;
            };
      };
  defaultAccessRelation?: T;
  chainedRelation?: T;
  maxDepthRelation?: T;
  customIdRelation?: T;
  customIdNumberRelation?: T;
  filteredRelation?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "postsLocalized_select".
 */
export interface PostsLocalizedSelect<T extends boolean = true> {
  title?: T;
  relationField?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relation_select".
 */
export interface RelationSelect<T extends boolean = true> {
  name?: T;
  disableRelation?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "strict-access_select".
 */
export interface StrictAccessSelect<T extends boolean = true> {
  name?: T;
  disableRelation?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "chained_select".
 */
export interface ChainedSelect<T extends boolean = true> {
  name?: T;
  relation?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-id_select".
 */
export interface CustomIdSelect<T extends boolean = true> {
  id?: T;
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-id-number_select".
 */
export interface CustomIdNumberSelect<T extends boolean = true> {
  id?: T;
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "screenings_select".
 */
export interface ScreeningsSelect<T extends boolean = true> {
  name?: T;
  movie?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "movies_select".
 */
export interface MoviesSelect<T extends boolean = true> {
  name?: T;
  director?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "directors_select".
 */
export interface DirectorsSelect<T extends boolean = true> {
  name?: T;
  movies?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "movieReviews_select".
 */
export interface MovieReviewsSelect<T extends boolean = true> {
  movieReviewer?: T;
  likes?: T;
  visibility?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "polymorphic-relationships_select".
 */
export interface PolymorphicRelationshipsSelect<T extends boolean = true> {
  polymorphic?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tree_select".
 */
export interface TreeSelect<T extends boolean = true> {
  text?: T;
  parent?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  menu?:
    | T
    | {
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rels-to-pages_select".
 */
export interface RelsToPagesSelect<T extends boolean = true> {
  page?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rels-to-pages-and-custom-text-ids_select".
 */
export interface RelsToPagesAndCustomTextIdsSelect<T extends boolean = true> {
  rel?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}