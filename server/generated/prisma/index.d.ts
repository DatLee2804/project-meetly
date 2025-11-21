
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskAssignment
 * 
 */
export type TaskAssignment = $Result.DefaultSelection<Prisma.$TaskAssignmentPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model TaskStatus
 * Bảng tham chiếu cho Trạng thái Nhiệm vụ
 */
export type TaskStatus = $Result.DefaultSelection<Prisma.$TaskStatusPayload>
/**
 * Model TaskPriority
 * Bảng tham chiếu cho Độ ưu tiên Nhiệm vụ
 */
export type TaskPriority = $Result.DefaultSelection<Prisma.$TaskPriorityPayload>
/**
 * Model TeamMember
 * Bảng trung gian cho Thành viên Team (N-N giữa User và Team)
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Meeting
 * Bảng Meeting (Cuộc họp)
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model MeetingNote
 * Bảng MeetingNote (Ghi chú Cuộc họp)
 */
export type MeetingNote = $Result.DefaultSelection<Prisma.$MeetingNotePayload>
/**
 * Model MeetingSummary
 * Bảng MeetingSummary (Tóm tắt Cuộc họp)
 */
export type MeetingSummary = $Result.DefaultSelection<Prisma.$MeetingSummaryPayload>
/**
 * Model MeetingParticipant
 * Bảng trung gian cho Người tham gia Cuộc họp (N-N giữa User và Meeting)
 */
export type MeetingParticipant = $Result.DefaultSelection<Prisma.$MeetingParticipantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskAssignment`: Exposes CRUD operations for the **TaskAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskAssignments
    * const taskAssignments = await prisma.taskAssignment.findMany()
    * ```
    */
  get taskAssignment(): Prisma.TaskAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskStatus`: Exposes CRUD operations for the **TaskStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskStatuses
    * const taskStatuses = await prisma.taskStatus.findMany()
    * ```
    */
  get taskStatus(): Prisma.TaskStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskPriority`: Exposes CRUD operations for the **TaskPriority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskPriorities
    * const taskPriorities = await prisma.taskPriority.findMany()
    * ```
    */
  get taskPriority(): Prisma.TaskPriorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingNote`: Exposes CRUD operations for the **MeetingNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingNotes
    * const meetingNotes = await prisma.meetingNote.findMany()
    * ```
    */
  get meetingNote(): Prisma.MeetingNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingSummary`: Exposes CRUD operations for the **MeetingSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingSummaries
    * const meetingSummaries = await prisma.meetingSummary.findMany()
    * ```
    */
  get meetingSummary(): Prisma.MeetingSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingParticipant`: Exposes CRUD operations for the **MeetingParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingParticipants
    * const meetingParticipants = await prisma.meetingParticipant.findMany()
    * ```
    */
  get meetingParticipant(): Prisma.MeetingParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    Project: 'Project',
    Task: 'Task',
    TaskAssignment: 'TaskAssignment',
    Attachment: 'Attachment',
    Comment: 'Comment',
    TaskStatus: 'TaskStatus',
    TaskPriority: 'TaskPriority',
    TeamMember: 'TeamMember',
    Meeting: 'Meeting',
    MeetingNote: 'MeetingNote',
    MeetingSummary: 'MeetingSummary',
    MeetingParticipant: 'MeetingParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "team" | "project" | "task" | "taskAssignment" | "attachment" | "comment" | "taskStatus" | "taskPriority" | "teamMember" | "meeting" | "meetingNote" | "meetingSummary" | "meetingParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskAssignment: {
        payload: Prisma.$TaskAssignmentPayload<ExtArgs>
        fields: Prisma.TaskAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TaskAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          findMany: {
            args: Prisma.TaskAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          create: {
            args: Prisma.TaskAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          createMany: {
            args: Prisma.TaskAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TaskAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          update: {
            args: Prisma.TaskAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TaskAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.TaskAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TaskAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskAssignment>
          }
          groupBy: {
            args: Prisma.TaskAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TaskAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      TaskStatus: {
        payload: Prisma.$TaskStatusPayload<ExtArgs>
        fields: Prisma.TaskStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>
          }
          findFirst: {
            args: Prisma.TaskStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>
          }
          findMany: {
            args: Prisma.TaskStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>[]
          }
          create: {
            args: Prisma.TaskStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>
          }
          createMany: {
            args: Prisma.TaskStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>[]
          }
          delete: {
            args: Prisma.TaskStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>
          }
          update: {
            args: Prisma.TaskStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>
          }
          deleteMany: {
            args: Prisma.TaskStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>[]
          }
          upsert: {
            args: Prisma.TaskStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatusPayload>
          }
          aggregate: {
            args: Prisma.TaskStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskStatus>
          }
          groupBy: {
            args: Prisma.TaskStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskStatusCountArgs<ExtArgs>
            result: $Utils.Optional<TaskStatusCountAggregateOutputType> | number
          }
        }
      }
      TaskPriority: {
        payload: Prisma.$TaskPriorityPayload<ExtArgs>
        fields: Prisma.TaskPriorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskPriorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskPriorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          findFirst: {
            args: Prisma.TaskPriorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskPriorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          findMany: {
            args: Prisma.TaskPriorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>[]
          }
          create: {
            args: Prisma.TaskPriorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          createMany: {
            args: Prisma.TaskPriorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskPriorityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>[]
          }
          delete: {
            args: Prisma.TaskPriorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          update: {
            args: Prisma.TaskPriorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          deleteMany: {
            args: Prisma.TaskPriorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskPriorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskPriorityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>[]
          }
          upsert: {
            args: Prisma.TaskPriorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          aggregate: {
            args: Prisma.TaskPriorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskPriority>
          }
          groupBy: {
            args: Prisma.TaskPriorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskPriorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskPriorityCountArgs<ExtArgs>
            result: $Utils.Optional<TaskPriorityCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      MeetingNote: {
        payload: Prisma.$MeetingNotePayload<ExtArgs>
        fields: Prisma.MeetingNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>
          }
          findFirst: {
            args: Prisma.MeetingNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>
          }
          findMany: {
            args: Prisma.MeetingNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>[]
          }
          create: {
            args: Prisma.MeetingNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>
          }
          createMany: {
            args: Prisma.MeetingNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>[]
          }
          delete: {
            args: Prisma.MeetingNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>
          }
          update: {
            args: Prisma.MeetingNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>
          }
          deleteMany: {
            args: Prisma.MeetingNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>[]
          }
          upsert: {
            args: Prisma.MeetingNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingNotePayload>
          }
          aggregate: {
            args: Prisma.MeetingNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingNote>
          }
          groupBy: {
            args: Prisma.MeetingNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingNoteCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingNoteCountAggregateOutputType> | number
          }
        }
      }
      MeetingSummary: {
        payload: Prisma.$MeetingSummaryPayload<ExtArgs>
        fields: Prisma.MeetingSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>
          }
          findFirst: {
            args: Prisma.MeetingSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>
          }
          findMany: {
            args: Prisma.MeetingSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>[]
          }
          create: {
            args: Prisma.MeetingSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>
          }
          createMany: {
            args: Prisma.MeetingSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>[]
          }
          delete: {
            args: Prisma.MeetingSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>
          }
          update: {
            args: Prisma.MeetingSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>
          }
          deleteMany: {
            args: Prisma.MeetingSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>[]
          }
          upsert: {
            args: Prisma.MeetingSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingSummaryPayload>
          }
          aggregate: {
            args: Prisma.MeetingSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingSummary>
          }
          groupBy: {
            args: Prisma.MeetingSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingSummaryCountAggregateOutputType> | number
          }
        }
      }
      MeetingParticipant: {
        payload: Prisma.$MeetingParticipantPayload<ExtArgs>
        fields: Prisma.MeetingParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          findFirst: {
            args: Prisma.MeetingParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          findMany: {
            args: Prisma.MeetingParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          create: {
            args: Prisma.MeetingParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          createMany: {
            args: Prisma.MeetingParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          delete: {
            args: Prisma.MeetingParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          update: {
            args: Prisma.MeetingParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          deleteMany: {
            args: Prisma.MeetingParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          upsert: {
            args: Prisma.MeetingParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          aggregate: {
            args: Prisma.MeetingParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingParticipant>
          }
          groupBy: {
            args: Prisma.MeetingParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    project?: ProjectOmit
    task?: TaskOmit
    taskAssignment?: TaskAssignmentOmit
    attachment?: AttachmentOmit
    comment?: CommentOmit
    taskStatus?: TaskStatusOmit
    taskPriority?: TaskPriorityOmit
    teamMember?: TeamMemberOmit
    meeting?: MeetingOmit
    meetingNote?: MeetingNoteOmit
    meetingSummary?: MeetingSummaryOmit
    meetingParticipant?: MeetingParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teamMemberships: number
    taskAssignments: number
    uploadedFiles: number
    comments: number
    createdMeetings: number
    authoredNotes: number
    createdSummaries: number
    attendedMeetings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMemberships?: boolean | UserCountOutputTypeCountTeamMembershipsArgs
    taskAssignments?: boolean | UserCountOutputTypeCountTaskAssignmentsArgs
    uploadedFiles?: boolean | UserCountOutputTypeCountUploadedFilesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    createdMeetings?: boolean | UserCountOutputTypeCountCreatedMeetingsArgs
    authoredNotes?: boolean | UserCountOutputTypeCountAuthoredNotesArgs
    createdSummaries?: boolean | UserCountOutputTypeCountCreatedSummariesArgs
    attendedMeetings?: boolean | UserCountOutputTypeCountAttendedMeetingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthoredNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingSummaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendedMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    meetings: number
    members: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | TeamCountOutputTypeCountMeetingsArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    meetings: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | ProjectCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    assignments: number
    attachments: number
    comments: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | TaskCountOutputTypeCountAssignmentsArgs
    attachments?: boolean | TaskCountOutputTypeCountAttachmentsArgs
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type TaskStatusCountOutputType
   */

  export type TaskStatusCountOutputType = {
    tasks: number
  }

  export type TaskStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskStatusCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskStatusCountOutputType without action
   */
  export type TaskStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatusCountOutputType
     */
    select?: TaskStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskStatusCountOutputType without action
   */
  export type TaskStatusCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskPriorityCountOutputType
   */

  export type TaskPriorityCountOutputType = {
    tasks: number
  }

  export type TaskPriorityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskPriorityCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskPriorityCountOutputType without action
   */
  export type TaskPriorityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriorityCountOutputType
     */
    select?: TaskPriorityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskPriorityCountOutputType without action
   */
  export type TaskPriorityCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    notes: number
    summaries: number
    participants: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | MeetingCountOutputTypeCountNotesArgs
    summaries?: boolean | MeetingCountOutputTypeCountSummariesArgs
    participants?: boolean | MeetingCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingNoteWhereInput
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingSummaryWhereInput
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
    teamId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
    teamId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    cognitoId: string | null
    username: string | null
    profilePictureUrl: string | null
    teamId: number | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    cognitoId: string | null
    username: string | null
    profilePictureUrl: string | null
    teamId: number | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    cognitoId: number
    username: number
    profilePictureUrl: number
    teamId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
    teamId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
    teamId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    cognitoId?: true
    username?: true
    profilePictureUrl?: true
    teamId?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    cognitoId?: true
    username?: true
    profilePictureUrl?: true
    teamId?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    cognitoId?: true
    username?: true
    profilePictureUrl?: true
    teamId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    cognitoId: string
    username: string
    profilePictureUrl: string | null
    teamId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cognitoId?: boolean
    username?: boolean
    profilePictureUrl?: boolean
    teamId?: boolean
    teamMemberships?: boolean | User$teamMembershipsArgs<ExtArgs>
    taskAssignments?: boolean | User$taskAssignmentsArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    createdMeetings?: boolean | User$createdMeetingsArgs<ExtArgs>
    authoredNotes?: boolean | User$authoredNotesArgs<ExtArgs>
    createdSummaries?: boolean | User$createdSummariesArgs<ExtArgs>
    attendedMeetings?: boolean | User$attendedMeetingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cognitoId?: boolean
    username?: boolean
    profilePictureUrl?: boolean
    teamId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cognitoId?: boolean
    username?: boolean
    profilePictureUrl?: boolean
    teamId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    cognitoId?: boolean
    username?: boolean
    profilePictureUrl?: boolean
    teamId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "cognitoId" | "username" | "profilePictureUrl" | "teamId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMemberships?: boolean | User$teamMembershipsArgs<ExtArgs>
    taskAssignments?: boolean | User$taskAssignmentsArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    createdMeetings?: boolean | User$createdMeetingsArgs<ExtArgs>
    authoredNotes?: boolean | User$authoredNotesArgs<ExtArgs>
    createdSummaries?: boolean | User$createdSummariesArgs<ExtArgs>
    attendedMeetings?: boolean | User$attendedMeetingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teamMemberships: Prisma.$TeamMemberPayload<ExtArgs>[]
      taskAssignments: Prisma.$TaskAssignmentPayload<ExtArgs>[]
      uploadedFiles: Prisma.$AttachmentPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      createdMeetings: Prisma.$MeetingPayload<ExtArgs>[]
      authoredNotes: Prisma.$MeetingNotePayload<ExtArgs>[]
      createdSummaries: Prisma.$MeetingSummaryPayload<ExtArgs>[]
      attendedMeetings: Prisma.$MeetingParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      cognitoId: string
      username: string
      profilePictureUrl: string | null
      teamId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamMemberships<T extends User$teamMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskAssignments<T extends User$taskAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$taskAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadedFiles<T extends User$uploadedFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdMeetings<T extends User$createdMeetingsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMeetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredNotes<T extends User$authoredNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$authoredNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSummaries<T extends User$createdSummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendedMeetings<T extends User$attendedMeetingsArgs<ExtArgs> = {}>(args?: Subset<T, User$attendedMeetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly cognitoId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teamMemberships
   */
  export type User$teamMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.taskAssignments
   */
  export type User$taskAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    cursor?: TaskAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * User.uploadedFiles
   */
  export type User$uploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.createdMeetings
   */
  export type User$createdMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * User.authoredNotes
   */
  export type User$authoredNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    where?: MeetingNoteWhereInput
    orderBy?: MeetingNoteOrderByWithRelationInput | MeetingNoteOrderByWithRelationInput[]
    cursor?: MeetingNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingNoteScalarFieldEnum | MeetingNoteScalarFieldEnum[]
  }

  /**
   * User.createdSummaries
   */
  export type User$createdSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    where?: MeetingSummaryWhereInput
    orderBy?: MeetingSummaryOrderByWithRelationInput | MeetingSummaryOrderByWithRelationInput[]
    cursor?: MeetingSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingSummaryScalarFieldEnum | MeetingSummaryScalarFieldEnum[]
  }

  /**
   * User.attendedMeetings
   */
  export type User$attendedMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    cursor?: MeetingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    productOwnerUserId: number | null
    projectManagerUserId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    productOwnerUserId: number | null
    projectManagerUserId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    teamName: string | null
    productOwnerUserId: number | null
    projectManagerUserId: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    teamName: string | null
    productOwnerUserId: number | null
    projectManagerUserId: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    teamName: number
    productOwnerUserId: number
    projectManagerUserId: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    productOwnerUserId?: true
    projectManagerUserId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    productOwnerUserId?: true
    projectManagerUserId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    teamName?: true
    productOwnerUserId?: true
    projectManagerUserId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    teamName?: true
    productOwnerUserId?: true
    projectManagerUserId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    teamName?: true
    productOwnerUserId?: true
    projectManagerUserId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    teamName: string
    productOwnerUserId: number | null
    projectManagerUserId: number | null
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    productOwnerUserId?: boolean
    projectManagerUserId?: boolean
    meetings?: boolean | Team$meetingsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    productOwnerUserId?: boolean
    projectManagerUserId?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    productOwnerUserId?: boolean
    projectManagerUserId?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    teamName?: boolean
    productOwnerUserId?: boolean
    projectManagerUserId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "productOwnerUserId" | "projectManagerUserId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Team$meetingsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamName: string
      productOwnerUserId: number | null
      projectManagerUserId: number | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Team$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Team$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly teamName: FieldRef<"Team", 'String'>
    readonly productOwnerUserId: FieldRef<"Team", 'Int'>
    readonly projectManagerUserId: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.meetings
   */
  export type Team$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    startDate: Date | null
    endDate: Date | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    meetings?: boolean | Project$meetingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Project$meetingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      startDate: Date | null
      endDate: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Project$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.meetings
   */
  export type Project$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    statusId: number | null
    priorityId: number | null
    points: number | null
    projectId: number | null
    authorUserId: number | null
    assignedUserId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    statusId: number | null
    priorityId: number | null
    points: number | null
    projectId: number | null
    authorUserId: number | null
    assignedUserId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    statusId: number | null
    priorityId: number | null
    tags: string | null
    startDate: Date | null
    dueDate: Date | null
    points: number | null
    projectId: number | null
    authorUserId: number | null
    assignedUserId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    statusId: number | null
    priorityId: number | null
    tags: string | null
    startDate: Date | null
    dueDate: Date | null
    points: number | null
    projectId: number | null
    authorUserId: number | null
    assignedUserId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    statusId: number
    priorityId: number
    tags: number
    startDate: number
    dueDate: number
    points: number
    projectId: number
    authorUserId: number
    assignedUserId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    statusId?: true
    priorityId?: true
    points?: true
    projectId?: true
    authorUserId?: true
    assignedUserId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    statusId?: true
    priorityId?: true
    points?: true
    projectId?: true
    authorUserId?: true
    assignedUserId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    statusId?: true
    priorityId?: true
    tags?: true
    startDate?: true
    dueDate?: true
    points?: true
    projectId?: true
    authorUserId?: true
    assignedUserId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    statusId?: true
    priorityId?: true
    tags?: true
    startDate?: true
    dueDate?: true
    points?: true
    projectId?: true
    authorUserId?: true
    assignedUserId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    statusId?: true
    priorityId?: true
    tags?: true
    startDate?: true
    dueDate?: true
    points?: true
    projectId?: true
    authorUserId?: true
    assignedUserId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    statusId: number | null
    priorityId: number | null
    tags: string | null
    startDate: Date | null
    dueDate: Date | null
    points: number | null
    projectId: number
    authorUserId: number
    assignedUserId: number | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    statusId?: boolean
    priorityId?: boolean
    tags?: boolean
    startDate?: boolean
    dueDate?: boolean
    points?: boolean
    projectId?: boolean
    authorUserId?: boolean
    assignedUserId?: boolean
    statusRelation?: boolean | Task$statusRelationArgs<ExtArgs>
    priorityRelation?: boolean | Task$priorityRelationArgs<ExtArgs>
    assignments?: boolean | Task$assignmentsArgs<ExtArgs>
    attachments?: boolean | Task$attachmentsArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    statusId?: boolean
    priorityId?: boolean
    tags?: boolean
    startDate?: boolean
    dueDate?: boolean
    points?: boolean
    projectId?: boolean
    authorUserId?: boolean
    assignedUserId?: boolean
    statusRelation?: boolean | Task$statusRelationArgs<ExtArgs>
    priorityRelation?: boolean | Task$priorityRelationArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    statusId?: boolean
    priorityId?: boolean
    tags?: boolean
    startDate?: boolean
    dueDate?: boolean
    points?: boolean
    projectId?: boolean
    authorUserId?: boolean
    assignedUserId?: boolean
    statusRelation?: boolean | Task$statusRelationArgs<ExtArgs>
    priorityRelation?: boolean | Task$priorityRelationArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    statusId?: boolean
    priorityId?: boolean
    tags?: boolean
    startDate?: boolean
    dueDate?: boolean
    points?: boolean
    projectId?: boolean
    authorUserId?: boolean
    assignedUserId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "statusId" | "priorityId" | "tags" | "startDate" | "dueDate" | "points" | "projectId" | "authorUserId" | "assignedUserId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusRelation?: boolean | Task$statusRelationArgs<ExtArgs>
    priorityRelation?: boolean | Task$priorityRelationArgs<ExtArgs>
    assignments?: boolean | Task$assignmentsArgs<ExtArgs>
    attachments?: boolean | Task$attachmentsArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusRelation?: boolean | Task$statusRelationArgs<ExtArgs>
    priorityRelation?: boolean | Task$priorityRelationArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusRelation?: boolean | Task$statusRelationArgs<ExtArgs>
    priorityRelation?: boolean | Task$priorityRelationArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      statusRelation: Prisma.$TaskStatusPayload<ExtArgs> | null
      priorityRelation: Prisma.$TaskPriorityPayload<ExtArgs> | null
      assignments: Prisma.$TaskAssignmentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      statusId: number | null
      priorityId: number | null
      tags: string | null
      startDate: Date | null
      dueDate: Date | null
      points: number | null
      projectId: number
      authorUserId: number
      assignedUserId: number | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statusRelation<T extends Task$statusRelationArgs<ExtArgs> = {}>(args?: Subset<T, Task$statusRelationArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    priorityRelation<T extends Task$priorityRelationArgs<ExtArgs> = {}>(args?: Subset<T, Task$priorityRelationArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Task$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Task$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Task$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly statusId: FieldRef<"Task", 'Int'>
    readonly priorityId: FieldRef<"Task", 'Int'>
    readonly tags: FieldRef<"Task", 'String'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly points: FieldRef<"Task", 'Int'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly authorUserId: FieldRef<"Task", 'Int'>
    readonly assignedUserId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.statusRelation
   */
  export type Task$statusRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    where?: TaskStatusWhereInput
  }

  /**
   * Task.priorityRelation
   */
  export type Task$priorityRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    where?: TaskPriorityWhereInput
  }

  /**
   * Task.assignments
   */
  export type Task$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    cursor?: TaskAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * Task.attachments
   */
  export type Task$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Task.comments
   */
  export type Task$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskAssignment
   */

  export type AggregateTaskAssignment = {
    _count: TaskAssignmentCountAggregateOutputType | null
    _avg: TaskAssignmentAvgAggregateOutputType | null
    _sum: TaskAssignmentSumAggregateOutputType | null
    _min: TaskAssignmentMinAggregateOutputType | null
    _max: TaskAssignmentMaxAggregateOutputType | null
  }

  export type TaskAssignmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type TaskAssignmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type TaskAssignmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type TaskAssignmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type TaskAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    _all: number
  }


  export type TaskAssignmentAvgAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type TaskAssignmentSumAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type TaskAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type TaskAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type TaskAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    _all?: true
  }

  export type TaskAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAssignment to aggregate.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskAssignments
    **/
    _count?: true | TaskAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskAssignmentMaxAggregateInputType
  }

  export type GetTaskAssignmentAggregateType<T extends TaskAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskAssignment[P]>
      : GetScalarType<T[P], AggregateTaskAssignment[P]>
  }




  export type TaskAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithAggregationInput | TaskAssignmentOrderByWithAggregationInput[]
    by: TaskAssignmentScalarFieldEnum[] | TaskAssignmentScalarFieldEnum
    having?: TaskAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskAssignmentCountAggregateInputType | true
    _avg?: TaskAssignmentAvgAggregateInputType
    _sum?: TaskAssignmentSumAggregateInputType
    _min?: TaskAssignmentMinAggregateInputType
    _max?: TaskAssignmentMaxAggregateInputType
  }

  export type TaskAssignmentGroupByOutputType = {
    id: number
    userId: number
    taskId: number
    _count: TaskAssignmentCountAggregateOutputType | null
    _avg: TaskAssignmentAvgAggregateOutputType | null
    _sum: TaskAssignmentSumAggregateOutputType | null
    _min: TaskAssignmentMinAggregateOutputType | null
    _max: TaskAssignmentMaxAggregateOutputType | null
  }

  type GetTaskAssignmentGroupByPayload<T extends TaskAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TaskAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
  }

  export type TaskAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "taskId", ExtArgs["result"]["taskAssignment"]>
  export type TaskAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskAssignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      taskId: number
    }, ExtArgs["result"]["taskAssignment"]>
    composites: {}
  }

  type TaskAssignmentGetPayload<S extends boolean | null | undefined | TaskAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TaskAssignmentPayload, S>

  type TaskAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskAssignmentCountAggregateInputType | true
    }

  export interface TaskAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskAssignment'], meta: { name: 'TaskAssignment' } }
    /**
     * Find zero or one TaskAssignment that matches the filter.
     * @param {TaskAssignmentFindUniqueArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskAssignmentFindUniqueArgs>(args: SelectSubset<T, TaskAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindFirstArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskAssignmentFindFirstArgs>(args?: SelectSubset<T, TaskAssignmentFindFirstArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindFirstOrThrowArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskAssignments
     * const taskAssignments = await prisma.taskAssignment.findMany()
     * 
     * // Get first 10 TaskAssignments
     * const taskAssignments = await prisma.taskAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskAssignmentWithIdOnly = await prisma.taskAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskAssignmentFindManyArgs>(args?: SelectSubset<T, TaskAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskAssignment.
     * @param {TaskAssignmentCreateArgs} args - Arguments to create a TaskAssignment.
     * @example
     * // Create one TaskAssignment
     * const TaskAssignment = await prisma.taskAssignment.create({
     *   data: {
     *     // ... data to create a TaskAssignment
     *   }
     * })
     * 
     */
    create<T extends TaskAssignmentCreateArgs>(args: SelectSubset<T, TaskAssignmentCreateArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskAssignments.
     * @param {TaskAssignmentCreateManyArgs} args - Arguments to create many TaskAssignments.
     * @example
     * // Create many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskAssignmentCreateManyArgs>(args?: SelectSubset<T, TaskAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskAssignments and returns the data saved in the database.
     * @param {TaskAssignmentCreateManyAndReturnArgs} args - Arguments to create many TaskAssignments.
     * @example
     * // Create many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskAssignments and only return the `id`
     * const taskAssignmentWithIdOnly = await prisma.taskAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskAssignment.
     * @param {TaskAssignmentDeleteArgs} args - Arguments to delete one TaskAssignment.
     * @example
     * // Delete one TaskAssignment
     * const TaskAssignment = await prisma.taskAssignment.delete({
     *   where: {
     *     // ... filter to delete one TaskAssignment
     *   }
     * })
     * 
     */
    delete<T extends TaskAssignmentDeleteArgs>(args: SelectSubset<T, TaskAssignmentDeleteArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskAssignment.
     * @param {TaskAssignmentUpdateArgs} args - Arguments to update one TaskAssignment.
     * @example
     * // Update one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskAssignmentUpdateArgs>(args: SelectSubset<T, TaskAssignmentUpdateArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskAssignments.
     * @param {TaskAssignmentDeleteManyArgs} args - Arguments to filter TaskAssignments to delete.
     * @example
     * // Delete a few TaskAssignments
     * const { count } = await prisma.taskAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskAssignmentDeleteManyArgs>(args?: SelectSubset<T, TaskAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskAssignmentUpdateManyArgs>(args: SelectSubset<T, TaskAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAssignments and returns the data updated in the database.
     * @param {TaskAssignmentUpdateManyAndReturnArgs} args - Arguments to update many TaskAssignments.
     * @example
     * // Update many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskAssignments and only return the `id`
     * const taskAssignmentWithIdOnly = await prisma.taskAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskAssignment.
     * @param {TaskAssignmentUpsertArgs} args - Arguments to update or create a TaskAssignment.
     * @example
     * // Update or create a TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.upsert({
     *   create: {
     *     // ... data to create a TaskAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TaskAssignmentUpsertArgs>(args: SelectSubset<T, TaskAssignmentUpsertArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentCountArgs} args - Arguments to filter TaskAssignments to count.
     * @example
     * // Count the number of TaskAssignments
     * const count = await prisma.taskAssignment.count({
     *   where: {
     *     // ... the filter for the TaskAssignments we want to count
     *   }
     * })
    **/
    count<T extends TaskAssignmentCountArgs>(
      args?: Subset<T, TaskAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAssignmentAggregateArgs>(args: Subset<T, TaskAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTaskAssignmentAggregateType<T>>

    /**
     * Group by TaskAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TaskAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskAssignment model
   */
  readonly fields: TaskAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskAssignment model
   */
  interface TaskAssignmentFieldRefs {
    readonly id: FieldRef<"TaskAssignment", 'Int'>
    readonly userId: FieldRef<"TaskAssignment", 'Int'>
    readonly taskId: FieldRef<"TaskAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskAssignment findUnique
   */
  export type TaskAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment findUniqueOrThrow
   */
  export type TaskAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment findFirst
   */
  export type TaskAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAssignments.
     */
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment findFirstOrThrow
   */
  export type TaskAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAssignments.
     */
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment findMany
   */
  export type TaskAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignments to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment create
   */
  export type TaskAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskAssignment.
     */
    data: XOR<TaskAssignmentCreateInput, TaskAssignmentUncheckedCreateInput>
  }

  /**
   * TaskAssignment createMany
   */
  export type TaskAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskAssignments.
     */
    data: TaskAssignmentCreateManyInput | TaskAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskAssignment createManyAndReturn
   */
  export type TaskAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many TaskAssignments.
     */
    data: TaskAssignmentCreateManyInput | TaskAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAssignment update
   */
  export type TaskAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskAssignment.
     */
    data: XOR<TaskAssignmentUpdateInput, TaskAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TaskAssignment to update.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment updateMany
   */
  export type TaskAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskAssignments.
     */
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAssignments to update
     */
    where?: TaskAssignmentWhereInput
    /**
     * Limit how many TaskAssignments to update.
     */
    limit?: number
  }

  /**
   * TaskAssignment updateManyAndReturn
   */
  export type TaskAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update TaskAssignments.
     */
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAssignments to update
     */
    where?: TaskAssignmentWhereInput
    /**
     * Limit how many TaskAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAssignment upsert
   */
  export type TaskAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskAssignment to update in case it exists.
     */
    where: TaskAssignmentWhereUniqueInput
    /**
     * In case the TaskAssignment found by the `where` argument doesn't exist, create a new TaskAssignment with this data.
     */
    create: XOR<TaskAssignmentCreateInput, TaskAssignmentUncheckedCreateInput>
    /**
     * In case the TaskAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskAssignmentUpdateInput, TaskAssignmentUncheckedUpdateInput>
  }

  /**
   * TaskAssignment delete
   */
  export type TaskAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TaskAssignment to delete.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment deleteMany
   */
  export type TaskAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAssignments to delete
     */
    where?: TaskAssignmentWhereInput
    /**
     * Limit how many TaskAssignments to delete.
     */
    limit?: number
  }

  /**
   * TaskAssignment without action
   */
  export type TaskAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAssignment
     */
    omit?: TaskAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    uploadedById: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    uploadedById: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: number | null
    fileURL: string | null
    fileName: string | null
    taskId: number | null
    uploadedById: number | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: number | null
    fileURL: string | null
    fileName: string | null
    taskId: number | null
    uploadedById: number | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    fileURL: number
    fileName: number
    taskId: number
    uploadedById: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    id?: true
    taskId?: true
    uploadedById?: true
  }

  export type AttachmentSumAggregateInputType = {
    id?: true
    taskId?: true
    uploadedById?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    fileURL?: true
    fileName?: true
    taskId?: true
    uploadedById?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    fileURL?: true
    fileName?: true
    taskId?: true
    uploadedById?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    fileURL?: true
    fileName?: true
    taskId?: true
    uploadedById?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: number
    fileURL: string
    fileName: string | null
    taskId: number
    uploadedById: number
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileURL?: boolean
    fileName?: boolean
    taskId?: boolean
    uploadedById?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileURL?: boolean
    fileName?: boolean
    taskId?: boolean
    uploadedById?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileURL?: boolean
    fileName?: boolean
    taskId?: boolean
    uploadedById?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    fileURL?: boolean
    fileName?: boolean
    taskId?: boolean
    uploadedById?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileURL" | "fileName" | "taskId" | "uploadedById", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileURL: string
      fileName: string | null
      taskId: number
      uploadedById: number
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'Int'>
    readonly fileURL: FieldRef<"Attachment", 'String'>
    readonly fileName: FieldRef<"Attachment", 'String'>
    readonly taskId: FieldRef<"Attachment", 'Int'>
    readonly uploadedById: FieldRef<"Attachment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    text: string | null
    taskId: number | null
    userId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    text: string | null
    taskId: number | null
    userId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    taskId: number
    userId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    taskId?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    taskId?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    taskId?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    text: string
    taskId: number
    userId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    taskId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    taskId?: boolean
    userId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "taskId" | "userId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      taskId: number
      userId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly taskId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model TaskStatus
   */

  export type AggregateTaskStatus = {
    _count: TaskStatusCountAggregateOutputType | null
    _avg: TaskStatusAvgAggregateOutputType | null
    _sum: TaskStatusSumAggregateOutputType | null
    _min: TaskStatusMinAggregateOutputType | null
    _max: TaskStatusMaxAggregateOutputType | null
  }

  export type TaskStatusAvgAggregateOutputType = {
    id: number | null
    orderIndex: number | null
  }

  export type TaskStatusSumAggregateOutputType = {
    id: number | null
    orderIndex: number | null
  }

  export type TaskStatusMinAggregateOutputType = {
    id: number | null
    name: string | null
    orderIndex: number | null
    description: string | null
  }

  export type TaskStatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    orderIndex: number | null
    description: string | null
  }

  export type TaskStatusCountAggregateOutputType = {
    id: number
    name: number
    orderIndex: number
    description: number
    _all: number
  }


  export type TaskStatusAvgAggregateInputType = {
    id?: true
    orderIndex?: true
  }

  export type TaskStatusSumAggregateInputType = {
    id?: true
    orderIndex?: true
  }

  export type TaskStatusMinAggregateInputType = {
    id?: true
    name?: true
    orderIndex?: true
    description?: true
  }

  export type TaskStatusMaxAggregateInputType = {
    id?: true
    name?: true
    orderIndex?: true
    description?: true
  }

  export type TaskStatusCountAggregateInputType = {
    id?: true
    name?: true
    orderIndex?: true
    description?: true
    _all?: true
  }

  export type TaskStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskStatus to aggregate.
     */
    where?: TaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStatuses to fetch.
     */
    orderBy?: TaskStatusOrderByWithRelationInput | TaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskStatuses
    **/
    _count?: true | TaskStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskStatusMaxAggregateInputType
  }

  export type GetTaskStatusAggregateType<T extends TaskStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskStatus[P]>
      : GetScalarType<T[P], AggregateTaskStatus[P]>
  }




  export type TaskStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskStatusWhereInput
    orderBy?: TaskStatusOrderByWithAggregationInput | TaskStatusOrderByWithAggregationInput[]
    by: TaskStatusScalarFieldEnum[] | TaskStatusScalarFieldEnum
    having?: TaskStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskStatusCountAggregateInputType | true
    _avg?: TaskStatusAvgAggregateInputType
    _sum?: TaskStatusSumAggregateInputType
    _min?: TaskStatusMinAggregateInputType
    _max?: TaskStatusMaxAggregateInputType
  }

  export type TaskStatusGroupByOutputType = {
    id: number
    name: string
    orderIndex: number
    description: string | null
    _count: TaskStatusCountAggregateOutputType | null
    _avg: TaskStatusAvgAggregateOutputType | null
    _sum: TaskStatusSumAggregateOutputType | null
    _min: TaskStatusMinAggregateOutputType | null
    _max: TaskStatusMaxAggregateOutputType | null
  }

  type GetTaskStatusGroupByPayload<T extends TaskStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskStatusGroupByOutputType[P]>
            : GetScalarType<T[P], TaskStatusGroupByOutputType[P]>
        }
      >
    >


  export type TaskStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderIndex?: boolean
    description?: boolean
    tasks?: boolean | TaskStatus$tasksArgs<ExtArgs>
    _count?: boolean | TaskStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskStatus"]>

  export type TaskStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderIndex?: boolean
    description?: boolean
  }, ExtArgs["result"]["taskStatus"]>

  export type TaskStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderIndex?: boolean
    description?: boolean
  }, ExtArgs["result"]["taskStatus"]>

  export type TaskStatusSelectScalar = {
    id?: boolean
    name?: boolean
    orderIndex?: boolean
    description?: boolean
  }

  export type TaskStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "orderIndex" | "description", ExtArgs["result"]["taskStatus"]>
  export type TaskStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskStatus$tasksArgs<ExtArgs>
    _count?: boolean | TaskStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskStatus"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      orderIndex: number
      description: string | null
    }, ExtArgs["result"]["taskStatus"]>
    composites: {}
  }

  type TaskStatusGetPayload<S extends boolean | null | undefined | TaskStatusDefaultArgs> = $Result.GetResult<Prisma.$TaskStatusPayload, S>

  type TaskStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskStatusCountAggregateInputType | true
    }

  export interface TaskStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskStatus'], meta: { name: 'TaskStatus' } }
    /**
     * Find zero or one TaskStatus that matches the filter.
     * @param {TaskStatusFindUniqueArgs} args - Arguments to find a TaskStatus
     * @example
     * // Get one TaskStatus
     * const taskStatus = await prisma.taskStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskStatusFindUniqueArgs>(args: SelectSubset<T, TaskStatusFindUniqueArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskStatusFindUniqueOrThrowArgs} args - Arguments to find a TaskStatus
     * @example
     * // Get one TaskStatus
     * const taskStatus = await prisma.taskStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusFindFirstArgs} args - Arguments to find a TaskStatus
     * @example
     * // Get one TaskStatus
     * const taskStatus = await prisma.taskStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskStatusFindFirstArgs>(args?: SelectSubset<T, TaskStatusFindFirstArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusFindFirstOrThrowArgs} args - Arguments to find a TaskStatus
     * @example
     * // Get one TaskStatus
     * const taskStatus = await prisma.taskStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskStatuses
     * const taskStatuses = await prisma.taskStatus.findMany()
     * 
     * // Get first 10 TaskStatuses
     * const taskStatuses = await prisma.taskStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskStatusWithIdOnly = await prisma.taskStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskStatusFindManyArgs>(args?: SelectSubset<T, TaskStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskStatus.
     * @param {TaskStatusCreateArgs} args - Arguments to create a TaskStatus.
     * @example
     * // Create one TaskStatus
     * const TaskStatus = await prisma.taskStatus.create({
     *   data: {
     *     // ... data to create a TaskStatus
     *   }
     * })
     * 
     */
    create<T extends TaskStatusCreateArgs>(args: SelectSubset<T, TaskStatusCreateArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskStatuses.
     * @param {TaskStatusCreateManyArgs} args - Arguments to create many TaskStatuses.
     * @example
     * // Create many TaskStatuses
     * const taskStatus = await prisma.taskStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskStatusCreateManyArgs>(args?: SelectSubset<T, TaskStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskStatuses and returns the data saved in the database.
     * @param {TaskStatusCreateManyAndReturnArgs} args - Arguments to create many TaskStatuses.
     * @example
     * // Create many TaskStatuses
     * const taskStatus = await prisma.taskStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskStatuses and only return the `id`
     * const taskStatusWithIdOnly = await prisma.taskStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskStatus.
     * @param {TaskStatusDeleteArgs} args - Arguments to delete one TaskStatus.
     * @example
     * // Delete one TaskStatus
     * const TaskStatus = await prisma.taskStatus.delete({
     *   where: {
     *     // ... filter to delete one TaskStatus
     *   }
     * })
     * 
     */
    delete<T extends TaskStatusDeleteArgs>(args: SelectSubset<T, TaskStatusDeleteArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskStatus.
     * @param {TaskStatusUpdateArgs} args - Arguments to update one TaskStatus.
     * @example
     * // Update one TaskStatus
     * const taskStatus = await prisma.taskStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskStatusUpdateArgs>(args: SelectSubset<T, TaskStatusUpdateArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskStatuses.
     * @param {TaskStatusDeleteManyArgs} args - Arguments to filter TaskStatuses to delete.
     * @example
     * // Delete a few TaskStatuses
     * const { count } = await prisma.taskStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskStatusDeleteManyArgs>(args?: SelectSubset<T, TaskStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskStatuses
     * const taskStatus = await prisma.taskStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskStatusUpdateManyArgs>(args: SelectSubset<T, TaskStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskStatuses and returns the data updated in the database.
     * @param {TaskStatusUpdateManyAndReturnArgs} args - Arguments to update many TaskStatuses.
     * @example
     * // Update many TaskStatuses
     * const taskStatus = await prisma.taskStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskStatuses and only return the `id`
     * const taskStatusWithIdOnly = await prisma.taskStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskStatus.
     * @param {TaskStatusUpsertArgs} args - Arguments to update or create a TaskStatus.
     * @example
     * // Update or create a TaskStatus
     * const taskStatus = await prisma.taskStatus.upsert({
     *   create: {
     *     // ... data to create a TaskStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskStatus we want to update
     *   }
     * })
     */
    upsert<T extends TaskStatusUpsertArgs>(args: SelectSubset<T, TaskStatusUpsertArgs<ExtArgs>>): Prisma__TaskStatusClient<$Result.GetResult<Prisma.$TaskStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusCountArgs} args - Arguments to filter TaskStatuses to count.
     * @example
     * // Count the number of TaskStatuses
     * const count = await prisma.taskStatus.count({
     *   where: {
     *     // ... the filter for the TaskStatuses we want to count
     *   }
     * })
    **/
    count<T extends TaskStatusCountArgs>(
      args?: Subset<T, TaskStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskStatusAggregateArgs>(args: Subset<T, TaskStatusAggregateArgs>): Prisma.PrismaPromise<GetTaskStatusAggregateType<T>>

    /**
     * Group by TaskStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskStatusGroupByArgs['orderBy'] }
        : { orderBy?: TaskStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskStatus model
   */
  readonly fields: TaskStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends TaskStatus$tasksArgs<ExtArgs> = {}>(args?: Subset<T, TaskStatus$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskStatus model
   */
  interface TaskStatusFieldRefs {
    readonly id: FieldRef<"TaskStatus", 'Int'>
    readonly name: FieldRef<"TaskStatus", 'String'>
    readonly orderIndex: FieldRef<"TaskStatus", 'Int'>
    readonly description: FieldRef<"TaskStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskStatus findUnique
   */
  export type TaskStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which TaskStatus to fetch.
     */
    where: TaskStatusWhereUniqueInput
  }

  /**
   * TaskStatus findUniqueOrThrow
   */
  export type TaskStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which TaskStatus to fetch.
     */
    where: TaskStatusWhereUniqueInput
  }

  /**
   * TaskStatus findFirst
   */
  export type TaskStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which TaskStatus to fetch.
     */
    where?: TaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStatuses to fetch.
     */
    orderBy?: TaskStatusOrderByWithRelationInput | TaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskStatuses.
     */
    cursor?: TaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskStatuses.
     */
    distinct?: TaskStatusScalarFieldEnum | TaskStatusScalarFieldEnum[]
  }

  /**
   * TaskStatus findFirstOrThrow
   */
  export type TaskStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which TaskStatus to fetch.
     */
    where?: TaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStatuses to fetch.
     */
    orderBy?: TaskStatusOrderByWithRelationInput | TaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskStatuses.
     */
    cursor?: TaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskStatuses.
     */
    distinct?: TaskStatusScalarFieldEnum | TaskStatusScalarFieldEnum[]
  }

  /**
   * TaskStatus findMany
   */
  export type TaskStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which TaskStatuses to fetch.
     */
    where?: TaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStatuses to fetch.
     */
    orderBy?: TaskStatusOrderByWithRelationInput | TaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskStatuses.
     */
    cursor?: TaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStatuses.
     */
    skip?: number
    distinct?: TaskStatusScalarFieldEnum | TaskStatusScalarFieldEnum[]
  }

  /**
   * TaskStatus create
   */
  export type TaskStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskStatus.
     */
    data: XOR<TaskStatusCreateInput, TaskStatusUncheckedCreateInput>
  }

  /**
   * TaskStatus createMany
   */
  export type TaskStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskStatuses.
     */
    data: TaskStatusCreateManyInput | TaskStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskStatus createManyAndReturn
   */
  export type TaskStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * The data used to create many TaskStatuses.
     */
    data: TaskStatusCreateManyInput | TaskStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskStatus update
   */
  export type TaskStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskStatus.
     */
    data: XOR<TaskStatusUpdateInput, TaskStatusUncheckedUpdateInput>
    /**
     * Choose, which TaskStatus to update.
     */
    where: TaskStatusWhereUniqueInput
  }

  /**
   * TaskStatus updateMany
   */
  export type TaskStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskStatuses.
     */
    data: XOR<TaskStatusUpdateManyMutationInput, TaskStatusUncheckedUpdateManyInput>
    /**
     * Filter which TaskStatuses to update
     */
    where?: TaskStatusWhereInput
    /**
     * Limit how many TaskStatuses to update.
     */
    limit?: number
  }

  /**
   * TaskStatus updateManyAndReturn
   */
  export type TaskStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * The data used to update TaskStatuses.
     */
    data: XOR<TaskStatusUpdateManyMutationInput, TaskStatusUncheckedUpdateManyInput>
    /**
     * Filter which TaskStatuses to update
     */
    where?: TaskStatusWhereInput
    /**
     * Limit how many TaskStatuses to update.
     */
    limit?: number
  }

  /**
   * TaskStatus upsert
   */
  export type TaskStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskStatus to update in case it exists.
     */
    where: TaskStatusWhereUniqueInput
    /**
     * In case the TaskStatus found by the `where` argument doesn't exist, create a new TaskStatus with this data.
     */
    create: XOR<TaskStatusCreateInput, TaskStatusUncheckedCreateInput>
    /**
     * In case the TaskStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskStatusUpdateInput, TaskStatusUncheckedUpdateInput>
  }

  /**
   * TaskStatus delete
   */
  export type TaskStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
    /**
     * Filter which TaskStatus to delete.
     */
    where: TaskStatusWhereUniqueInput
  }

  /**
   * TaskStatus deleteMany
   */
  export type TaskStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskStatuses to delete
     */
    where?: TaskStatusWhereInput
    /**
     * Limit how many TaskStatuses to delete.
     */
    limit?: number
  }

  /**
   * TaskStatus.tasks
   */
  export type TaskStatus$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * TaskStatus without action
   */
  export type TaskStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStatus
     */
    select?: TaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskStatus
     */
    omit?: TaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStatusInclude<ExtArgs> | null
  }


  /**
   * Model TaskPriority
   */

  export type AggregateTaskPriority = {
    _count: TaskPriorityCountAggregateOutputType | null
    _avg: TaskPriorityAvgAggregateOutputType | null
    _sum: TaskPrioritySumAggregateOutputType | null
    _min: TaskPriorityMinAggregateOutputType | null
    _max: TaskPriorityMaxAggregateOutputType | null
  }

  export type TaskPriorityAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskPrioritySumAggregateOutputType = {
    id: number | null
  }

  export type TaskPriorityMinAggregateOutputType = {
    id: number | null
    name: string | null
    colorCode: string | null
    description: string | null
  }

  export type TaskPriorityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    colorCode: string | null
    description: string | null
  }

  export type TaskPriorityCountAggregateOutputType = {
    id: number
    name: number
    colorCode: number
    description: number
    _all: number
  }


  export type TaskPriorityAvgAggregateInputType = {
    id?: true
  }

  export type TaskPrioritySumAggregateInputType = {
    id?: true
  }

  export type TaskPriorityMinAggregateInputType = {
    id?: true
    name?: true
    colorCode?: true
    description?: true
  }

  export type TaskPriorityMaxAggregateInputType = {
    id?: true
    name?: true
    colorCode?: true
    description?: true
  }

  export type TaskPriorityCountAggregateInputType = {
    id?: true
    name?: true
    colorCode?: true
    description?: true
    _all?: true
  }

  export type TaskPriorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskPriority to aggregate.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskPriorities
    **/
    _count?: true | TaskPriorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskPriorityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskPrioritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskPriorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskPriorityMaxAggregateInputType
  }

  export type GetTaskPriorityAggregateType<T extends TaskPriorityAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskPriority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskPriority[P]>
      : GetScalarType<T[P], AggregateTaskPriority[P]>
  }




  export type TaskPriorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskPriorityWhereInput
    orderBy?: TaskPriorityOrderByWithAggregationInput | TaskPriorityOrderByWithAggregationInput[]
    by: TaskPriorityScalarFieldEnum[] | TaskPriorityScalarFieldEnum
    having?: TaskPriorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskPriorityCountAggregateInputType | true
    _avg?: TaskPriorityAvgAggregateInputType
    _sum?: TaskPrioritySumAggregateInputType
    _min?: TaskPriorityMinAggregateInputType
    _max?: TaskPriorityMaxAggregateInputType
  }

  export type TaskPriorityGroupByOutputType = {
    id: number
    name: string
    colorCode: string | null
    description: string | null
    _count: TaskPriorityCountAggregateOutputType | null
    _avg: TaskPriorityAvgAggregateOutputType | null
    _sum: TaskPrioritySumAggregateOutputType | null
    _min: TaskPriorityMinAggregateOutputType | null
    _max: TaskPriorityMaxAggregateOutputType | null
  }

  type GetTaskPriorityGroupByPayload<T extends TaskPriorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskPriorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskPriorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskPriorityGroupByOutputType[P]>
            : GetScalarType<T[P], TaskPriorityGroupByOutputType[P]>
        }
      >
    >


  export type TaskPrioritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    colorCode?: boolean
    description?: boolean
    tasks?: boolean | TaskPriority$tasksArgs<ExtArgs>
    _count?: boolean | TaskPriorityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskPriority"]>

  export type TaskPrioritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    colorCode?: boolean
    description?: boolean
  }, ExtArgs["result"]["taskPriority"]>

  export type TaskPrioritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    colorCode?: boolean
    description?: boolean
  }, ExtArgs["result"]["taskPriority"]>

  export type TaskPrioritySelectScalar = {
    id?: boolean
    name?: boolean
    colorCode?: boolean
    description?: boolean
  }

  export type TaskPriorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "colorCode" | "description", ExtArgs["result"]["taskPriority"]>
  export type TaskPriorityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskPriority$tasksArgs<ExtArgs>
    _count?: boolean | TaskPriorityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskPriorityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskPriorityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPriorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskPriority"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      colorCode: string | null
      description: string | null
    }, ExtArgs["result"]["taskPriority"]>
    composites: {}
  }

  type TaskPriorityGetPayload<S extends boolean | null | undefined | TaskPriorityDefaultArgs> = $Result.GetResult<Prisma.$TaskPriorityPayload, S>

  type TaskPriorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskPriorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskPriorityCountAggregateInputType | true
    }

  export interface TaskPriorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskPriority'], meta: { name: 'TaskPriority' } }
    /**
     * Find zero or one TaskPriority that matches the filter.
     * @param {TaskPriorityFindUniqueArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskPriorityFindUniqueArgs>(args: SelectSubset<T, TaskPriorityFindUniqueArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskPriority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskPriorityFindUniqueOrThrowArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskPriorityFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskPriorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskPriority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityFindFirstArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskPriorityFindFirstArgs>(args?: SelectSubset<T, TaskPriorityFindFirstArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskPriority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityFindFirstOrThrowArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskPriorityFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskPriorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskPriorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskPriorities
     * const taskPriorities = await prisma.taskPriority.findMany()
     * 
     * // Get first 10 TaskPriorities
     * const taskPriorities = await prisma.taskPriority.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskPriorityWithIdOnly = await prisma.taskPriority.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskPriorityFindManyArgs>(args?: SelectSubset<T, TaskPriorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskPriority.
     * @param {TaskPriorityCreateArgs} args - Arguments to create a TaskPriority.
     * @example
     * // Create one TaskPriority
     * const TaskPriority = await prisma.taskPriority.create({
     *   data: {
     *     // ... data to create a TaskPriority
     *   }
     * })
     * 
     */
    create<T extends TaskPriorityCreateArgs>(args: SelectSubset<T, TaskPriorityCreateArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskPriorities.
     * @param {TaskPriorityCreateManyArgs} args - Arguments to create many TaskPriorities.
     * @example
     * // Create many TaskPriorities
     * const taskPriority = await prisma.taskPriority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskPriorityCreateManyArgs>(args?: SelectSubset<T, TaskPriorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskPriorities and returns the data saved in the database.
     * @param {TaskPriorityCreateManyAndReturnArgs} args - Arguments to create many TaskPriorities.
     * @example
     * // Create many TaskPriorities
     * const taskPriority = await prisma.taskPriority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskPriorities and only return the `id`
     * const taskPriorityWithIdOnly = await prisma.taskPriority.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskPriorityCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskPriorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskPriority.
     * @param {TaskPriorityDeleteArgs} args - Arguments to delete one TaskPriority.
     * @example
     * // Delete one TaskPriority
     * const TaskPriority = await prisma.taskPriority.delete({
     *   where: {
     *     // ... filter to delete one TaskPriority
     *   }
     * })
     * 
     */
    delete<T extends TaskPriorityDeleteArgs>(args: SelectSubset<T, TaskPriorityDeleteArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskPriority.
     * @param {TaskPriorityUpdateArgs} args - Arguments to update one TaskPriority.
     * @example
     * // Update one TaskPriority
     * const taskPriority = await prisma.taskPriority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskPriorityUpdateArgs>(args: SelectSubset<T, TaskPriorityUpdateArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskPriorities.
     * @param {TaskPriorityDeleteManyArgs} args - Arguments to filter TaskPriorities to delete.
     * @example
     * // Delete a few TaskPriorities
     * const { count } = await prisma.taskPriority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskPriorityDeleteManyArgs>(args?: SelectSubset<T, TaskPriorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskPriorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskPriorities
     * const taskPriority = await prisma.taskPriority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskPriorityUpdateManyArgs>(args: SelectSubset<T, TaskPriorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskPriorities and returns the data updated in the database.
     * @param {TaskPriorityUpdateManyAndReturnArgs} args - Arguments to update many TaskPriorities.
     * @example
     * // Update many TaskPriorities
     * const taskPriority = await prisma.taskPriority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskPriorities and only return the `id`
     * const taskPriorityWithIdOnly = await prisma.taskPriority.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskPriorityUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskPriorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskPriority.
     * @param {TaskPriorityUpsertArgs} args - Arguments to update or create a TaskPriority.
     * @example
     * // Update or create a TaskPriority
     * const taskPriority = await prisma.taskPriority.upsert({
     *   create: {
     *     // ... data to create a TaskPriority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskPriority we want to update
     *   }
     * })
     */
    upsert<T extends TaskPriorityUpsertArgs>(args: SelectSubset<T, TaskPriorityUpsertArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskPriorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityCountArgs} args - Arguments to filter TaskPriorities to count.
     * @example
     * // Count the number of TaskPriorities
     * const count = await prisma.taskPriority.count({
     *   where: {
     *     // ... the filter for the TaskPriorities we want to count
     *   }
     * })
    **/
    count<T extends TaskPriorityCountArgs>(
      args?: Subset<T, TaskPriorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskPriorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskPriority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskPriorityAggregateArgs>(args: Subset<T, TaskPriorityAggregateArgs>): Prisma.PrismaPromise<GetTaskPriorityAggregateType<T>>

    /**
     * Group by TaskPriority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskPriorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskPriorityGroupByArgs['orderBy'] }
        : { orderBy?: TaskPriorityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskPriorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskPriorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskPriority model
   */
  readonly fields: TaskPriorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskPriority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskPriorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends TaskPriority$tasksArgs<ExtArgs> = {}>(args?: Subset<T, TaskPriority$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskPriority model
   */
  interface TaskPriorityFieldRefs {
    readonly id: FieldRef<"TaskPriority", 'Int'>
    readonly name: FieldRef<"TaskPriority", 'String'>
    readonly colorCode: FieldRef<"TaskPriority", 'String'>
    readonly description: FieldRef<"TaskPriority", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskPriority findUnique
   */
  export type TaskPriorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority findUniqueOrThrow
   */
  export type TaskPriorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority findFirst
   */
  export type TaskPriorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskPriorities.
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPriorities.
     */
    distinct?: TaskPriorityScalarFieldEnum | TaskPriorityScalarFieldEnum[]
  }

  /**
   * TaskPriority findFirstOrThrow
   */
  export type TaskPriorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskPriorities.
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPriorities.
     */
    distinct?: TaskPriorityScalarFieldEnum | TaskPriorityScalarFieldEnum[]
  }

  /**
   * TaskPriority findMany
   */
  export type TaskPriorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriorities to fetch.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskPriorities.
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    distinct?: TaskPriorityScalarFieldEnum | TaskPriorityScalarFieldEnum[]
  }

  /**
   * TaskPriority create
   */
  export type TaskPriorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskPriority.
     */
    data: XOR<TaskPriorityCreateInput, TaskPriorityUncheckedCreateInput>
  }

  /**
   * TaskPriority createMany
   */
  export type TaskPriorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskPriorities.
     */
    data: TaskPriorityCreateManyInput | TaskPriorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskPriority createManyAndReturn
   */
  export type TaskPriorityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * The data used to create many TaskPriorities.
     */
    data: TaskPriorityCreateManyInput | TaskPriorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskPriority update
   */
  export type TaskPriorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskPriority.
     */
    data: XOR<TaskPriorityUpdateInput, TaskPriorityUncheckedUpdateInput>
    /**
     * Choose, which TaskPriority to update.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority updateMany
   */
  export type TaskPriorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskPriorities.
     */
    data: XOR<TaskPriorityUpdateManyMutationInput, TaskPriorityUncheckedUpdateManyInput>
    /**
     * Filter which TaskPriorities to update
     */
    where?: TaskPriorityWhereInput
    /**
     * Limit how many TaskPriorities to update.
     */
    limit?: number
  }

  /**
   * TaskPriority updateManyAndReturn
   */
  export type TaskPriorityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * The data used to update TaskPriorities.
     */
    data: XOR<TaskPriorityUpdateManyMutationInput, TaskPriorityUncheckedUpdateManyInput>
    /**
     * Filter which TaskPriorities to update
     */
    where?: TaskPriorityWhereInput
    /**
     * Limit how many TaskPriorities to update.
     */
    limit?: number
  }

  /**
   * TaskPriority upsert
   */
  export type TaskPriorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskPriority to update in case it exists.
     */
    where: TaskPriorityWhereUniqueInput
    /**
     * In case the TaskPriority found by the `where` argument doesn't exist, create a new TaskPriority with this data.
     */
    create: XOR<TaskPriorityCreateInput, TaskPriorityUncheckedCreateInput>
    /**
     * In case the TaskPriority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskPriorityUpdateInput, TaskPriorityUncheckedUpdateInput>
  }

  /**
   * TaskPriority delete
   */
  export type TaskPriorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter which TaskPriority to delete.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority deleteMany
   */
  export type TaskPriorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskPriorities to delete
     */
    where?: TaskPriorityWhereInput
    /**
     * Limit how many TaskPriorities to delete.
     */
    limit?: number
  }

  /**
   * TaskPriority.tasks
   */
  export type TaskPriority$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * TaskPriority without action
   */
  export type TaskPriorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    userId: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    userId: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: number | null
    role: string | null
    teamId: number | null
    userId: number | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: number | null
    role: string | null
    teamId: number | null
    userId: number | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    role: number
    teamId: number
    userId: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
  }

  export type TeamMemberSumAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    role?: true
    teamId?: true
    userId?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    role?: true
    teamId?: true
    userId?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    role?: true
    teamId?: true
    userId?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: number
    role: string | null
    teamId: number
    userId: number
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    role?: boolean
    teamId?: boolean
    userId?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "teamId" | "userId", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string | null
      teamId: number
      userId: number
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'Int'>
    readonly role: FieldRef<"TeamMember", 'String'>
    readonly teamId: FieldRef<"TeamMember", 'Int'>
    readonly userId: FieldRef<"TeamMember", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    projectId: number | null
    createById: number | null
  }

  export type MeetingSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    projectId: number | null
    createById: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    meetingURL: string | null
    recordingURL: string | null
    startTime: Date | null
    endTime: Date | null
    teamId: number | null
    projectId: number | null
    createById: number | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    meetingURL: string | null
    recordingURL: string | null
    startTime: Date | null
    endTime: Date | null
    teamId: number | null
    projectId: number | null
    createById: number | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    meetingURL: number
    recordingURL: number
    startTime: number
    endTime: number
    teamId: number
    projectId: number
    createById: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    id?: true
    teamId?: true
    projectId?: true
    createById?: true
  }

  export type MeetingSumAggregateInputType = {
    id?: true
    teamId?: true
    projectId?: true
    createById?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    meetingURL?: true
    recordingURL?: true
    startTime?: true
    endTime?: true
    teamId?: true
    projectId?: true
    createById?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    meetingURL?: true
    recordingURL?: true
    startTime?: true
    endTime?: true
    teamId?: true
    projectId?: true
    createById?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    meetingURL?: true
    recordingURL?: true
    startTime?: true
    endTime?: true
    teamId?: true
    projectId?: true
    createById?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: number
    title: string
    description: string | null
    meetingURL: string | null
    recordingURL: string | null
    startTime: Date
    endTime: Date
    teamId: number
    projectId: number
    createById: number
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    meetingURL?: boolean
    recordingURL?: boolean
    startTime?: boolean
    endTime?: boolean
    teamId?: boolean
    projectId?: boolean
    createById?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    notes?: boolean | Meeting$notesArgs<ExtArgs>
    summaries?: boolean | Meeting$summariesArgs<ExtArgs>
    participants?: boolean | Meeting$participantsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    meetingURL?: boolean
    recordingURL?: boolean
    startTime?: boolean
    endTime?: boolean
    teamId?: boolean
    projectId?: boolean
    createById?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    meetingURL?: boolean
    recordingURL?: boolean
    startTime?: boolean
    endTime?: boolean
    teamId?: boolean
    projectId?: boolean
    createById?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    meetingURL?: boolean
    recordingURL?: boolean
    startTime?: boolean
    endTime?: boolean
    teamId?: boolean
    projectId?: boolean
    createById?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "meetingURL" | "recordingURL" | "startTime" | "endTime" | "teamId" | "projectId" | "createById", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    notes?: boolean | Meeting$notesArgs<ExtArgs>
    summaries?: boolean | Meeting$summariesArgs<ExtArgs>
    participants?: boolean | Meeting$participantsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      notes: Prisma.$MeetingNotePayload<ExtArgs>[]
      summaries: Prisma.$MeetingSummaryPayload<ExtArgs>[]
      participants: Prisma.$MeetingParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      meetingURL: string | null
      recordingURL: string | null
      startTime: Date
      endTime: Date
      teamId: number
      projectId: number
      createById: number
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends Meeting$notesArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summaries<T extends Meeting$summariesArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$summariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Meeting$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'Int'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly description: FieldRef<"Meeting", 'String'>
    readonly meetingURL: FieldRef<"Meeting", 'String'>
    readonly recordingURL: FieldRef<"Meeting", 'String'>
    readonly startTime: FieldRef<"Meeting", 'DateTime'>
    readonly endTime: FieldRef<"Meeting", 'DateTime'>
    readonly teamId: FieldRef<"Meeting", 'Int'>
    readonly projectId: FieldRef<"Meeting", 'Int'>
    readonly createById: FieldRef<"Meeting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.notes
   */
  export type Meeting$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    where?: MeetingNoteWhereInput
    orderBy?: MeetingNoteOrderByWithRelationInput | MeetingNoteOrderByWithRelationInput[]
    cursor?: MeetingNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingNoteScalarFieldEnum | MeetingNoteScalarFieldEnum[]
  }

  /**
   * Meeting.summaries
   */
  export type Meeting$summariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    where?: MeetingSummaryWhereInput
    orderBy?: MeetingSummaryOrderByWithRelationInput | MeetingSummaryOrderByWithRelationInput[]
    cursor?: MeetingSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingSummaryScalarFieldEnum | MeetingSummaryScalarFieldEnum[]
  }

  /**
   * Meeting.participants
   */
  export type Meeting$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    cursor?: MeetingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model MeetingNote
   */

  export type AggregateMeetingNote = {
    _count: MeetingNoteCountAggregateOutputType | null
    _avg: MeetingNoteAvgAggregateOutputType | null
    _sum: MeetingNoteSumAggregateOutputType | null
    _min: MeetingNoteMinAggregateOutputType | null
    _max: MeetingNoteMaxAggregateOutputType | null
  }

  export type MeetingNoteAvgAggregateOutputType = {
    id: number | null
    meetingId: number | null
    authorId: number | null
  }

  export type MeetingNoteSumAggregateOutputType = {
    id: number | null
    meetingId: number | null
    authorId: number | null
  }

  export type MeetingNoteMinAggregateOutputType = {
    id: number | null
    content: string | null
    createAt: Date | null
    meetingId: number | null
    authorId: number | null
  }

  export type MeetingNoteMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createAt: Date | null
    meetingId: number | null
    authorId: number | null
  }

  export type MeetingNoteCountAggregateOutputType = {
    id: number
    content: number
    createAt: number
    meetingId: number
    authorId: number
    _all: number
  }


  export type MeetingNoteAvgAggregateInputType = {
    id?: true
    meetingId?: true
    authorId?: true
  }

  export type MeetingNoteSumAggregateInputType = {
    id?: true
    meetingId?: true
    authorId?: true
  }

  export type MeetingNoteMinAggregateInputType = {
    id?: true
    content?: true
    createAt?: true
    meetingId?: true
    authorId?: true
  }

  export type MeetingNoteMaxAggregateInputType = {
    id?: true
    content?: true
    createAt?: true
    meetingId?: true
    authorId?: true
  }

  export type MeetingNoteCountAggregateInputType = {
    id?: true
    content?: true
    createAt?: true
    meetingId?: true
    authorId?: true
    _all?: true
  }

  export type MeetingNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingNote to aggregate.
     */
    where?: MeetingNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingNotes to fetch.
     */
    orderBy?: MeetingNoteOrderByWithRelationInput | MeetingNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingNotes
    **/
    _count?: true | MeetingNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingNoteMaxAggregateInputType
  }

  export type GetMeetingNoteAggregateType<T extends MeetingNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingNote[P]>
      : GetScalarType<T[P], AggregateMeetingNote[P]>
  }




  export type MeetingNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingNoteWhereInput
    orderBy?: MeetingNoteOrderByWithAggregationInput | MeetingNoteOrderByWithAggregationInput[]
    by: MeetingNoteScalarFieldEnum[] | MeetingNoteScalarFieldEnum
    having?: MeetingNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingNoteCountAggregateInputType | true
    _avg?: MeetingNoteAvgAggregateInputType
    _sum?: MeetingNoteSumAggregateInputType
    _min?: MeetingNoteMinAggregateInputType
    _max?: MeetingNoteMaxAggregateInputType
  }

  export type MeetingNoteGroupByOutputType = {
    id: number
    content: string
    createAt: Date
    meetingId: number
    authorId: number
    _count: MeetingNoteCountAggregateOutputType | null
    _avg: MeetingNoteAvgAggregateOutputType | null
    _sum: MeetingNoteSumAggregateOutputType | null
    _min: MeetingNoteMinAggregateOutputType | null
    _max: MeetingNoteMaxAggregateOutputType | null
  }

  type GetMeetingNoteGroupByPayload<T extends MeetingNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingNoteGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingNoteGroupByOutputType[P]>
        }
      >
    >


  export type MeetingNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createAt?: boolean
    meetingId?: boolean
    authorId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingNote"]>

  export type MeetingNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createAt?: boolean
    meetingId?: boolean
    authorId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingNote"]>

  export type MeetingNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createAt?: boolean
    meetingId?: boolean
    authorId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingNote"]>

  export type MeetingNoteSelectScalar = {
    id?: boolean
    content?: boolean
    createAt?: boolean
    meetingId?: boolean
    authorId?: boolean
  }

  export type MeetingNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createAt" | "meetingId" | "authorId", ExtArgs["result"]["meetingNote"]>
  export type MeetingNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingNote"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createAt: Date
      meetingId: number
      authorId: number
    }, ExtArgs["result"]["meetingNote"]>
    composites: {}
  }

  type MeetingNoteGetPayload<S extends boolean | null | undefined | MeetingNoteDefaultArgs> = $Result.GetResult<Prisma.$MeetingNotePayload, S>

  type MeetingNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingNoteCountAggregateInputType | true
    }

  export interface MeetingNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingNote'], meta: { name: 'MeetingNote' } }
    /**
     * Find zero or one MeetingNote that matches the filter.
     * @param {MeetingNoteFindUniqueArgs} args - Arguments to find a MeetingNote
     * @example
     * // Get one MeetingNote
     * const meetingNote = await prisma.meetingNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingNoteFindUniqueArgs>(args: SelectSubset<T, MeetingNoteFindUniqueArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingNoteFindUniqueOrThrowArgs} args - Arguments to find a MeetingNote
     * @example
     * // Get one MeetingNote
     * const meetingNote = await prisma.meetingNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteFindFirstArgs} args - Arguments to find a MeetingNote
     * @example
     * // Get one MeetingNote
     * const meetingNote = await prisma.meetingNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingNoteFindFirstArgs>(args?: SelectSubset<T, MeetingNoteFindFirstArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteFindFirstOrThrowArgs} args - Arguments to find a MeetingNote
     * @example
     * // Get one MeetingNote
     * const meetingNote = await prisma.meetingNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingNotes
     * const meetingNotes = await prisma.meetingNote.findMany()
     * 
     * // Get first 10 MeetingNotes
     * const meetingNotes = await prisma.meetingNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingNoteWithIdOnly = await prisma.meetingNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingNoteFindManyArgs>(args?: SelectSubset<T, MeetingNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingNote.
     * @param {MeetingNoteCreateArgs} args - Arguments to create a MeetingNote.
     * @example
     * // Create one MeetingNote
     * const MeetingNote = await prisma.meetingNote.create({
     *   data: {
     *     // ... data to create a MeetingNote
     *   }
     * })
     * 
     */
    create<T extends MeetingNoteCreateArgs>(args: SelectSubset<T, MeetingNoteCreateArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingNotes.
     * @param {MeetingNoteCreateManyArgs} args - Arguments to create many MeetingNotes.
     * @example
     * // Create many MeetingNotes
     * const meetingNote = await prisma.meetingNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingNoteCreateManyArgs>(args?: SelectSubset<T, MeetingNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingNotes and returns the data saved in the database.
     * @param {MeetingNoteCreateManyAndReturnArgs} args - Arguments to create many MeetingNotes.
     * @example
     * // Create many MeetingNotes
     * const meetingNote = await prisma.meetingNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingNotes and only return the `id`
     * const meetingNoteWithIdOnly = await prisma.meetingNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingNote.
     * @param {MeetingNoteDeleteArgs} args - Arguments to delete one MeetingNote.
     * @example
     * // Delete one MeetingNote
     * const MeetingNote = await prisma.meetingNote.delete({
     *   where: {
     *     // ... filter to delete one MeetingNote
     *   }
     * })
     * 
     */
    delete<T extends MeetingNoteDeleteArgs>(args: SelectSubset<T, MeetingNoteDeleteArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingNote.
     * @param {MeetingNoteUpdateArgs} args - Arguments to update one MeetingNote.
     * @example
     * // Update one MeetingNote
     * const meetingNote = await prisma.meetingNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingNoteUpdateArgs>(args: SelectSubset<T, MeetingNoteUpdateArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingNotes.
     * @param {MeetingNoteDeleteManyArgs} args - Arguments to filter MeetingNotes to delete.
     * @example
     * // Delete a few MeetingNotes
     * const { count } = await prisma.meetingNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingNoteDeleteManyArgs>(args?: SelectSubset<T, MeetingNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingNotes
     * const meetingNote = await prisma.meetingNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingNoteUpdateManyArgs>(args: SelectSubset<T, MeetingNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingNotes and returns the data updated in the database.
     * @param {MeetingNoteUpdateManyAndReturnArgs} args - Arguments to update many MeetingNotes.
     * @example
     * // Update many MeetingNotes
     * const meetingNote = await prisma.meetingNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingNotes and only return the `id`
     * const meetingNoteWithIdOnly = await prisma.meetingNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingNote.
     * @param {MeetingNoteUpsertArgs} args - Arguments to update or create a MeetingNote.
     * @example
     * // Update or create a MeetingNote
     * const meetingNote = await prisma.meetingNote.upsert({
     *   create: {
     *     // ... data to create a MeetingNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingNote we want to update
     *   }
     * })
     */
    upsert<T extends MeetingNoteUpsertArgs>(args: SelectSubset<T, MeetingNoteUpsertArgs<ExtArgs>>): Prisma__MeetingNoteClient<$Result.GetResult<Prisma.$MeetingNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteCountArgs} args - Arguments to filter MeetingNotes to count.
     * @example
     * // Count the number of MeetingNotes
     * const count = await prisma.meetingNote.count({
     *   where: {
     *     // ... the filter for the MeetingNotes we want to count
     *   }
     * })
    **/
    count<T extends MeetingNoteCountArgs>(
      args?: Subset<T, MeetingNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingNoteAggregateArgs>(args: Subset<T, MeetingNoteAggregateArgs>): Prisma.PrismaPromise<GetMeetingNoteAggregateType<T>>

    /**
     * Group by MeetingNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingNoteGroupByArgs['orderBy'] }
        : { orderBy?: MeetingNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingNote model
   */
  readonly fields: MeetingNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingNote model
   */
  interface MeetingNoteFieldRefs {
    readonly id: FieldRef<"MeetingNote", 'Int'>
    readonly content: FieldRef<"MeetingNote", 'String'>
    readonly createAt: FieldRef<"MeetingNote", 'DateTime'>
    readonly meetingId: FieldRef<"MeetingNote", 'Int'>
    readonly authorId: FieldRef<"MeetingNote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MeetingNote findUnique
   */
  export type MeetingNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * Filter, which MeetingNote to fetch.
     */
    where: MeetingNoteWhereUniqueInput
  }

  /**
   * MeetingNote findUniqueOrThrow
   */
  export type MeetingNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * Filter, which MeetingNote to fetch.
     */
    where: MeetingNoteWhereUniqueInput
  }

  /**
   * MeetingNote findFirst
   */
  export type MeetingNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * Filter, which MeetingNote to fetch.
     */
    where?: MeetingNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingNotes to fetch.
     */
    orderBy?: MeetingNoteOrderByWithRelationInput | MeetingNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingNotes.
     */
    cursor?: MeetingNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingNotes.
     */
    distinct?: MeetingNoteScalarFieldEnum | MeetingNoteScalarFieldEnum[]
  }

  /**
   * MeetingNote findFirstOrThrow
   */
  export type MeetingNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * Filter, which MeetingNote to fetch.
     */
    where?: MeetingNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingNotes to fetch.
     */
    orderBy?: MeetingNoteOrderByWithRelationInput | MeetingNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingNotes.
     */
    cursor?: MeetingNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingNotes.
     */
    distinct?: MeetingNoteScalarFieldEnum | MeetingNoteScalarFieldEnum[]
  }

  /**
   * MeetingNote findMany
   */
  export type MeetingNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * Filter, which MeetingNotes to fetch.
     */
    where?: MeetingNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingNotes to fetch.
     */
    orderBy?: MeetingNoteOrderByWithRelationInput | MeetingNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingNotes.
     */
    cursor?: MeetingNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingNotes.
     */
    skip?: number
    distinct?: MeetingNoteScalarFieldEnum | MeetingNoteScalarFieldEnum[]
  }

  /**
   * MeetingNote create
   */
  export type MeetingNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingNote.
     */
    data: XOR<MeetingNoteCreateInput, MeetingNoteUncheckedCreateInput>
  }

  /**
   * MeetingNote createMany
   */
  export type MeetingNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingNotes.
     */
    data: MeetingNoteCreateManyInput | MeetingNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingNote createManyAndReturn
   */
  export type MeetingNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingNotes.
     */
    data: MeetingNoteCreateManyInput | MeetingNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingNote update
   */
  export type MeetingNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingNote.
     */
    data: XOR<MeetingNoteUpdateInput, MeetingNoteUncheckedUpdateInput>
    /**
     * Choose, which MeetingNote to update.
     */
    where: MeetingNoteWhereUniqueInput
  }

  /**
   * MeetingNote updateMany
   */
  export type MeetingNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingNotes.
     */
    data: XOR<MeetingNoteUpdateManyMutationInput, MeetingNoteUncheckedUpdateManyInput>
    /**
     * Filter which MeetingNotes to update
     */
    where?: MeetingNoteWhereInput
    /**
     * Limit how many MeetingNotes to update.
     */
    limit?: number
  }

  /**
   * MeetingNote updateManyAndReturn
   */
  export type MeetingNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * The data used to update MeetingNotes.
     */
    data: XOR<MeetingNoteUpdateManyMutationInput, MeetingNoteUncheckedUpdateManyInput>
    /**
     * Filter which MeetingNotes to update
     */
    where?: MeetingNoteWhereInput
    /**
     * Limit how many MeetingNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingNote upsert
   */
  export type MeetingNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingNote to update in case it exists.
     */
    where: MeetingNoteWhereUniqueInput
    /**
     * In case the MeetingNote found by the `where` argument doesn't exist, create a new MeetingNote with this data.
     */
    create: XOR<MeetingNoteCreateInput, MeetingNoteUncheckedCreateInput>
    /**
     * In case the MeetingNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingNoteUpdateInput, MeetingNoteUncheckedUpdateInput>
  }

  /**
   * MeetingNote delete
   */
  export type MeetingNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
    /**
     * Filter which MeetingNote to delete.
     */
    where: MeetingNoteWhereUniqueInput
  }

  /**
   * MeetingNote deleteMany
   */
  export type MeetingNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingNotes to delete
     */
    where?: MeetingNoteWhereInput
    /**
     * Limit how many MeetingNotes to delete.
     */
    limit?: number
  }

  /**
   * MeetingNote without action
   */
  export type MeetingNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingNote
     */
    select?: MeetingNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingNote
     */
    omit?: MeetingNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingNoteInclude<ExtArgs> | null
  }


  /**
   * Model MeetingSummary
   */

  export type AggregateMeetingSummary = {
    _count: MeetingSummaryCountAggregateOutputType | null
    _avg: MeetingSummaryAvgAggregateOutputType | null
    _sum: MeetingSummarySumAggregateOutputType | null
    _min: MeetingSummaryMinAggregateOutputType | null
    _max: MeetingSummaryMaxAggregateOutputType | null
  }

  export type MeetingSummaryAvgAggregateOutputType = {
    id: number | null
    meetingId: number | null
    createById: number | null
  }

  export type MeetingSummarySumAggregateOutputType = {
    id: number | null
    meetingId: number | null
    createById: number | null
  }

  export type MeetingSummaryMinAggregateOutputType = {
    id: number | null
    content: string | null
    aiModel: string | null
    createAt: Date | null
    meetingId: number | null
    createById: number | null
  }

  export type MeetingSummaryMaxAggregateOutputType = {
    id: number | null
    content: string | null
    aiModel: string | null
    createAt: Date | null
    meetingId: number | null
    createById: number | null
  }

  export type MeetingSummaryCountAggregateOutputType = {
    id: number
    content: number
    aiModel: number
    createAt: number
    meetingId: number
    createById: number
    _all: number
  }


  export type MeetingSummaryAvgAggregateInputType = {
    id?: true
    meetingId?: true
    createById?: true
  }

  export type MeetingSummarySumAggregateInputType = {
    id?: true
    meetingId?: true
    createById?: true
  }

  export type MeetingSummaryMinAggregateInputType = {
    id?: true
    content?: true
    aiModel?: true
    createAt?: true
    meetingId?: true
    createById?: true
  }

  export type MeetingSummaryMaxAggregateInputType = {
    id?: true
    content?: true
    aiModel?: true
    createAt?: true
    meetingId?: true
    createById?: true
  }

  export type MeetingSummaryCountAggregateInputType = {
    id?: true
    content?: true
    aiModel?: true
    createAt?: true
    meetingId?: true
    createById?: true
    _all?: true
  }

  export type MeetingSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingSummary to aggregate.
     */
    where?: MeetingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingSummaries to fetch.
     */
    orderBy?: MeetingSummaryOrderByWithRelationInput | MeetingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingSummaries
    **/
    _count?: true | MeetingSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingSummaryMaxAggregateInputType
  }

  export type GetMeetingSummaryAggregateType<T extends MeetingSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingSummary[P]>
      : GetScalarType<T[P], AggregateMeetingSummary[P]>
  }




  export type MeetingSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingSummaryWhereInput
    orderBy?: MeetingSummaryOrderByWithAggregationInput | MeetingSummaryOrderByWithAggregationInput[]
    by: MeetingSummaryScalarFieldEnum[] | MeetingSummaryScalarFieldEnum
    having?: MeetingSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingSummaryCountAggregateInputType | true
    _avg?: MeetingSummaryAvgAggregateInputType
    _sum?: MeetingSummarySumAggregateInputType
    _min?: MeetingSummaryMinAggregateInputType
    _max?: MeetingSummaryMaxAggregateInputType
  }

  export type MeetingSummaryGroupByOutputType = {
    id: number
    content: string
    aiModel: string | null
    createAt: Date
    meetingId: number
    createById: number
    _count: MeetingSummaryCountAggregateOutputType | null
    _avg: MeetingSummaryAvgAggregateOutputType | null
    _sum: MeetingSummarySumAggregateOutputType | null
    _min: MeetingSummaryMinAggregateOutputType | null
    _max: MeetingSummaryMaxAggregateOutputType | null
  }

  type GetMeetingSummaryGroupByPayload<T extends MeetingSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingSummaryGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    aiModel?: boolean
    createAt?: boolean
    meetingId?: boolean
    createById?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingSummary"]>

  export type MeetingSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    aiModel?: boolean
    createAt?: boolean
    meetingId?: boolean
    createById?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingSummary"]>

  export type MeetingSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    aiModel?: boolean
    createAt?: boolean
    meetingId?: boolean
    createById?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingSummary"]>

  export type MeetingSummarySelectScalar = {
    id?: boolean
    content?: boolean
    aiModel?: boolean
    createAt?: boolean
    meetingId?: boolean
    createById?: boolean
  }

  export type MeetingSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "aiModel" | "createAt" | "meetingId" | "createById", ExtArgs["result"]["meetingSummary"]>
  export type MeetingSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingSummary"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      aiModel: string | null
      createAt: Date
      meetingId: number
      createById: number
    }, ExtArgs["result"]["meetingSummary"]>
    composites: {}
  }

  type MeetingSummaryGetPayload<S extends boolean | null | undefined | MeetingSummaryDefaultArgs> = $Result.GetResult<Prisma.$MeetingSummaryPayload, S>

  type MeetingSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingSummaryCountAggregateInputType | true
    }

  export interface MeetingSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingSummary'], meta: { name: 'MeetingSummary' } }
    /**
     * Find zero or one MeetingSummary that matches the filter.
     * @param {MeetingSummaryFindUniqueArgs} args - Arguments to find a MeetingSummary
     * @example
     * // Get one MeetingSummary
     * const meetingSummary = await prisma.meetingSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingSummaryFindUniqueArgs>(args: SelectSubset<T, MeetingSummaryFindUniqueArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingSummaryFindUniqueOrThrowArgs} args - Arguments to find a MeetingSummary
     * @example
     * // Get one MeetingSummary
     * const meetingSummary = await prisma.meetingSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryFindFirstArgs} args - Arguments to find a MeetingSummary
     * @example
     * // Get one MeetingSummary
     * const meetingSummary = await prisma.meetingSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingSummaryFindFirstArgs>(args?: SelectSubset<T, MeetingSummaryFindFirstArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryFindFirstOrThrowArgs} args - Arguments to find a MeetingSummary
     * @example
     * // Get one MeetingSummary
     * const meetingSummary = await prisma.meetingSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingSummaries
     * const meetingSummaries = await prisma.meetingSummary.findMany()
     * 
     * // Get first 10 MeetingSummaries
     * const meetingSummaries = await prisma.meetingSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingSummaryWithIdOnly = await prisma.meetingSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingSummaryFindManyArgs>(args?: SelectSubset<T, MeetingSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingSummary.
     * @param {MeetingSummaryCreateArgs} args - Arguments to create a MeetingSummary.
     * @example
     * // Create one MeetingSummary
     * const MeetingSummary = await prisma.meetingSummary.create({
     *   data: {
     *     // ... data to create a MeetingSummary
     *   }
     * })
     * 
     */
    create<T extends MeetingSummaryCreateArgs>(args: SelectSubset<T, MeetingSummaryCreateArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingSummaries.
     * @param {MeetingSummaryCreateManyArgs} args - Arguments to create many MeetingSummaries.
     * @example
     * // Create many MeetingSummaries
     * const meetingSummary = await prisma.meetingSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingSummaryCreateManyArgs>(args?: SelectSubset<T, MeetingSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingSummaries and returns the data saved in the database.
     * @param {MeetingSummaryCreateManyAndReturnArgs} args - Arguments to create many MeetingSummaries.
     * @example
     * // Create many MeetingSummaries
     * const meetingSummary = await prisma.meetingSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingSummaries and only return the `id`
     * const meetingSummaryWithIdOnly = await prisma.meetingSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingSummary.
     * @param {MeetingSummaryDeleteArgs} args - Arguments to delete one MeetingSummary.
     * @example
     * // Delete one MeetingSummary
     * const MeetingSummary = await prisma.meetingSummary.delete({
     *   where: {
     *     // ... filter to delete one MeetingSummary
     *   }
     * })
     * 
     */
    delete<T extends MeetingSummaryDeleteArgs>(args: SelectSubset<T, MeetingSummaryDeleteArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingSummary.
     * @param {MeetingSummaryUpdateArgs} args - Arguments to update one MeetingSummary.
     * @example
     * // Update one MeetingSummary
     * const meetingSummary = await prisma.meetingSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingSummaryUpdateArgs>(args: SelectSubset<T, MeetingSummaryUpdateArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingSummaries.
     * @param {MeetingSummaryDeleteManyArgs} args - Arguments to filter MeetingSummaries to delete.
     * @example
     * // Delete a few MeetingSummaries
     * const { count } = await prisma.meetingSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingSummaryDeleteManyArgs>(args?: SelectSubset<T, MeetingSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingSummaries
     * const meetingSummary = await prisma.meetingSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingSummaryUpdateManyArgs>(args: SelectSubset<T, MeetingSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingSummaries and returns the data updated in the database.
     * @param {MeetingSummaryUpdateManyAndReturnArgs} args - Arguments to update many MeetingSummaries.
     * @example
     * // Update many MeetingSummaries
     * const meetingSummary = await prisma.meetingSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingSummaries and only return the `id`
     * const meetingSummaryWithIdOnly = await prisma.meetingSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingSummary.
     * @param {MeetingSummaryUpsertArgs} args - Arguments to update or create a MeetingSummary.
     * @example
     * // Update or create a MeetingSummary
     * const meetingSummary = await prisma.meetingSummary.upsert({
     *   create: {
     *     // ... data to create a MeetingSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingSummary we want to update
     *   }
     * })
     */
    upsert<T extends MeetingSummaryUpsertArgs>(args: SelectSubset<T, MeetingSummaryUpsertArgs<ExtArgs>>): Prisma__MeetingSummaryClient<$Result.GetResult<Prisma.$MeetingSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryCountArgs} args - Arguments to filter MeetingSummaries to count.
     * @example
     * // Count the number of MeetingSummaries
     * const count = await prisma.meetingSummary.count({
     *   where: {
     *     // ... the filter for the MeetingSummaries we want to count
     *   }
     * })
    **/
    count<T extends MeetingSummaryCountArgs>(
      args?: Subset<T, MeetingSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingSummaryAggregateArgs>(args: Subset<T, MeetingSummaryAggregateArgs>): Prisma.PrismaPromise<GetMeetingSummaryAggregateType<T>>

    /**
     * Group by MeetingSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingSummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingSummaryGroupByArgs['orderBy'] }
        : { orderBy?: MeetingSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingSummary model
   */
  readonly fields: MeetingSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingSummary model
   */
  interface MeetingSummaryFieldRefs {
    readonly id: FieldRef<"MeetingSummary", 'Int'>
    readonly content: FieldRef<"MeetingSummary", 'String'>
    readonly aiModel: FieldRef<"MeetingSummary", 'String'>
    readonly createAt: FieldRef<"MeetingSummary", 'DateTime'>
    readonly meetingId: FieldRef<"MeetingSummary", 'Int'>
    readonly createById: FieldRef<"MeetingSummary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MeetingSummary findUnique
   */
  export type MeetingSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MeetingSummary to fetch.
     */
    where: MeetingSummaryWhereUniqueInput
  }

  /**
   * MeetingSummary findUniqueOrThrow
   */
  export type MeetingSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MeetingSummary to fetch.
     */
    where: MeetingSummaryWhereUniqueInput
  }

  /**
   * MeetingSummary findFirst
   */
  export type MeetingSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MeetingSummary to fetch.
     */
    where?: MeetingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingSummaries to fetch.
     */
    orderBy?: MeetingSummaryOrderByWithRelationInput | MeetingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingSummaries.
     */
    cursor?: MeetingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingSummaries.
     */
    distinct?: MeetingSummaryScalarFieldEnum | MeetingSummaryScalarFieldEnum[]
  }

  /**
   * MeetingSummary findFirstOrThrow
   */
  export type MeetingSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MeetingSummary to fetch.
     */
    where?: MeetingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingSummaries to fetch.
     */
    orderBy?: MeetingSummaryOrderByWithRelationInput | MeetingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingSummaries.
     */
    cursor?: MeetingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingSummaries.
     */
    distinct?: MeetingSummaryScalarFieldEnum | MeetingSummaryScalarFieldEnum[]
  }

  /**
   * MeetingSummary findMany
   */
  export type MeetingSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MeetingSummaries to fetch.
     */
    where?: MeetingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingSummaries to fetch.
     */
    orderBy?: MeetingSummaryOrderByWithRelationInput | MeetingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingSummaries.
     */
    cursor?: MeetingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingSummaries.
     */
    skip?: number
    distinct?: MeetingSummaryScalarFieldEnum | MeetingSummaryScalarFieldEnum[]
  }

  /**
   * MeetingSummary create
   */
  export type MeetingSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingSummary.
     */
    data: XOR<MeetingSummaryCreateInput, MeetingSummaryUncheckedCreateInput>
  }

  /**
   * MeetingSummary createMany
   */
  export type MeetingSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingSummaries.
     */
    data: MeetingSummaryCreateManyInput | MeetingSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingSummary createManyAndReturn
   */
  export type MeetingSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingSummaries.
     */
    data: MeetingSummaryCreateManyInput | MeetingSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingSummary update
   */
  export type MeetingSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingSummary.
     */
    data: XOR<MeetingSummaryUpdateInput, MeetingSummaryUncheckedUpdateInput>
    /**
     * Choose, which MeetingSummary to update.
     */
    where: MeetingSummaryWhereUniqueInput
  }

  /**
   * MeetingSummary updateMany
   */
  export type MeetingSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingSummaries.
     */
    data: XOR<MeetingSummaryUpdateManyMutationInput, MeetingSummaryUncheckedUpdateManyInput>
    /**
     * Filter which MeetingSummaries to update
     */
    where?: MeetingSummaryWhereInput
    /**
     * Limit how many MeetingSummaries to update.
     */
    limit?: number
  }

  /**
   * MeetingSummary updateManyAndReturn
   */
  export type MeetingSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * The data used to update MeetingSummaries.
     */
    data: XOR<MeetingSummaryUpdateManyMutationInput, MeetingSummaryUncheckedUpdateManyInput>
    /**
     * Filter which MeetingSummaries to update
     */
    where?: MeetingSummaryWhereInput
    /**
     * Limit how many MeetingSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingSummary upsert
   */
  export type MeetingSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingSummary to update in case it exists.
     */
    where: MeetingSummaryWhereUniqueInput
    /**
     * In case the MeetingSummary found by the `where` argument doesn't exist, create a new MeetingSummary with this data.
     */
    create: XOR<MeetingSummaryCreateInput, MeetingSummaryUncheckedCreateInput>
    /**
     * In case the MeetingSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingSummaryUpdateInput, MeetingSummaryUncheckedUpdateInput>
  }

  /**
   * MeetingSummary delete
   */
  export type MeetingSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
    /**
     * Filter which MeetingSummary to delete.
     */
    where: MeetingSummaryWhereUniqueInput
  }

  /**
   * MeetingSummary deleteMany
   */
  export type MeetingSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingSummaries to delete
     */
    where?: MeetingSummaryWhereInput
    /**
     * Limit how many MeetingSummaries to delete.
     */
    limit?: number
  }

  /**
   * MeetingSummary without action
   */
  export type MeetingSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingSummary
     */
    select?: MeetingSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingSummary
     */
    omit?: MeetingSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingSummaryInclude<ExtArgs> | null
  }


  /**
   * Model MeetingParticipant
   */

  export type AggregateMeetingParticipant = {
    _count: MeetingParticipantCountAggregateOutputType | null
    _avg: MeetingParticipantAvgAggregateOutputType | null
    _sum: MeetingParticipantSumAggregateOutputType | null
    _min: MeetingParticipantMinAggregateOutputType | null
    _max: MeetingParticipantMaxAggregateOutputType | null
  }

  export type MeetingParticipantAvgAggregateOutputType = {
    id: number | null
    meetingId: number | null
    userId: number | null
  }

  export type MeetingParticipantSumAggregateOutputType = {
    id: number | null
    meetingId: number | null
    userId: number | null
  }

  export type MeetingParticipantMinAggregateOutputType = {
    id: number | null
    rsvpStatus: string | null
    meetingId: number | null
    userId: number | null
  }

  export type MeetingParticipantMaxAggregateOutputType = {
    id: number | null
    rsvpStatus: string | null
    meetingId: number | null
    userId: number | null
  }

  export type MeetingParticipantCountAggregateOutputType = {
    id: number
    rsvpStatus: number
    meetingId: number
    userId: number
    _all: number
  }


  export type MeetingParticipantAvgAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
  }

  export type MeetingParticipantSumAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
  }

  export type MeetingParticipantMinAggregateInputType = {
    id?: true
    rsvpStatus?: true
    meetingId?: true
    userId?: true
  }

  export type MeetingParticipantMaxAggregateInputType = {
    id?: true
    rsvpStatus?: true
    meetingId?: true
    userId?: true
  }

  export type MeetingParticipantCountAggregateInputType = {
    id?: true
    rsvpStatus?: true
    meetingId?: true
    userId?: true
    _all?: true
  }

  export type MeetingParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingParticipant to aggregate.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingParticipants
    **/
    _count?: true | MeetingParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingParticipantMaxAggregateInputType
  }

  export type GetMeetingParticipantAggregateType<T extends MeetingParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingParticipant[P]>
      : GetScalarType<T[P], AggregateMeetingParticipant[P]>
  }




  export type MeetingParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithAggregationInput | MeetingParticipantOrderByWithAggregationInput[]
    by: MeetingParticipantScalarFieldEnum[] | MeetingParticipantScalarFieldEnum
    having?: MeetingParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingParticipantCountAggregateInputType | true
    _avg?: MeetingParticipantAvgAggregateInputType
    _sum?: MeetingParticipantSumAggregateInputType
    _min?: MeetingParticipantMinAggregateInputType
    _max?: MeetingParticipantMaxAggregateInputType
  }

  export type MeetingParticipantGroupByOutputType = {
    id: number
    rsvpStatus: string | null
    meetingId: number
    userId: number
    _count: MeetingParticipantCountAggregateOutputType | null
    _avg: MeetingParticipantAvgAggregateOutputType | null
    _sum: MeetingParticipantSumAggregateOutputType | null
    _min: MeetingParticipantMinAggregateOutputType | null
    _max: MeetingParticipantMaxAggregateOutputType | null
  }

  type GetMeetingParticipantGroupByPayload<T extends MeetingParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingParticipantGroupByOutputType[P]>
        }
      >
    >


  export type MeetingParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rsvpStatus?: boolean
    meetingId?: boolean
    userId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rsvpStatus?: boolean
    meetingId?: boolean
    userId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rsvpStatus?: boolean
    meetingId?: boolean
    userId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectScalar = {
    id?: boolean
    rsvpStatus?: boolean
    meetingId?: boolean
    userId?: boolean
  }

  export type MeetingParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rsvpStatus" | "meetingId" | "userId", ExtArgs["result"]["meetingParticipant"]>
  export type MeetingParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingParticipant"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rsvpStatus: string | null
      meetingId: number
      userId: number
    }, ExtArgs["result"]["meetingParticipant"]>
    composites: {}
  }

  type MeetingParticipantGetPayload<S extends boolean | null | undefined | MeetingParticipantDefaultArgs> = $Result.GetResult<Prisma.$MeetingParticipantPayload, S>

  type MeetingParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingParticipantCountAggregateInputType | true
    }

  export interface MeetingParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingParticipant'], meta: { name: 'MeetingParticipant' } }
    /**
     * Find zero or one MeetingParticipant that matches the filter.
     * @param {MeetingParticipantFindUniqueArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingParticipantFindUniqueArgs>(args: SelectSubset<T, MeetingParticipantFindUniqueArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingParticipantFindUniqueOrThrowArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindFirstArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingParticipantFindFirstArgs>(args?: SelectSubset<T, MeetingParticipantFindFirstArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindFirstOrThrowArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingParticipants
     * const meetingParticipants = await prisma.meetingParticipant.findMany()
     * 
     * // Get first 10 MeetingParticipants
     * const meetingParticipants = await prisma.meetingParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingParticipantFindManyArgs>(args?: SelectSubset<T, MeetingParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingParticipant.
     * @param {MeetingParticipantCreateArgs} args - Arguments to create a MeetingParticipant.
     * @example
     * // Create one MeetingParticipant
     * const MeetingParticipant = await prisma.meetingParticipant.create({
     *   data: {
     *     // ... data to create a MeetingParticipant
     *   }
     * })
     * 
     */
    create<T extends MeetingParticipantCreateArgs>(args: SelectSubset<T, MeetingParticipantCreateArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingParticipants.
     * @param {MeetingParticipantCreateManyArgs} args - Arguments to create many MeetingParticipants.
     * @example
     * // Create many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingParticipantCreateManyArgs>(args?: SelectSubset<T, MeetingParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingParticipants and returns the data saved in the database.
     * @param {MeetingParticipantCreateManyAndReturnArgs} args - Arguments to create many MeetingParticipants.
     * @example
     * // Create many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingParticipants and only return the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingParticipant.
     * @param {MeetingParticipantDeleteArgs} args - Arguments to delete one MeetingParticipant.
     * @example
     * // Delete one MeetingParticipant
     * const MeetingParticipant = await prisma.meetingParticipant.delete({
     *   where: {
     *     // ... filter to delete one MeetingParticipant
     *   }
     * })
     * 
     */
    delete<T extends MeetingParticipantDeleteArgs>(args: SelectSubset<T, MeetingParticipantDeleteArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingParticipant.
     * @param {MeetingParticipantUpdateArgs} args - Arguments to update one MeetingParticipant.
     * @example
     * // Update one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingParticipantUpdateArgs>(args: SelectSubset<T, MeetingParticipantUpdateArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingParticipants.
     * @param {MeetingParticipantDeleteManyArgs} args - Arguments to filter MeetingParticipants to delete.
     * @example
     * // Delete a few MeetingParticipants
     * const { count } = await prisma.meetingParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingParticipantDeleteManyArgs>(args?: SelectSubset<T, MeetingParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingParticipantUpdateManyArgs>(args: SelectSubset<T, MeetingParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingParticipants and returns the data updated in the database.
     * @param {MeetingParticipantUpdateManyAndReturnArgs} args - Arguments to update many MeetingParticipants.
     * @example
     * // Update many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingParticipants and only return the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingParticipant.
     * @param {MeetingParticipantUpsertArgs} args - Arguments to update or create a MeetingParticipant.
     * @example
     * // Update or create a MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.upsert({
     *   create: {
     *     // ... data to create a MeetingParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingParticipant we want to update
     *   }
     * })
     */
    upsert<T extends MeetingParticipantUpsertArgs>(args: SelectSubset<T, MeetingParticipantUpsertArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantCountArgs} args - Arguments to filter MeetingParticipants to count.
     * @example
     * // Count the number of MeetingParticipants
     * const count = await prisma.meetingParticipant.count({
     *   where: {
     *     // ... the filter for the MeetingParticipants we want to count
     *   }
     * })
    **/
    count<T extends MeetingParticipantCountArgs>(
      args?: Subset<T, MeetingParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingParticipantAggregateArgs>(args: Subset<T, MeetingParticipantAggregateArgs>): Prisma.PrismaPromise<GetMeetingParticipantAggregateType<T>>

    /**
     * Group by MeetingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingParticipantGroupByArgs['orderBy'] }
        : { orderBy?: MeetingParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingParticipant model
   */
  readonly fields: MeetingParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingParticipant model
   */
  interface MeetingParticipantFieldRefs {
    readonly id: FieldRef<"MeetingParticipant", 'Int'>
    readonly rsvpStatus: FieldRef<"MeetingParticipant", 'String'>
    readonly meetingId: FieldRef<"MeetingParticipant", 'Int'>
    readonly userId: FieldRef<"MeetingParticipant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MeetingParticipant findUnique
   */
  export type MeetingParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant findUniqueOrThrow
   */
  export type MeetingParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant findFirst
   */
  export type MeetingParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingParticipants.
     */
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant findFirstOrThrow
   */
  export type MeetingParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingParticipants.
     */
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant findMany
   */
  export type MeetingParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipants to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant create
   */
  export type MeetingParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingParticipant.
     */
    data: XOR<MeetingParticipantCreateInput, MeetingParticipantUncheckedCreateInput>
  }

  /**
   * MeetingParticipant createMany
   */
  export type MeetingParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingParticipants.
     */
    data: MeetingParticipantCreateManyInput | MeetingParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingParticipant createManyAndReturn
   */
  export type MeetingParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingParticipants.
     */
    data: MeetingParticipantCreateManyInput | MeetingParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingParticipant update
   */
  export type MeetingParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingParticipant.
     */
    data: XOR<MeetingParticipantUpdateInput, MeetingParticipantUncheckedUpdateInput>
    /**
     * Choose, which MeetingParticipant to update.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant updateMany
   */
  export type MeetingParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingParticipants.
     */
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MeetingParticipants to update
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to update.
     */
    limit?: number
  }

  /**
   * MeetingParticipant updateManyAndReturn
   */
  export type MeetingParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * The data used to update MeetingParticipants.
     */
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MeetingParticipants to update
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingParticipant upsert
   */
  export type MeetingParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingParticipant to update in case it exists.
     */
    where: MeetingParticipantWhereUniqueInput
    /**
     * In case the MeetingParticipant found by the `where` argument doesn't exist, create a new MeetingParticipant with this data.
     */
    create: XOR<MeetingParticipantCreateInput, MeetingParticipantUncheckedCreateInput>
    /**
     * In case the MeetingParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingParticipantUpdateInput, MeetingParticipantUncheckedUpdateInput>
  }

  /**
   * MeetingParticipant delete
   */
  export type MeetingParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter which MeetingParticipant to delete.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant deleteMany
   */
  export type MeetingParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingParticipants to delete
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to delete.
     */
    limit?: number
  }

  /**
   * MeetingParticipant without action
   */
  export type MeetingParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    cognitoId: 'cognitoId',
    username: 'username',
    profilePictureUrl: 'profilePictureUrl',
    teamId: 'teamId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    productOwnerUserId: 'productOwnerUserId',
    projectManagerUserId: 'projectManagerUserId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    statusId: 'statusId',
    priorityId: 'priorityId',
    tags: 'tags',
    startDate: 'startDate',
    dueDate: 'dueDate',
    points: 'points',
    projectId: 'projectId',
    authorUserId: 'authorUserId',
    assignedUserId: 'assignedUserId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId'
  };

  export type TaskAssignmentScalarFieldEnum = (typeof TaskAssignmentScalarFieldEnum)[keyof typeof TaskAssignmentScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    fileURL: 'fileURL',
    fileName: 'fileName',
    taskId: 'taskId',
    uploadedById: 'uploadedById'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    taskId: 'taskId',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const TaskStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    orderIndex: 'orderIndex',
    description: 'description'
  };

  export type TaskStatusScalarFieldEnum = (typeof TaskStatusScalarFieldEnum)[keyof typeof TaskStatusScalarFieldEnum]


  export const TaskPriorityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    colorCode: 'colorCode',
    description: 'description'
  };

  export type TaskPriorityScalarFieldEnum = (typeof TaskPriorityScalarFieldEnum)[keyof typeof TaskPriorityScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    teamId: 'teamId',
    userId: 'userId'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    meetingURL: 'meetingURL',
    recordingURL: 'recordingURL',
    startTime: 'startTime',
    endTime: 'endTime',
    teamId: 'teamId',
    projectId: 'projectId',
    createById: 'createById'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const MeetingNoteScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createAt: 'createAt',
    meetingId: 'meetingId',
    authorId: 'authorId'
  };

  export type MeetingNoteScalarFieldEnum = (typeof MeetingNoteScalarFieldEnum)[keyof typeof MeetingNoteScalarFieldEnum]


  export const MeetingSummaryScalarFieldEnum: {
    id: 'id',
    content: 'content',
    aiModel: 'aiModel',
    createAt: 'createAt',
    meetingId: 'meetingId',
    createById: 'createById'
  };

  export type MeetingSummaryScalarFieldEnum = (typeof MeetingSummaryScalarFieldEnum)[keyof typeof MeetingSummaryScalarFieldEnum]


  export const MeetingParticipantScalarFieldEnum: {
    id: 'id',
    rsvpStatus: 'rsvpStatus',
    meetingId: 'meetingId',
    userId: 'userId'
  };

  export type MeetingParticipantScalarFieldEnum = (typeof MeetingParticipantScalarFieldEnum)[keyof typeof MeetingParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    cognitoId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    teamId?: IntNullableFilter<"User"> | number | null
    teamMemberships?: TeamMemberListRelationFilter
    taskAssignments?: TaskAssignmentListRelationFilter
    uploadedFiles?: AttachmentListRelationFilter
    comments?: CommentListRelationFilter
    createdMeetings?: MeetingListRelationFilter
    authoredNotes?: MeetingNoteListRelationFilter
    createdSummaries?: MeetingSummaryListRelationFilter
    attendedMeetings?: MeetingParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    cognitoId?: SortOrder
    username?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    teamMemberships?: TeamMemberOrderByRelationAggregateInput
    taskAssignments?: TaskAssignmentOrderByRelationAggregateInput
    uploadedFiles?: AttachmentOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    createdMeetings?: MeetingOrderByRelationAggregateInput
    authoredNotes?: MeetingNoteOrderByRelationAggregateInput
    createdSummaries?: MeetingSummaryOrderByRelationAggregateInput
    attendedMeetings?: MeetingParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    cognitoId?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    teamId?: IntNullableFilter<"User"> | number | null
    teamMemberships?: TeamMemberListRelationFilter
    taskAssignments?: TaskAssignmentListRelationFilter
    uploadedFiles?: AttachmentListRelationFilter
    comments?: CommentListRelationFilter
    createdMeetings?: MeetingListRelationFilter
    authoredNotes?: MeetingNoteListRelationFilter
    createdSummaries?: MeetingSummaryListRelationFilter
    attendedMeetings?: MeetingParticipantListRelationFilter
  }, "userId" | "cognitoId" | "username">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    cognitoId?: SortOrder
    username?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    cognitoId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    teamId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    teamName?: StringFilter<"Team"> | string
    productOwnerUserId?: IntNullableFilter<"Team"> | number | null
    projectManagerUserId?: IntNullableFilter<"Team"> | number | null
    meetings?: MeetingListRelationFilter
    members?: TeamMemberListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    productOwnerUserId?: SortOrderInput | SortOrder
    projectManagerUserId?: SortOrderInput | SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
    members?: TeamMemberOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    teamName?: StringFilter<"Team"> | string
    productOwnerUserId?: IntNullableFilter<"Team"> | number | null
    projectManagerUserId?: IntNullableFilter<"Team"> | number | null
    meetings?: MeetingListRelationFilter
    members?: TeamMemberListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    productOwnerUserId?: SortOrderInput | SortOrder
    projectManagerUserId?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    teamName?: StringWithAggregatesFilter<"Team"> | string
    productOwnerUserId?: IntNullableWithAggregatesFilter<"Team"> | number | null
    projectManagerUserId?: IntNullableWithAggregatesFilter<"Team"> | number | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    meetings?: MeetingListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    meetings?: MeetingListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    statusId?: IntNullableFilter<"Task"> | number | null
    priorityId?: IntNullableFilter<"Task"> | number | null
    tags?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    points?: IntNullableFilter<"Task"> | number | null
    projectId?: IntFilter<"Task"> | number
    authorUserId?: IntFilter<"Task"> | number
    assignedUserId?: IntNullableFilter<"Task"> | number | null
    statusRelation?: XOR<TaskStatusNullableScalarRelationFilter, TaskStatusWhereInput> | null
    priorityRelation?: XOR<TaskPriorityNullableScalarRelationFilter, TaskPriorityWhereInput> | null
    assignments?: TaskAssignmentListRelationFilter
    attachments?: AttachmentListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    statusId?: SortOrderInput | SortOrder
    priorityId?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrderInput | SortOrder
    statusRelation?: TaskStatusOrderByWithRelationInput
    priorityRelation?: TaskPriorityOrderByWithRelationInput
    assignments?: TaskAssignmentOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    statusId?: IntNullableFilter<"Task"> | number | null
    priorityId?: IntNullableFilter<"Task"> | number | null
    tags?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    points?: IntNullableFilter<"Task"> | number | null
    projectId?: IntFilter<"Task"> | number
    authorUserId?: IntFilter<"Task"> | number
    assignedUserId?: IntNullableFilter<"Task"> | number | null
    statusRelation?: XOR<TaskStatusNullableScalarRelationFilter, TaskStatusWhereInput> | null
    priorityRelation?: XOR<TaskPriorityNullableScalarRelationFilter, TaskPriorityWhereInput> | null
    assignments?: TaskAssignmentListRelationFilter
    attachments?: AttachmentListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    statusId?: SortOrderInput | SortOrder
    priorityId?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    statusId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    priorityId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    tags?: StringNullableWithAggregatesFilter<"Task"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    points?: IntNullableWithAggregatesFilter<"Task"> | number | null
    projectId?: IntWithAggregatesFilter<"Task"> | number
    authorUserId?: IntWithAggregatesFilter<"Task"> | number
    assignedUserId?: IntNullableWithAggregatesFilter<"Task"> | number | null
  }

  export type TaskAssignmentWhereInput = {
    AND?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    OR?: TaskAssignmentWhereInput[]
    NOT?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    id?: IntFilter<"TaskAssignment"> | number
    userId?: IntFilter<"TaskAssignment"> | number
    taskId?: IntFilter<"TaskAssignment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type TaskAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_taskId?: TaskAssignmentUserIdTaskIdCompoundUniqueInput
    AND?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    OR?: TaskAssignmentWhereInput[]
    NOT?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    userId?: IntFilter<"TaskAssignment"> | number
    taskId?: IntFilter<"TaskAssignment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id" | "userId_taskId">

  export type TaskAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    _count?: TaskAssignmentCountOrderByAggregateInput
    _avg?: TaskAssignmentAvgOrderByAggregateInput
    _max?: TaskAssignmentMaxOrderByAggregateInput
    _min?: TaskAssignmentMinOrderByAggregateInput
    _sum?: TaskAssignmentSumOrderByAggregateInput
  }

  export type TaskAssignmentScalarWhereWithAggregatesInput = {
    AND?: TaskAssignmentScalarWhereWithAggregatesInput | TaskAssignmentScalarWhereWithAggregatesInput[]
    OR?: TaskAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TaskAssignmentScalarWhereWithAggregatesInput | TaskAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskAssignment"> | number
    userId?: IntWithAggregatesFilter<"TaskAssignment"> | number
    taskId?: IntWithAggregatesFilter<"TaskAssignment"> | number
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: IntFilter<"Attachment"> | number
    fileURL?: StringFilter<"Attachment"> | string
    fileName?: StringNullableFilter<"Attachment"> | string | null
    taskId?: IntFilter<"Attachment"> | number
    uploadedById?: IntFilter<"Attachment"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    fileURL?: SortOrder
    fileName?: SortOrderInput | SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
    task?: TaskOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    fileURL?: StringFilter<"Attachment"> | string
    fileName?: StringNullableFilter<"Attachment"> | string | null
    taskId?: IntFilter<"Attachment"> | number
    uploadedById?: IntFilter<"Attachment"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    fileURL?: SortOrder
    fileName?: SortOrderInput | SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attachment"> | number
    fileURL?: StringWithAggregatesFilter<"Attachment"> | string
    fileName?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    taskId?: IntWithAggregatesFilter<"Attachment"> | number
    uploadedById?: IntWithAggregatesFilter<"Attachment"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    taskId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    taskId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    taskId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type TaskStatusWhereInput = {
    AND?: TaskStatusWhereInput | TaskStatusWhereInput[]
    OR?: TaskStatusWhereInput[]
    NOT?: TaskStatusWhereInput | TaskStatusWhereInput[]
    id?: IntFilter<"TaskStatus"> | number
    name?: StringFilter<"TaskStatus"> | string
    orderIndex?: IntFilter<"TaskStatus"> | number
    description?: StringNullableFilter<"TaskStatus"> | string | null
    tasks?: TaskListRelationFilter
  }

  export type TaskStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    description?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TaskStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TaskStatusWhereInput | TaskStatusWhereInput[]
    OR?: TaskStatusWhereInput[]
    NOT?: TaskStatusWhereInput | TaskStatusWhereInput[]
    orderIndex?: IntFilter<"TaskStatus"> | number
    description?: StringNullableFilter<"TaskStatus"> | string | null
    tasks?: TaskListRelationFilter
  }, "id" | "name">

  export type TaskStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TaskStatusCountOrderByAggregateInput
    _avg?: TaskStatusAvgOrderByAggregateInput
    _max?: TaskStatusMaxOrderByAggregateInput
    _min?: TaskStatusMinOrderByAggregateInput
    _sum?: TaskStatusSumOrderByAggregateInput
  }

  export type TaskStatusScalarWhereWithAggregatesInput = {
    AND?: TaskStatusScalarWhereWithAggregatesInput | TaskStatusScalarWhereWithAggregatesInput[]
    OR?: TaskStatusScalarWhereWithAggregatesInput[]
    NOT?: TaskStatusScalarWhereWithAggregatesInput | TaskStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskStatus"> | number
    name?: StringWithAggregatesFilter<"TaskStatus"> | string
    orderIndex?: IntWithAggregatesFilter<"TaskStatus"> | number
    description?: StringNullableWithAggregatesFilter<"TaskStatus"> | string | null
  }

  export type TaskPriorityWhereInput = {
    AND?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    OR?: TaskPriorityWhereInput[]
    NOT?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    id?: IntFilter<"TaskPriority"> | number
    name?: StringFilter<"TaskPriority"> | string
    colorCode?: StringNullableFilter<"TaskPriority"> | string | null
    description?: StringNullableFilter<"TaskPriority"> | string | null
    tasks?: TaskListRelationFilter
  }

  export type TaskPriorityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    colorCode?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TaskPriorityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    OR?: TaskPriorityWhereInput[]
    NOT?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    colorCode?: StringNullableFilter<"TaskPriority"> | string | null
    description?: StringNullableFilter<"TaskPriority"> | string | null
    tasks?: TaskListRelationFilter
  }, "id" | "name">

  export type TaskPriorityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    colorCode?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TaskPriorityCountOrderByAggregateInput
    _avg?: TaskPriorityAvgOrderByAggregateInput
    _max?: TaskPriorityMaxOrderByAggregateInput
    _min?: TaskPriorityMinOrderByAggregateInput
    _sum?: TaskPrioritySumOrderByAggregateInput
  }

  export type TaskPriorityScalarWhereWithAggregatesInput = {
    AND?: TaskPriorityScalarWhereWithAggregatesInput | TaskPriorityScalarWhereWithAggregatesInput[]
    OR?: TaskPriorityScalarWhereWithAggregatesInput[]
    NOT?: TaskPriorityScalarWhereWithAggregatesInput | TaskPriorityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskPriority"> | number
    name?: StringWithAggregatesFilter<"TaskPriority"> | string
    colorCode?: StringNullableWithAggregatesFilter<"TaskPriority"> | string | null
    description?: StringNullableWithAggregatesFilter<"TaskPriority"> | string | null
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    role?: StringNullableFilter<"TeamMember"> | string | null
    teamId?: IntFilter<"TeamMember"> | number
    userId?: IntFilter<"TeamMember"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamId_userId?: TeamMemberTeamIdUserIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    role?: StringNullableFilter<"TeamMember"> | string | null
    teamId?: IntFilter<"TeamMember"> | number
    userId?: IntFilter<"TeamMember"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "teamId_userId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamMember"> | number
    role?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    teamId?: IntWithAggregatesFilter<"TeamMember"> | number
    userId?: IntWithAggregatesFilter<"TeamMember"> | number
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: IntFilter<"Meeting"> | number
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    meetingURL?: StringNullableFilter<"Meeting"> | string | null
    recordingURL?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    teamId?: IntFilter<"Meeting"> | number
    projectId?: IntFilter<"Meeting"> | number
    createById?: IntFilter<"Meeting"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    notes?: MeetingNoteListRelationFilter
    summaries?: MeetingSummaryListRelationFilter
    participants?: MeetingParticipantListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    meetingURL?: SortOrderInput | SortOrder
    recordingURL?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
    team?: TeamOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    notes?: MeetingNoteOrderByRelationAggregateInput
    summaries?: MeetingSummaryOrderByRelationAggregateInput
    participants?: MeetingParticipantOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    meetingURL?: StringNullableFilter<"Meeting"> | string | null
    recordingURL?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    teamId?: IntFilter<"Meeting"> | number
    projectId?: IntFilter<"Meeting"> | number
    createById?: IntFilter<"Meeting"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    notes?: MeetingNoteListRelationFilter
    summaries?: MeetingSummaryListRelationFilter
    participants?: MeetingParticipantListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    meetingURL?: SortOrderInput | SortOrder
    recordingURL?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _avg?: MeetingAvgOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
    _sum?: MeetingSumOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meeting"> | number
    title?: StringWithAggregatesFilter<"Meeting"> | string
    description?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    meetingURL?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    recordingURL?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    teamId?: IntWithAggregatesFilter<"Meeting"> | number
    projectId?: IntWithAggregatesFilter<"Meeting"> | number
    createById?: IntWithAggregatesFilter<"Meeting"> | number
  }

  export type MeetingNoteWhereInput = {
    AND?: MeetingNoteWhereInput | MeetingNoteWhereInput[]
    OR?: MeetingNoteWhereInput[]
    NOT?: MeetingNoteWhereInput | MeetingNoteWhereInput[]
    id?: IntFilter<"MeetingNote"> | number
    content?: StringFilter<"MeetingNote"> | string
    createAt?: DateTimeFilter<"MeetingNote"> | Date | string
    meetingId?: IntFilter<"MeetingNote"> | number
    authorId?: IntFilter<"MeetingNote"> | number
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeetingNoteOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type MeetingNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeetingNoteWhereInput | MeetingNoteWhereInput[]
    OR?: MeetingNoteWhereInput[]
    NOT?: MeetingNoteWhereInput | MeetingNoteWhereInput[]
    content?: StringFilter<"MeetingNote"> | string
    createAt?: DateTimeFilter<"MeetingNote"> | Date | string
    meetingId?: IntFilter<"MeetingNote"> | number
    authorId?: IntFilter<"MeetingNote"> | number
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MeetingNoteOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
    _count?: MeetingNoteCountOrderByAggregateInput
    _avg?: MeetingNoteAvgOrderByAggregateInput
    _max?: MeetingNoteMaxOrderByAggregateInput
    _min?: MeetingNoteMinOrderByAggregateInput
    _sum?: MeetingNoteSumOrderByAggregateInput
  }

  export type MeetingNoteScalarWhereWithAggregatesInput = {
    AND?: MeetingNoteScalarWhereWithAggregatesInput | MeetingNoteScalarWhereWithAggregatesInput[]
    OR?: MeetingNoteScalarWhereWithAggregatesInput[]
    NOT?: MeetingNoteScalarWhereWithAggregatesInput | MeetingNoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MeetingNote"> | number
    content?: StringWithAggregatesFilter<"MeetingNote"> | string
    createAt?: DateTimeWithAggregatesFilter<"MeetingNote"> | Date | string
    meetingId?: IntWithAggregatesFilter<"MeetingNote"> | number
    authorId?: IntWithAggregatesFilter<"MeetingNote"> | number
  }

  export type MeetingSummaryWhereInput = {
    AND?: MeetingSummaryWhereInput | MeetingSummaryWhereInput[]
    OR?: MeetingSummaryWhereInput[]
    NOT?: MeetingSummaryWhereInput | MeetingSummaryWhereInput[]
    id?: IntFilter<"MeetingSummary"> | number
    content?: StringFilter<"MeetingSummary"> | string
    aiModel?: StringNullableFilter<"MeetingSummary"> | string | null
    createAt?: DateTimeFilter<"MeetingSummary"> | Date | string
    meetingId?: IntFilter<"MeetingSummary"> | number
    createById?: IntFilter<"MeetingSummary"> | number
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeetingSummaryOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    aiModel?: SortOrderInput | SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type MeetingSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    meetingId?: number
    AND?: MeetingSummaryWhereInput | MeetingSummaryWhereInput[]
    OR?: MeetingSummaryWhereInput[]
    NOT?: MeetingSummaryWhereInput | MeetingSummaryWhereInput[]
    content?: StringFilter<"MeetingSummary"> | string
    aiModel?: StringNullableFilter<"MeetingSummary"> | string | null
    createAt?: DateTimeFilter<"MeetingSummary"> | Date | string
    createById?: IntFilter<"MeetingSummary"> | number
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "meetingId">

  export type MeetingSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    aiModel?: SortOrderInput | SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
    _count?: MeetingSummaryCountOrderByAggregateInput
    _avg?: MeetingSummaryAvgOrderByAggregateInput
    _max?: MeetingSummaryMaxOrderByAggregateInput
    _min?: MeetingSummaryMinOrderByAggregateInput
    _sum?: MeetingSummarySumOrderByAggregateInput
  }

  export type MeetingSummaryScalarWhereWithAggregatesInput = {
    AND?: MeetingSummaryScalarWhereWithAggregatesInput | MeetingSummaryScalarWhereWithAggregatesInput[]
    OR?: MeetingSummaryScalarWhereWithAggregatesInput[]
    NOT?: MeetingSummaryScalarWhereWithAggregatesInput | MeetingSummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MeetingSummary"> | number
    content?: StringWithAggregatesFilter<"MeetingSummary"> | string
    aiModel?: StringNullableWithAggregatesFilter<"MeetingSummary"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"MeetingSummary"> | Date | string
    meetingId?: IntWithAggregatesFilter<"MeetingSummary"> | number
    createById?: IntWithAggregatesFilter<"MeetingSummary"> | number
  }

  export type MeetingParticipantWhereInput = {
    AND?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    OR?: MeetingParticipantWhereInput[]
    NOT?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    id?: IntFilter<"MeetingParticipant"> | number
    rsvpStatus?: StringNullableFilter<"MeetingParticipant"> | string | null
    meetingId?: IntFilter<"MeetingParticipant"> | number
    userId?: IntFilter<"MeetingParticipant"> | number
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeetingParticipantOrderByWithRelationInput = {
    id?: SortOrder
    rsvpStatus?: SortOrderInput | SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MeetingParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    meetingId_userId?: MeetingParticipantMeetingIdUserIdCompoundUniqueInput
    AND?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    OR?: MeetingParticipantWhereInput[]
    NOT?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    rsvpStatus?: StringNullableFilter<"MeetingParticipant"> | string | null
    meetingId?: IntFilter<"MeetingParticipant"> | number
    userId?: IntFilter<"MeetingParticipant"> | number
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "meetingId_userId">

  export type MeetingParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    rsvpStatus?: SortOrderInput | SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    _count?: MeetingParticipantCountOrderByAggregateInput
    _avg?: MeetingParticipantAvgOrderByAggregateInput
    _max?: MeetingParticipantMaxOrderByAggregateInput
    _min?: MeetingParticipantMinOrderByAggregateInput
    _sum?: MeetingParticipantSumOrderByAggregateInput
  }

  export type MeetingParticipantScalarWhereWithAggregatesInput = {
    AND?: MeetingParticipantScalarWhereWithAggregatesInput | MeetingParticipantScalarWhereWithAggregatesInput[]
    OR?: MeetingParticipantScalarWhereWithAggregatesInput[]
    NOT?: MeetingParticipantScalarWhereWithAggregatesInput | MeetingParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MeetingParticipant"> | number
    rsvpStatus?: StringNullableWithAggregatesFilter<"MeetingParticipant"> | string | null
    meetingId?: IntWithAggregatesFilter<"MeetingParticipant"> | number
    userId?: IntWithAggregatesFilter<"MeetingParticipant"> | number
  }

  export type UserCreateInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamCreateInput = {
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
    meetings?: MeetingCreateNestedManyWithoutTeamInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
    meetings?: MeetingUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    meetings?: MeetingUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    meetings?: MeetingUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
  }

  export type TeamUpdateManyMutationInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meetings?: MeetingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    meetings?: MeetingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: MeetingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: MeetingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    statusRelation?: TaskStatusCreateNestedOneWithoutTasksInput
    priorityRelation?: TaskPriorityCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    statusRelation?: TaskStatusUpdateOneWithoutTasksNestedInput
    priorityRelation?: TaskPriorityUpdateOneWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskAssignmentCreateInput = {
    user: UserCreateNestedOneWithoutTaskAssignmentsInput
    task: TaskCreateNestedOneWithoutAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateInput = {
    id?: number
    userId: number
    taskId: number
  }

  export type TaskAssignmentUpdateInput = {
    user?: UserUpdateOneRequiredWithoutTaskAssignmentsNestedInput
    task?: TaskUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskAssignmentCreateManyInput = {
    id?: number
    userId: number
    taskId: number
  }

  export type TaskAssignmentUpdateManyMutationInput = {

  }

  export type TaskAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentCreateInput = {
    fileURL: string
    fileName?: string | null
    task: TaskCreateNestedOneWithoutAttachmentsInput
    uploadedBy: UserCreateNestedOneWithoutUploadedFilesInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: number
    fileURL: string
    fileName?: string | null
    taskId: number
    uploadedById: number
  }

  export type AttachmentUpdateInput = {
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUpdateOneRequiredWithoutAttachmentsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutUploadedFilesNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: IntFieldUpdateOperationsInput | number
    uploadedById?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentCreateManyInput = {
    id?: number
    fileURL: string
    fileName?: string | null
    taskId: number
    uploadedById: number
  }

  export type AttachmentUpdateManyMutationInput = {
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: IntFieldUpdateOperationsInput | number
    uploadedById?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    text: string
    task: TaskCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    text: string
    taskId: number
    userId: number
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyInput = {
    id?: number
    text: string
    taskId: number
    userId: number
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskStatusCreateInput = {
    name: string
    orderIndex: number
    description?: string | null
    tasks?: TaskCreateNestedManyWithoutStatusRelationInput
  }

  export type TaskStatusUncheckedCreateInput = {
    id?: number
    name: string
    orderIndex: number
    description?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutStatusRelationInput
  }

  export type TaskStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutStatusRelationNestedInput
  }

  export type TaskStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutStatusRelationNestedInput
  }

  export type TaskStatusCreateManyInput = {
    id?: number
    name: string
    orderIndex: number
    description?: string | null
  }

  export type TaskStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskPriorityCreateInput = {
    name: string
    colorCode?: string | null
    description?: string | null
    tasks?: TaskCreateNestedManyWithoutPriorityRelationInput
  }

  export type TaskPriorityUncheckedCreateInput = {
    id?: number
    name: string
    colorCode?: string | null
    description?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutPriorityRelationInput
  }

  export type TaskPriorityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    colorCode?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutPriorityRelationNestedInput
  }

  export type TaskPriorityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    colorCode?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutPriorityRelationNestedInput
  }

  export type TaskPriorityCreateManyInput = {
    id?: number
    name: string
    colorCode?: string | null
    description?: string | null
  }

  export type TaskPriorityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    colorCode?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskPriorityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    colorCode?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberCreateInput = {
    role?: string | null
    team: TeamCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTeamMembershipsInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: number
    role?: string | null
    teamId: number
    userId: number
  }

  export type TeamMemberUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTeamMembershipsNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberCreateManyInput = {
    id?: number
    role?: string | null
    teamId: number
    userId: number
  }

  export type TeamMemberUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    team: TeamCreateNestedOneWithoutMeetingsInput
    project: ProjectCreateNestedOneWithoutMeetingsInput
    creator: UserCreateNestedOneWithoutCreatedMeetingsInput
    notes?: MeetingNoteCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
    createById: number
    notes?: MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMeetingsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    notes?: MeetingNoteUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
    notes?: MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
    createById: number
  }

  export type MeetingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingNoteCreateInput = {
    content: string
    createAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutNotesInput
    author: UserCreateNestedOneWithoutAuthoredNotesInput
  }

  export type MeetingNoteUncheckedCreateInput = {
    id?: number
    content: string
    createAt?: Date | string
    meetingId: number
    authorId: number
  }

  export type MeetingNoteUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutNotesNestedInput
    author?: UserUpdateOneRequiredWithoutAuthoredNotesNestedInput
  }

  export type MeetingNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingNoteCreateManyInput = {
    id?: number
    content: string
    createAt?: Date | string
    meetingId: number
    authorId: number
  }

  export type MeetingNoteUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingSummaryCreateInput = {
    content: string
    aiModel?: string | null
    createAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutSummariesInput
    creator: UserCreateNestedOneWithoutCreatedSummariesInput
  }

  export type MeetingSummaryUncheckedCreateInput = {
    id?: number
    content: string
    aiModel?: string | null
    createAt?: Date | string
    meetingId: number
    createById: number
  }

  export type MeetingSummaryUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutSummariesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedSummariesNestedInput
  }

  export type MeetingSummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingSummaryCreateManyInput = {
    id?: number
    content: string
    aiModel?: string | null
    createAt?: Date | string
    meetingId: number
    createById: number
  }

  export type MeetingSummaryUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingSummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingParticipantCreateInput = {
    rsvpStatus?: string | null
    meeting: MeetingCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutAttendedMeetingsInput
  }

  export type MeetingParticipantUncheckedCreateInput = {
    id?: number
    rsvpStatus?: string | null
    meetingId: number
    userId: number
  }

  export type MeetingParticipantUpdateInput = {
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    meeting?: MeetingUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutAttendedMeetingsNestedInput
  }

  export type MeetingParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingParticipantCreateManyInput = {
    id?: number
    rsvpStatus?: string | null
    meetingId: number
    userId: number
  }

  export type MeetingParticipantUpdateManyMutationInput = {
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type TaskAssignmentListRelationFilter = {
    every?: TaskAssignmentWhereInput
    some?: TaskAssignmentWhereInput
    none?: TaskAssignmentWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type MeetingNoteListRelationFilter = {
    every?: MeetingNoteWhereInput
    some?: MeetingNoteWhereInput
    none?: MeetingNoteWhereInput
  }

  export type MeetingSummaryListRelationFilter = {
    every?: MeetingSummaryWhereInput
    some?: MeetingSummaryWhereInput
    none?: MeetingSummaryWhereInput
  }

  export type MeetingParticipantListRelationFilter = {
    every?: MeetingParticipantWhereInput
    some?: MeetingParticipantWhereInput
    none?: MeetingParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    cognitoId?: SortOrder
    username?: SortOrder
    profilePictureUrl?: SortOrder
    teamId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    cognitoId?: SortOrder
    username?: SortOrder
    profilePictureUrl?: SortOrder
    teamId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    cognitoId?: SortOrder
    username?: SortOrder
    profilePictureUrl?: SortOrder
    teamId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    productOwnerUserId?: SortOrder
    projectManagerUserId?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    productOwnerUserId?: SortOrder
    projectManagerUserId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    productOwnerUserId?: SortOrder
    projectManagerUserId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    productOwnerUserId?: SortOrder
    projectManagerUserId?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    productOwnerUserId?: SortOrder
    projectManagerUserId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TaskStatusNullableScalarRelationFilter = {
    is?: TaskStatusWhereInput | null
    isNot?: TaskStatusWhereInput | null
  }

  export type TaskPriorityNullableScalarRelationFilter = {
    is?: TaskPriorityWhereInput | null
    isNot?: TaskPriorityWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
    priorityId?: SortOrder
    tags?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    points?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    statusId?: SortOrder
    priorityId?: SortOrder
    points?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
    priorityId?: SortOrder
    tags?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    points?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
    priorityId?: SortOrder
    tags?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    points?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    statusId?: SortOrder
    priorityId?: SortOrder
    points?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    assignedUserId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskAssignmentUserIdTaskIdCompoundUniqueInput = {
    userId: number
    taskId: number
  }

  export type TaskAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    fileURL?: SortOrder
    fileName?: SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileURL?: SortOrder
    fileName?: SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    fileURL?: SortOrder
    fileName?: SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    uploadedById?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    description?: SortOrder
  }

  export type TaskStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    orderIndex?: SortOrder
  }

  export type TaskStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    description?: SortOrder
  }

  export type TaskStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderIndex?: SortOrder
    description?: SortOrder
  }

  export type TaskStatusSumOrderByAggregateInput = {
    id?: SortOrder
    orderIndex?: SortOrder
  }

  export type TaskPriorityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    colorCode?: SortOrder
    description?: SortOrder
  }

  export type TaskPriorityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskPriorityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    colorCode?: SortOrder
    description?: SortOrder
  }

  export type TaskPriorityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    colorCode?: SortOrder
    description?: SortOrder
  }

  export type TaskPrioritySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberTeamIdUserIdCompoundUniqueInput = {
    teamId: number
    userId: number
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    meetingURL?: SortOrder
    recordingURL?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    meetingURL?: SortOrder
    recordingURL?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    meetingURL?: SortOrder
    recordingURL?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    projectId?: SortOrder
    createById?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type MeetingNoteCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
  }

  export type MeetingNoteAvgOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
  }

  export type MeetingNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
  }

  export type MeetingNoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
  }

  export type MeetingNoteSumOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    authorId?: SortOrder
  }

  export type MeetingSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    aiModel?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingSummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    aiModel?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    aiModel?: SortOrder
    createAt?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingSummarySumOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    createById?: SortOrder
  }

  export type MeetingParticipantMeetingIdUserIdCompoundUniqueInput = {
    meetingId: number
    userId: number
  }

  export type MeetingParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    rsvpStatus?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    rsvpStatus?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    rsvpStatus?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type MeetingParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TaskAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<AttachmentCreateWithoutUploadedByInput, AttachmentUncheckedCreateWithoutUploadedByInput> | AttachmentCreateWithoutUploadedByInput[] | AttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploadedByInput | AttachmentCreateOrConnectWithoutUploadedByInput[]
    createMany?: AttachmentCreateManyUploadedByInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MeetingCreateWithoutCreatorInput, MeetingUncheckedCreateWithoutCreatorInput> | MeetingCreateWithoutCreatorInput[] | MeetingUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatorInput | MeetingCreateOrConnectWithoutCreatorInput[]
    createMany?: MeetingCreateManyCreatorInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingNoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MeetingNoteCreateWithoutAuthorInput, MeetingNoteUncheckedCreateWithoutAuthorInput> | MeetingNoteCreateWithoutAuthorInput[] | MeetingNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutAuthorInput | MeetingNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: MeetingNoteCreateManyAuthorInputEnvelope
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
  }

  export type MeetingSummaryCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MeetingSummaryCreateWithoutCreatorInput, MeetingSummaryUncheckedCreateWithoutCreatorInput> | MeetingSummaryCreateWithoutCreatorInput[] | MeetingSummaryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutCreatorInput | MeetingSummaryCreateOrConnectWithoutCreatorInput[]
    createMany?: MeetingSummaryCreateManyCreatorInputEnvelope
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
  }

  export type MeetingParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TaskAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<AttachmentCreateWithoutUploadedByInput, AttachmentUncheckedCreateWithoutUploadedByInput> | AttachmentCreateWithoutUploadedByInput[] | AttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploadedByInput | AttachmentCreateOrConnectWithoutUploadedByInput[]
    createMany?: AttachmentCreateManyUploadedByInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MeetingCreateWithoutCreatorInput, MeetingUncheckedCreateWithoutCreatorInput> | MeetingCreateWithoutCreatorInput[] | MeetingUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatorInput | MeetingCreateOrConnectWithoutCreatorInput[]
    createMany?: MeetingCreateManyCreatorInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MeetingNoteCreateWithoutAuthorInput, MeetingNoteUncheckedCreateWithoutAuthorInput> | MeetingNoteCreateWithoutAuthorInput[] | MeetingNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutAuthorInput | MeetingNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: MeetingNoteCreateManyAuthorInputEnvelope
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
  }

  export type MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MeetingSummaryCreateWithoutCreatorInput, MeetingSummaryUncheckedCreateWithoutCreatorInput> | MeetingSummaryCreateWithoutCreatorInput[] | MeetingSummaryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutCreatorInput | MeetingSummaryCreateOrConnectWithoutCreatorInput[]
    createMany?: MeetingSummaryCreateManyCreatorInputEnvelope
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
  }

  export type MeetingParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TaskAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutUserInput | TaskAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<AttachmentCreateWithoutUploadedByInput, AttachmentUncheckedCreateWithoutUploadedByInput> | AttachmentCreateWithoutUploadedByInput[] | AttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploadedByInput | AttachmentCreateOrConnectWithoutUploadedByInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUploadedByInput | AttachmentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: AttachmentCreateManyUploadedByInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUploadedByInput | AttachmentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUploadedByInput | AttachmentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MeetingCreateWithoutCreatorInput, MeetingUncheckedCreateWithoutCreatorInput> | MeetingCreateWithoutCreatorInput[] | MeetingUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatorInput | MeetingCreateOrConnectWithoutCreatorInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCreatorInput | MeetingUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MeetingCreateManyCreatorInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCreatorInput | MeetingUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCreatorInput | MeetingUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingNoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MeetingNoteCreateWithoutAuthorInput, MeetingNoteUncheckedCreateWithoutAuthorInput> | MeetingNoteCreateWithoutAuthorInput[] | MeetingNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutAuthorInput | MeetingNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: MeetingNoteUpsertWithWhereUniqueWithoutAuthorInput | MeetingNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MeetingNoteCreateManyAuthorInputEnvelope
    set?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    disconnect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    delete?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    update?: MeetingNoteUpdateWithWhereUniqueWithoutAuthorInput | MeetingNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MeetingNoteUpdateManyWithWhereWithoutAuthorInput | MeetingNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MeetingNoteScalarWhereInput | MeetingNoteScalarWhereInput[]
  }

  export type MeetingSummaryUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MeetingSummaryCreateWithoutCreatorInput, MeetingSummaryUncheckedCreateWithoutCreatorInput> | MeetingSummaryCreateWithoutCreatorInput[] | MeetingSummaryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutCreatorInput | MeetingSummaryCreateOrConnectWithoutCreatorInput[]
    upsert?: MeetingSummaryUpsertWithWhereUniqueWithoutCreatorInput | MeetingSummaryUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MeetingSummaryCreateManyCreatorInputEnvelope
    set?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    disconnect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    delete?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    update?: MeetingSummaryUpdateWithWhereUniqueWithoutCreatorInput | MeetingSummaryUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MeetingSummaryUpdateManyWithWhereWithoutCreatorInput | MeetingSummaryUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MeetingSummaryScalarWhereInput | MeetingSummaryScalarWhereInput[]
  }

  export type MeetingParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutUserInput | MeetingParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutUserInput | MeetingParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutUserInput | MeetingParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutUserInput | TaskAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<AttachmentCreateWithoutUploadedByInput, AttachmentUncheckedCreateWithoutUploadedByInput> | AttachmentCreateWithoutUploadedByInput[] | AttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUploadedByInput | AttachmentCreateOrConnectWithoutUploadedByInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUploadedByInput | AttachmentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: AttachmentCreateManyUploadedByInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUploadedByInput | AttachmentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUploadedByInput | AttachmentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MeetingCreateWithoutCreatorInput, MeetingUncheckedCreateWithoutCreatorInput> | MeetingCreateWithoutCreatorInput[] | MeetingUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCreatorInput | MeetingCreateOrConnectWithoutCreatorInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCreatorInput | MeetingUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MeetingCreateManyCreatorInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCreatorInput | MeetingUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCreatorInput | MeetingUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MeetingNoteCreateWithoutAuthorInput, MeetingNoteUncheckedCreateWithoutAuthorInput> | MeetingNoteCreateWithoutAuthorInput[] | MeetingNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutAuthorInput | MeetingNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: MeetingNoteUpsertWithWhereUniqueWithoutAuthorInput | MeetingNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MeetingNoteCreateManyAuthorInputEnvelope
    set?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    disconnect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    delete?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    update?: MeetingNoteUpdateWithWhereUniqueWithoutAuthorInput | MeetingNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MeetingNoteUpdateManyWithWhereWithoutAuthorInput | MeetingNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MeetingNoteScalarWhereInput | MeetingNoteScalarWhereInput[]
  }

  export type MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MeetingSummaryCreateWithoutCreatorInput, MeetingSummaryUncheckedCreateWithoutCreatorInput> | MeetingSummaryCreateWithoutCreatorInput[] | MeetingSummaryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutCreatorInput | MeetingSummaryCreateOrConnectWithoutCreatorInput[]
    upsert?: MeetingSummaryUpsertWithWhereUniqueWithoutCreatorInput | MeetingSummaryUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MeetingSummaryCreateManyCreatorInputEnvelope
    set?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    disconnect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    delete?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    update?: MeetingSummaryUpdateWithWhereUniqueWithoutCreatorInput | MeetingSummaryUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MeetingSummaryUpdateManyWithWhereWithoutCreatorInput | MeetingSummaryUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MeetingSummaryScalarWhereInput | MeetingSummaryScalarWhereInput[]
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutUserInput | MeetingParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutUserInput | MeetingParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutUserInput | MeetingParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type MeetingCreateNestedManyWithoutTeamInput = {
    create?: XOR<MeetingCreateWithoutTeamInput, MeetingUncheckedCreateWithoutTeamInput> | MeetingCreateWithoutTeamInput[] | MeetingUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTeamInput | MeetingCreateOrConnectWithoutTeamInput[]
    createMany?: MeetingCreateManyTeamInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MeetingCreateWithoutTeamInput, MeetingUncheckedCreateWithoutTeamInput> | MeetingCreateWithoutTeamInput[] | MeetingUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTeamInput | MeetingCreateOrConnectWithoutTeamInput[]
    createMany?: MeetingCreateManyTeamInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type MeetingUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MeetingCreateWithoutTeamInput, MeetingUncheckedCreateWithoutTeamInput> | MeetingCreateWithoutTeamInput[] | MeetingUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTeamInput | MeetingCreateOrConnectWithoutTeamInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutTeamInput | MeetingUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MeetingCreateManyTeamInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutTeamInput | MeetingUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutTeamInput | MeetingUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MeetingCreateWithoutTeamInput, MeetingUncheckedCreateWithoutTeamInput> | MeetingCreateWithoutTeamInput[] | MeetingUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutTeamInput | MeetingCreateOrConnectWithoutTeamInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutTeamInput | MeetingUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MeetingCreateManyTeamInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutTeamInput | MeetingUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutTeamInput | MeetingUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type MeetingCreateNestedManyWithoutProjectInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MeetingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutProjectInput | MeetingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutProjectInput | MeetingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutProjectInput | MeetingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutProjectInput | MeetingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutProjectInput | MeetingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutProjectInput | MeetingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type TaskStatusCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskStatusCreateWithoutTasksInput, TaskStatusUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskStatusCreateOrConnectWithoutTasksInput
    connect?: TaskStatusWhereUniqueInput
  }

  export type TaskPriorityCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskPriorityCreateWithoutTasksInput, TaskPriorityUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskPriorityCreateOrConnectWithoutTasksInput
    connect?: TaskPriorityWhereUniqueInput
  }

  export type TaskAssignmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TaskStatusUpdateOneWithoutTasksNestedInput = {
    create?: XOR<TaskStatusCreateWithoutTasksInput, TaskStatusUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskStatusCreateOrConnectWithoutTasksInput
    upsert?: TaskStatusUpsertWithoutTasksInput
    disconnect?: TaskStatusWhereInput | boolean
    delete?: TaskStatusWhereInput | boolean
    connect?: TaskStatusWhereUniqueInput
    update?: XOR<XOR<TaskStatusUpdateToOneWithWhereWithoutTasksInput, TaskStatusUpdateWithoutTasksInput>, TaskStatusUncheckedUpdateWithoutTasksInput>
  }

  export type TaskPriorityUpdateOneWithoutTasksNestedInput = {
    create?: XOR<TaskPriorityCreateWithoutTasksInput, TaskPriorityUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskPriorityCreateOrConnectWithoutTasksInput
    upsert?: TaskPriorityUpsertWithoutTasksInput
    disconnect?: TaskPriorityWhereInput | boolean
    delete?: TaskPriorityWhereInput | boolean
    connect?: TaskPriorityWhereUniqueInput
    update?: XOR<XOR<TaskPriorityUpdateToOneWithWhereWithoutTasksInput, TaskPriorityUpdateWithoutTasksInput>, TaskPriorityUncheckedUpdateWithoutTasksInput>
  }

  export type TaskAssignmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutTaskInput | TaskAssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTaskInput | AttachmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTaskInput | AttachmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTaskInput | AttachmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutTaskInput | TaskAssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTaskInput | AttachmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTaskInput | AttachmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTaskInput | AttachmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTaskAssignmentsInput = {
    create?: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTaskAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskAssignmentsInput
    upsert?: UserUpsertWithoutTaskAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskAssignmentsInput, UserUpdateWithoutTaskAssignmentsInput>, UserUncheckedUpdateWithoutTaskAssignmentsInput>
  }

  export type TaskUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentsInput
    upsert?: TaskUpsertWithoutAssignmentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAssignmentsInput, TaskUpdateWithoutAssignmentsInput>, TaskUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TaskCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUploadedFilesInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput
    upsert?: TaskUpsertWithoutAttachmentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAttachmentsInput, TaskUpdateWithoutAttachmentsInput>, TaskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserUpdateOneRequiredWithoutUploadedFilesNestedInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    upsert?: UserUpsertWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedFilesInput, UserUpdateWithoutUploadedFilesInput>, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCommentsInput, TaskUpdateWithoutCommentsInput>, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskCreateNestedManyWithoutStatusRelationInput = {
    create?: XOR<TaskCreateWithoutStatusRelationInput, TaskUncheckedCreateWithoutStatusRelationInput> | TaskCreateWithoutStatusRelationInput[] | TaskUncheckedCreateWithoutStatusRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStatusRelationInput | TaskCreateOrConnectWithoutStatusRelationInput[]
    createMany?: TaskCreateManyStatusRelationInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutStatusRelationInput = {
    create?: XOR<TaskCreateWithoutStatusRelationInput, TaskUncheckedCreateWithoutStatusRelationInput> | TaskCreateWithoutStatusRelationInput[] | TaskUncheckedCreateWithoutStatusRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStatusRelationInput | TaskCreateOrConnectWithoutStatusRelationInput[]
    createMany?: TaskCreateManyStatusRelationInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutStatusRelationNestedInput = {
    create?: XOR<TaskCreateWithoutStatusRelationInput, TaskUncheckedCreateWithoutStatusRelationInput> | TaskCreateWithoutStatusRelationInput[] | TaskUncheckedCreateWithoutStatusRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStatusRelationInput | TaskCreateOrConnectWithoutStatusRelationInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStatusRelationInput | TaskUpsertWithWhereUniqueWithoutStatusRelationInput[]
    createMany?: TaskCreateManyStatusRelationInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStatusRelationInput | TaskUpdateWithWhereUniqueWithoutStatusRelationInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStatusRelationInput | TaskUpdateManyWithWhereWithoutStatusRelationInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutStatusRelationNestedInput = {
    create?: XOR<TaskCreateWithoutStatusRelationInput, TaskUncheckedCreateWithoutStatusRelationInput> | TaskCreateWithoutStatusRelationInput[] | TaskUncheckedCreateWithoutStatusRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStatusRelationInput | TaskCreateOrConnectWithoutStatusRelationInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStatusRelationInput | TaskUpsertWithWhereUniqueWithoutStatusRelationInput[]
    createMany?: TaskCreateManyStatusRelationInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStatusRelationInput | TaskUpdateWithWhereUniqueWithoutStatusRelationInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStatusRelationInput | TaskUpdateManyWithWhereWithoutStatusRelationInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutPriorityRelationInput = {
    create?: XOR<TaskCreateWithoutPriorityRelationInput, TaskUncheckedCreateWithoutPriorityRelationInput> | TaskCreateWithoutPriorityRelationInput[] | TaskUncheckedCreateWithoutPriorityRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPriorityRelationInput | TaskCreateOrConnectWithoutPriorityRelationInput[]
    createMany?: TaskCreateManyPriorityRelationInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutPriorityRelationInput = {
    create?: XOR<TaskCreateWithoutPriorityRelationInput, TaskUncheckedCreateWithoutPriorityRelationInput> | TaskCreateWithoutPriorityRelationInput[] | TaskUncheckedCreateWithoutPriorityRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPriorityRelationInput | TaskCreateOrConnectWithoutPriorityRelationInput[]
    createMany?: TaskCreateManyPriorityRelationInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutPriorityRelationNestedInput = {
    create?: XOR<TaskCreateWithoutPriorityRelationInput, TaskUncheckedCreateWithoutPriorityRelationInput> | TaskCreateWithoutPriorityRelationInput[] | TaskUncheckedCreateWithoutPriorityRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPriorityRelationInput | TaskCreateOrConnectWithoutPriorityRelationInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutPriorityRelationInput | TaskUpsertWithWhereUniqueWithoutPriorityRelationInput[]
    createMany?: TaskCreateManyPriorityRelationInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutPriorityRelationInput | TaskUpdateWithWhereUniqueWithoutPriorityRelationInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutPriorityRelationInput | TaskUpdateManyWithWhereWithoutPriorityRelationInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutPriorityRelationNestedInput = {
    create?: XOR<TaskCreateWithoutPriorityRelationInput, TaskUncheckedCreateWithoutPriorityRelationInput> | TaskCreateWithoutPriorityRelationInput[] | TaskUncheckedCreateWithoutPriorityRelationInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPriorityRelationInput | TaskCreateOrConnectWithoutPriorityRelationInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutPriorityRelationInput | TaskUpsertWithWhereUniqueWithoutPriorityRelationInput[]
    createMany?: TaskCreateManyPriorityRelationInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutPriorityRelationInput | TaskUpdateWithWhereUniqueWithoutPriorityRelationInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutPriorityRelationInput | TaskUpdateManyWithWhereWithoutPriorityRelationInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamMembershipsInput = {
    create?: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembershipsInput
    upsert?: UserUpsertWithoutTeamMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembershipsInput, UserUpdateWithoutTeamMembershipsInput>, UserUncheckedUpdateWithoutTeamMembershipsInput>
  }

  export type TeamCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<TeamCreateWithoutMeetingsInput, TeamUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMeetingsInput
    connect?: TeamWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMeetingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedMeetingsInput = {
    create?: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingNoteCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingNoteCreateWithoutMeetingInput, MeetingNoteUncheckedCreateWithoutMeetingInput> | MeetingNoteCreateWithoutMeetingInput[] | MeetingNoteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutMeetingInput | MeetingNoteCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingNoteCreateManyMeetingInputEnvelope
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
  }

  export type MeetingSummaryCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingSummaryCreateWithoutMeetingInput, MeetingSummaryUncheckedCreateWithoutMeetingInput> | MeetingSummaryCreateWithoutMeetingInput[] | MeetingSummaryUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutMeetingInput | MeetingSummaryCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingSummaryCreateManyMeetingInputEnvelope
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
  }

  export type MeetingParticipantCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingNoteCreateWithoutMeetingInput, MeetingNoteUncheckedCreateWithoutMeetingInput> | MeetingNoteCreateWithoutMeetingInput[] | MeetingNoteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutMeetingInput | MeetingNoteCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingNoteCreateManyMeetingInputEnvelope
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
  }

  export type MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingSummaryCreateWithoutMeetingInput, MeetingSummaryUncheckedCreateWithoutMeetingInput> | MeetingSummaryCreateWithoutMeetingInput[] | MeetingSummaryUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutMeetingInput | MeetingSummaryCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingSummaryCreateManyMeetingInputEnvelope
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
  }

  export type MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<TeamCreateWithoutMeetingsInput, TeamUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMeetingsInput
    upsert?: TeamUpsertWithoutMeetingsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMeetingsInput, TeamUpdateWithoutMeetingsInput>, TeamUncheckedUpdateWithoutMeetingsInput>
  }

  export type ProjectUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMeetingsInput
    upsert?: ProjectUpsertWithoutMeetingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMeetingsInput, ProjectUpdateWithoutMeetingsInput>, ProjectUncheckedUpdateWithoutMeetingsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMeetingsInput
    upsert?: UserUpsertWithoutCreatedMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMeetingsInput, UserUpdateWithoutCreatedMeetingsInput>, UserUncheckedUpdateWithoutCreatedMeetingsInput>
  }

  export type MeetingNoteUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingNoteCreateWithoutMeetingInput, MeetingNoteUncheckedCreateWithoutMeetingInput> | MeetingNoteCreateWithoutMeetingInput[] | MeetingNoteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutMeetingInput | MeetingNoteCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingNoteUpsertWithWhereUniqueWithoutMeetingInput | MeetingNoteUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingNoteCreateManyMeetingInputEnvelope
    set?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    disconnect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    delete?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    update?: MeetingNoteUpdateWithWhereUniqueWithoutMeetingInput | MeetingNoteUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingNoteUpdateManyWithWhereWithoutMeetingInput | MeetingNoteUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingNoteScalarWhereInput | MeetingNoteScalarWhereInput[]
  }

  export type MeetingSummaryUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingSummaryCreateWithoutMeetingInput, MeetingSummaryUncheckedCreateWithoutMeetingInput> | MeetingSummaryCreateWithoutMeetingInput[] | MeetingSummaryUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutMeetingInput | MeetingSummaryCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingSummaryUpsertWithWhereUniqueWithoutMeetingInput | MeetingSummaryUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingSummaryCreateManyMeetingInputEnvelope
    set?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    disconnect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    delete?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    update?: MeetingSummaryUpdateWithWhereUniqueWithoutMeetingInput | MeetingSummaryUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingSummaryUpdateManyWithWhereWithoutMeetingInput | MeetingSummaryUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingSummaryScalarWhereInput | MeetingSummaryScalarWhereInput[]
  }

  export type MeetingParticipantUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutMeetingInput | MeetingParticipantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingNoteCreateWithoutMeetingInput, MeetingNoteUncheckedCreateWithoutMeetingInput> | MeetingNoteCreateWithoutMeetingInput[] | MeetingNoteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingNoteCreateOrConnectWithoutMeetingInput | MeetingNoteCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingNoteUpsertWithWhereUniqueWithoutMeetingInput | MeetingNoteUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingNoteCreateManyMeetingInputEnvelope
    set?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    disconnect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    delete?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    connect?: MeetingNoteWhereUniqueInput | MeetingNoteWhereUniqueInput[]
    update?: MeetingNoteUpdateWithWhereUniqueWithoutMeetingInput | MeetingNoteUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingNoteUpdateManyWithWhereWithoutMeetingInput | MeetingNoteUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingNoteScalarWhereInput | MeetingNoteScalarWhereInput[]
  }

  export type MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingSummaryCreateWithoutMeetingInput, MeetingSummaryUncheckedCreateWithoutMeetingInput> | MeetingSummaryCreateWithoutMeetingInput[] | MeetingSummaryUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingSummaryCreateOrConnectWithoutMeetingInput | MeetingSummaryCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingSummaryUpsertWithWhereUniqueWithoutMeetingInput | MeetingSummaryUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingSummaryCreateManyMeetingInputEnvelope
    set?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    disconnect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    delete?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    connect?: MeetingSummaryWhereUniqueInput | MeetingSummaryWhereUniqueInput[]
    update?: MeetingSummaryUpdateWithWhereUniqueWithoutMeetingInput | MeetingSummaryUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingSummaryUpdateManyWithWhereWithoutMeetingInput | MeetingSummaryUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingSummaryScalarWhereInput | MeetingSummaryScalarWhereInput[]
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutMeetingInput | MeetingParticipantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type MeetingCreateNestedOneWithoutNotesInput = {
    create?: XOR<MeetingCreateWithoutNotesInput, MeetingUncheckedCreateWithoutNotesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutNotesInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuthoredNotesInput = {
    create?: XOR<UserCreateWithoutAuthoredNotesInput, UserUncheckedCreateWithoutAuthoredNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredNotesInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<MeetingCreateWithoutNotesInput, MeetingUncheckedCreateWithoutNotesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutNotesInput
    upsert?: MeetingUpsertWithoutNotesInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutNotesInput, MeetingUpdateWithoutNotesInput>, MeetingUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutAuthoredNotesNestedInput = {
    create?: XOR<UserCreateWithoutAuthoredNotesInput, UserUncheckedCreateWithoutAuthoredNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredNotesInput
    upsert?: UserUpsertWithoutAuthoredNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthoredNotesInput, UserUpdateWithoutAuthoredNotesInput>, UserUncheckedUpdateWithoutAuthoredNotesInput>
  }

  export type MeetingCreateNestedOneWithoutSummariesInput = {
    create?: XOR<MeetingCreateWithoutSummariesInput, MeetingUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutSummariesInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedSummariesInput = {
    create?: XOR<UserCreateWithoutCreatedSummariesInput, UserUncheckedCreateWithoutCreatedSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSummariesInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutSummariesNestedInput = {
    create?: XOR<MeetingCreateWithoutSummariesInput, MeetingUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutSummariesInput
    upsert?: MeetingUpsertWithoutSummariesInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutSummariesInput, MeetingUpdateWithoutSummariesInput>, MeetingUncheckedUpdateWithoutSummariesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedSummariesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSummariesInput, UserUncheckedCreateWithoutCreatedSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSummariesInput
    upsert?: UserUpsertWithoutCreatedSummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSummariesInput, UserUpdateWithoutCreatedSummariesInput>, UserUncheckedUpdateWithoutCreatedSummariesInput>
  }

  export type MeetingCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutParticipantsInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendedMeetingsInput = {
    create?: XOR<UserCreateWithoutAttendedMeetingsInput, UserUncheckedCreateWithoutAttendedMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendedMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutParticipantsInput
    upsert?: MeetingUpsertWithoutParticipantsInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutParticipantsInput, MeetingUpdateWithoutParticipantsInput>, MeetingUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutAttendedMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutAttendedMeetingsInput, UserUncheckedCreateWithoutAttendedMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendedMeetingsInput
    upsert?: UserUpsertWithoutAttendedMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendedMeetingsInput, UserUpdateWithoutAttendedMeetingsInput>, UserUncheckedUpdateWithoutAttendedMeetingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeamMemberCreateWithoutUserInput = {
    role?: string | null
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: number
    role?: string | null
    teamId: number
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskAssignmentCreateWithoutUserInput = {
    task: TaskCreateNestedOneWithoutAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateWithoutUserInput = {
    id?: number
    taskId: number
  }

  export type TaskAssignmentCreateOrConnectWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    create: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput>
  }

  export type TaskAssignmentCreateManyUserInputEnvelope = {
    data: TaskAssignmentCreateManyUserInput | TaskAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutUploadedByInput = {
    fileURL: string
    fileName?: string | null
    task: TaskCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutUploadedByInput = {
    id?: number
    fileURL: string
    fileName?: string | null
    taskId: number
  }

  export type AttachmentCreateOrConnectWithoutUploadedByInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutUploadedByInput, AttachmentUncheckedCreateWithoutUploadedByInput>
  }

  export type AttachmentCreateManyUploadedByInputEnvelope = {
    data: AttachmentCreateManyUploadedByInput | AttachmentCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    text: string
    task: TaskCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    text: string
    taskId: number
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutCreatorInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    team: TeamCreateNestedOneWithoutMeetingsInput
    project: ProjectCreateNestedOneWithoutMeetingsInput
    notes?: MeetingNoteCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutCreatorInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
    notes?: MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutCreatorInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutCreatorInput, MeetingUncheckedCreateWithoutCreatorInput>
  }

  export type MeetingCreateManyCreatorInputEnvelope = {
    data: MeetingCreateManyCreatorInput | MeetingCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MeetingNoteCreateWithoutAuthorInput = {
    content: string
    createAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutNotesInput
  }

  export type MeetingNoteUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    createAt?: Date | string
    meetingId: number
  }

  export type MeetingNoteCreateOrConnectWithoutAuthorInput = {
    where: MeetingNoteWhereUniqueInput
    create: XOR<MeetingNoteCreateWithoutAuthorInput, MeetingNoteUncheckedCreateWithoutAuthorInput>
  }

  export type MeetingNoteCreateManyAuthorInputEnvelope = {
    data: MeetingNoteCreateManyAuthorInput | MeetingNoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type MeetingSummaryCreateWithoutCreatorInput = {
    content: string
    aiModel?: string | null
    createAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutSummariesInput
  }

  export type MeetingSummaryUncheckedCreateWithoutCreatorInput = {
    id?: number
    content: string
    aiModel?: string | null
    createAt?: Date | string
    meetingId: number
  }

  export type MeetingSummaryCreateOrConnectWithoutCreatorInput = {
    where: MeetingSummaryWhereUniqueInput
    create: XOR<MeetingSummaryCreateWithoutCreatorInput, MeetingSummaryUncheckedCreateWithoutCreatorInput>
  }

  export type MeetingSummaryCreateManyCreatorInputEnvelope = {
    data: MeetingSummaryCreateManyCreatorInput | MeetingSummaryCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MeetingParticipantCreateWithoutUserInput = {
    rsvpStatus?: string | null
    meeting: MeetingCreateNestedOneWithoutParticipantsInput
  }

  export type MeetingParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    rsvpStatus?: string | null
    meetingId: number
  }

  export type MeetingParticipantCreateOrConnectWithoutUserInput = {
    where: MeetingParticipantWhereUniqueInput
    create: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput>
  }

  export type MeetingParticipantCreateManyUserInputEnvelope = {
    data: MeetingParticipantCreateManyUserInput | MeetingParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    role?: StringNullableFilter<"TeamMember"> | string | null
    teamId?: IntFilter<"TeamMember"> | number
    userId?: IntFilter<"TeamMember"> | number
  }

  export type TaskAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    update: XOR<TaskAssignmentUpdateWithoutUserInput, TaskAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput>
  }

  export type TaskAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    data: XOR<TaskAssignmentUpdateWithoutUserInput, TaskAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type TaskAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: TaskAssignmentScalarWhereInput
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskAssignmentScalarWhereInput = {
    AND?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
    OR?: TaskAssignmentScalarWhereInput[]
    NOT?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
    id?: IntFilter<"TaskAssignment"> | number
    userId?: IntFilter<"TaskAssignment"> | number
    taskId?: IntFilter<"TaskAssignment"> | number
  }

  export type AttachmentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutUploadedByInput, AttachmentUncheckedUpdateWithoutUploadedByInput>
    create: XOR<AttachmentCreateWithoutUploadedByInput, AttachmentUncheckedCreateWithoutUploadedByInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutUploadedByInput, AttachmentUncheckedUpdateWithoutUploadedByInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutUploadedByInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: IntFilter<"Attachment"> | number
    fileURL?: StringFilter<"Attachment"> | string
    fileName?: StringNullableFilter<"Attachment"> | string | null
    taskId?: IntFilter<"Attachment"> | number
    uploadedById?: IntFilter<"Attachment"> | number
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    taskId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
  }

  export type MeetingUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutCreatorInput, MeetingUncheckedUpdateWithoutCreatorInput>
    create: XOR<MeetingCreateWithoutCreatorInput, MeetingUncheckedCreateWithoutCreatorInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutCreatorInput, MeetingUncheckedUpdateWithoutCreatorInput>
  }

  export type MeetingUpdateManyWithWhereWithoutCreatorInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: IntFilter<"Meeting"> | number
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    meetingURL?: StringNullableFilter<"Meeting"> | string | null
    recordingURL?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    teamId?: IntFilter<"Meeting"> | number
    projectId?: IntFilter<"Meeting"> | number
    createById?: IntFilter<"Meeting"> | number
  }

  export type MeetingNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MeetingNoteWhereUniqueInput
    update: XOR<MeetingNoteUpdateWithoutAuthorInput, MeetingNoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<MeetingNoteCreateWithoutAuthorInput, MeetingNoteUncheckedCreateWithoutAuthorInput>
  }

  export type MeetingNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MeetingNoteWhereUniqueInput
    data: XOR<MeetingNoteUpdateWithoutAuthorInput, MeetingNoteUncheckedUpdateWithoutAuthorInput>
  }

  export type MeetingNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: MeetingNoteScalarWhereInput
    data: XOR<MeetingNoteUpdateManyMutationInput, MeetingNoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type MeetingNoteScalarWhereInput = {
    AND?: MeetingNoteScalarWhereInput | MeetingNoteScalarWhereInput[]
    OR?: MeetingNoteScalarWhereInput[]
    NOT?: MeetingNoteScalarWhereInput | MeetingNoteScalarWhereInput[]
    id?: IntFilter<"MeetingNote"> | number
    content?: StringFilter<"MeetingNote"> | string
    createAt?: DateTimeFilter<"MeetingNote"> | Date | string
    meetingId?: IntFilter<"MeetingNote"> | number
    authorId?: IntFilter<"MeetingNote"> | number
  }

  export type MeetingSummaryUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MeetingSummaryWhereUniqueInput
    update: XOR<MeetingSummaryUpdateWithoutCreatorInput, MeetingSummaryUncheckedUpdateWithoutCreatorInput>
    create: XOR<MeetingSummaryCreateWithoutCreatorInput, MeetingSummaryUncheckedCreateWithoutCreatorInput>
  }

  export type MeetingSummaryUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MeetingSummaryWhereUniqueInput
    data: XOR<MeetingSummaryUpdateWithoutCreatorInput, MeetingSummaryUncheckedUpdateWithoutCreatorInput>
  }

  export type MeetingSummaryUpdateManyWithWhereWithoutCreatorInput = {
    where: MeetingSummaryScalarWhereInput
    data: XOR<MeetingSummaryUpdateManyMutationInput, MeetingSummaryUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MeetingSummaryScalarWhereInput = {
    AND?: MeetingSummaryScalarWhereInput | MeetingSummaryScalarWhereInput[]
    OR?: MeetingSummaryScalarWhereInput[]
    NOT?: MeetingSummaryScalarWhereInput | MeetingSummaryScalarWhereInput[]
    id?: IntFilter<"MeetingSummary"> | number
    content?: StringFilter<"MeetingSummary"> | string
    aiModel?: StringNullableFilter<"MeetingSummary"> | string | null
    createAt?: DateTimeFilter<"MeetingSummary"> | Date | string
    meetingId?: IntFilter<"MeetingSummary"> | number
    createById?: IntFilter<"MeetingSummary"> | number
  }

  export type MeetingParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: MeetingParticipantWhereUniqueInput
    update: XOR<MeetingParticipantUpdateWithoutUserInput, MeetingParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput>
  }

  export type MeetingParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: MeetingParticipantWhereUniqueInput
    data: XOR<MeetingParticipantUpdateWithoutUserInput, MeetingParticipantUncheckedUpdateWithoutUserInput>
  }

  export type MeetingParticipantUpdateManyWithWhereWithoutUserInput = {
    where: MeetingParticipantScalarWhereInput
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type MeetingParticipantScalarWhereInput = {
    AND?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
    OR?: MeetingParticipantScalarWhereInput[]
    NOT?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
    id?: IntFilter<"MeetingParticipant"> | number
    rsvpStatus?: StringNullableFilter<"MeetingParticipant"> | string | null
    meetingId?: IntFilter<"MeetingParticipant"> | number
    userId?: IntFilter<"MeetingParticipant"> | number
  }

  export type MeetingCreateWithoutTeamInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    project: ProjectCreateNestedOneWithoutMeetingsInput
    creator: UserCreateNestedOneWithoutCreatedMeetingsInput
    notes?: MeetingNoteCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutTeamInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    projectId: number
    createById: number
    notes?: MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutTeamInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutTeamInput, MeetingUncheckedCreateWithoutTeamInput>
  }

  export type MeetingCreateManyTeamInputEnvelope = {
    data: MeetingCreateManyTeamInput | MeetingCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutTeamInput = {
    role?: string | null
    user: UserCreateNestedOneWithoutTeamMembershipsInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: number
    role?: string | null
    userId: number
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutTeamInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutTeamInput, MeetingUncheckedUpdateWithoutTeamInput>
    create: XOR<MeetingCreateWithoutTeamInput, MeetingUncheckedCreateWithoutTeamInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutTeamInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutTeamInput, MeetingUncheckedUpdateWithoutTeamInput>
  }

  export type MeetingUpdateManyWithWhereWithoutTeamInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type MeetingCreateWithoutProjectInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    team: TeamCreateNestedOneWithoutMeetingsInput
    creator: UserCreateNestedOneWithoutCreatedMeetingsInput
    notes?: MeetingNoteCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    createById: number
    notes?: MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutProjectInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput>
  }

  export type MeetingCreateManyProjectInputEnvelope = {
    data: MeetingCreateManyProjectInput | MeetingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutProjectInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutProjectInput, MeetingUncheckedUpdateWithoutProjectInput>
    create: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutProjectInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutProjectInput, MeetingUncheckedUpdateWithoutProjectInput>
  }

  export type MeetingUpdateManyWithWhereWithoutProjectInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutProjectInput>
  }

  export type TaskStatusCreateWithoutTasksInput = {
    name: string
    orderIndex: number
    description?: string | null
  }

  export type TaskStatusUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    orderIndex: number
    description?: string | null
  }

  export type TaskStatusCreateOrConnectWithoutTasksInput = {
    where: TaskStatusWhereUniqueInput
    create: XOR<TaskStatusCreateWithoutTasksInput, TaskStatusUncheckedCreateWithoutTasksInput>
  }

  export type TaskPriorityCreateWithoutTasksInput = {
    name: string
    colorCode?: string | null
    description?: string | null
  }

  export type TaskPriorityUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    colorCode?: string | null
    description?: string | null
  }

  export type TaskPriorityCreateOrConnectWithoutTasksInput = {
    where: TaskPriorityWhereUniqueInput
    create: XOR<TaskPriorityCreateWithoutTasksInput, TaskPriorityUncheckedCreateWithoutTasksInput>
  }

  export type TaskAssignmentCreateWithoutTaskInput = {
    user: UserCreateNestedOneWithoutTaskAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateWithoutTaskInput = {
    id?: number
    userId: number
  }

  export type TaskAssignmentCreateOrConnectWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    create: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAssignmentCreateManyTaskInputEnvelope = {
    data: TaskAssignmentCreateManyTaskInput | TaskAssignmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutTaskInput = {
    fileURL: string
    fileName?: string | null
    uploadedBy: UserCreateNestedOneWithoutUploadedFilesInput
  }

  export type AttachmentUncheckedCreateWithoutTaskInput = {
    id?: number
    fileURL: string
    fileName?: string | null
    uploadedById: number
  }

  export type AttachmentCreateOrConnectWithoutTaskInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput>
  }

  export type AttachmentCreateManyTaskInputEnvelope = {
    data: AttachmentCreateManyTaskInput | AttachmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutTaskInput = {
    text: string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTaskInput = {
    id?: number
    text: string
    userId: number
  }

  export type CommentCreateOrConnectWithoutTaskInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentCreateManyTaskInputEnvelope = {
    data: CommentCreateManyTaskInput | CommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskStatusUpsertWithoutTasksInput = {
    update: XOR<TaskStatusUpdateWithoutTasksInput, TaskStatusUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskStatusCreateWithoutTasksInput, TaskStatusUncheckedCreateWithoutTasksInput>
    where?: TaskStatusWhereInput
  }

  export type TaskStatusUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskStatusWhereInput
    data: XOR<TaskStatusUpdateWithoutTasksInput, TaskStatusUncheckedUpdateWithoutTasksInput>
  }

  export type TaskStatusUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskStatusUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskPriorityUpsertWithoutTasksInput = {
    update: XOR<TaskPriorityUpdateWithoutTasksInput, TaskPriorityUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskPriorityCreateWithoutTasksInput, TaskPriorityUncheckedCreateWithoutTasksInput>
    where?: TaskPriorityWhereInput
  }

  export type TaskPriorityUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskPriorityWhereInput
    data: XOR<TaskPriorityUpdateWithoutTasksInput, TaskPriorityUncheckedUpdateWithoutTasksInput>
  }

  export type TaskPriorityUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    colorCode?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskPriorityUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    colorCode?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    update: XOR<TaskAssignmentUpdateWithoutTaskInput, TaskAssignmentUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    data: XOR<TaskAssignmentUpdateWithoutTaskInput, TaskAssignmentUncheckedUpdateWithoutTaskInput>
  }

  export type TaskAssignmentUpdateManyWithWhereWithoutTaskInput = {
    where: TaskAssignmentScalarWhereInput
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTaskInput, AttachmentUncheckedUpdateWithoutTaskInput>
    create: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTaskInput, AttachmentUncheckedUpdateWithoutTaskInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTaskInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
  }

  export type CommentUpdateManyWithWhereWithoutTaskInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserCreateWithoutTaskAssignmentsInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskAssignmentsInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
  }

  export type TaskCreateWithoutAssignmentsInput = {
    title: string
    description?: string | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    statusRelation?: TaskStatusCreateNestedOneWithoutTasksInput
    priorityRelation?: TaskPriorityCreateNestedOneWithoutTasksInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignmentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserUpsertWithoutTaskAssignmentsInput = {
    update: XOR<UserUpdateWithoutTaskAssignmentsInput, UserUncheckedUpdateWithoutTaskAssignmentsInput>
    create: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskAssignmentsInput, UserUncheckedUpdateWithoutTaskAssignmentsInput>
  }

  export type UserUpdateWithoutTaskAssignmentsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskAssignmentsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutAssignmentsInput = {
    update: XOR<TaskUpdateWithoutAssignmentsInput, TaskUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAssignmentsInput, TaskUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TaskUpdateWithoutAssignmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    statusRelation?: TaskStatusUpdateOneWithoutTasksNestedInput
    priorityRelation?: TaskPriorityUpdateOneWithoutTasksNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutAttachmentsInput = {
    title: string
    description?: string | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    statusRelation?: TaskStatusCreateNestedOneWithoutTasksInput
    priorityRelation?: TaskPriorityCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAttachmentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
  }

  export type UserCreateWithoutUploadedFilesInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploadedFilesInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploadedFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
  }

  export type TaskUpsertWithoutAttachmentsInput = {
    update: XOR<TaskUpdateWithoutAttachmentsInput, TaskUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAttachmentsInput, TaskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TaskUpdateWithoutAttachmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    statusRelation?: TaskStatusUpdateOneWithoutTasksNestedInput
    priorityRelation?: TaskPriorityUpdateOneWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutUploadedFilesInput = {
    update: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type UserUpdateWithoutUploadedFilesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedFilesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    statusRelation?: TaskStatusCreateNestedOneWithoutTasksInput
    priorityRelation?: TaskPriorityCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    statusRelation?: TaskStatusUpdateOneWithoutTasksNestedInput
    priorityRelation?: TaskPriorityUpdateOneWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateWithoutStatusRelationInput = {
    title: string
    description?: string | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    priorityRelation?: TaskPriorityCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStatusRelationInput = {
    id?: number
    title: string
    description?: string | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStatusRelationInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStatusRelationInput, TaskUncheckedCreateWithoutStatusRelationInput>
  }

  export type TaskCreateManyStatusRelationInputEnvelope = {
    data: TaskCreateManyStatusRelationInput | TaskCreateManyStatusRelationInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutStatusRelationInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutStatusRelationInput, TaskUncheckedUpdateWithoutStatusRelationInput>
    create: XOR<TaskCreateWithoutStatusRelationInput, TaskUncheckedCreateWithoutStatusRelationInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutStatusRelationInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutStatusRelationInput, TaskUncheckedUpdateWithoutStatusRelationInput>
  }

  export type TaskUpdateManyWithWhereWithoutStatusRelationInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutStatusRelationInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    statusId?: IntNullableFilter<"Task"> | number | null
    priorityId?: IntNullableFilter<"Task"> | number | null
    tags?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    points?: IntNullableFilter<"Task"> | number | null
    projectId?: IntFilter<"Task"> | number
    authorUserId?: IntFilter<"Task"> | number
    assignedUserId?: IntNullableFilter<"Task"> | number | null
  }

  export type TaskCreateWithoutPriorityRelationInput = {
    title: string
    description?: string | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    statusRelation?: TaskStatusCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutPriorityRelationInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutPriorityRelationInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutPriorityRelationInput, TaskUncheckedCreateWithoutPriorityRelationInput>
  }

  export type TaskCreateManyPriorityRelationInputEnvelope = {
    data: TaskCreateManyPriorityRelationInput | TaskCreateManyPriorityRelationInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutPriorityRelationInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutPriorityRelationInput, TaskUncheckedUpdateWithoutPriorityRelationInput>
    create: XOR<TaskCreateWithoutPriorityRelationInput, TaskUncheckedCreateWithoutPriorityRelationInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutPriorityRelationInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutPriorityRelationInput, TaskUncheckedUpdateWithoutPriorityRelationInput>
  }

  export type TaskUpdateManyWithWhereWithoutPriorityRelationInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutPriorityRelationInput>
  }

  export type TeamCreateWithoutMembersInput = {
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
    meetings?: MeetingCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: number
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
    meetings?: MeetingUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTeamMembershipsInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamMembershipsInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    meetings?: MeetingUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    meetings?: MeetingUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamMembershipsInput = {
    update: XOR<UserUpdateWithoutTeamMembershipsInput, UserUncheckedUpdateWithoutTeamMembershipsInput>
    create: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMembershipsInput, UserUncheckedUpdateWithoutTeamMembershipsInput>
  }

  export type UserUpdateWithoutTeamMembershipsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMembershipsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamCreateWithoutMeetingsInput = {
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
    members?: TeamMemberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMeetingsInput = {
    id?: number
    teamName: string
    productOwnerUserId?: number | null
    projectManagerUserId?: number | null
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMeetingsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMeetingsInput, TeamUncheckedCreateWithoutMeetingsInput>
  }

  export type ProjectCreateWithoutMeetingsInput = {
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type ProjectUncheckedCreateWithoutMeetingsInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type ProjectCreateOrConnectWithoutMeetingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
  }

  export type UserCreateWithoutCreatedMeetingsInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedMeetingsInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
  }

  export type MeetingNoteCreateWithoutMeetingInput = {
    content: string
    createAt?: Date | string
    author: UserCreateNestedOneWithoutAuthoredNotesInput
  }

  export type MeetingNoteUncheckedCreateWithoutMeetingInput = {
    id?: number
    content: string
    createAt?: Date | string
    authorId: number
  }

  export type MeetingNoteCreateOrConnectWithoutMeetingInput = {
    where: MeetingNoteWhereUniqueInput
    create: XOR<MeetingNoteCreateWithoutMeetingInput, MeetingNoteUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingNoteCreateManyMeetingInputEnvelope = {
    data: MeetingNoteCreateManyMeetingInput | MeetingNoteCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type MeetingSummaryCreateWithoutMeetingInput = {
    content: string
    aiModel?: string | null
    createAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedSummariesInput
  }

  export type MeetingSummaryUncheckedCreateWithoutMeetingInput = {
    id?: number
    content: string
    aiModel?: string | null
    createAt?: Date | string
    createById: number
  }

  export type MeetingSummaryCreateOrConnectWithoutMeetingInput = {
    where: MeetingSummaryWhereUniqueInput
    create: XOR<MeetingSummaryCreateWithoutMeetingInput, MeetingSummaryUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingSummaryCreateManyMeetingInputEnvelope = {
    data: MeetingSummaryCreateManyMeetingInput | MeetingSummaryCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type MeetingParticipantCreateWithoutMeetingInput = {
    rsvpStatus?: string | null
    user: UserCreateNestedOneWithoutAttendedMeetingsInput
  }

  export type MeetingParticipantUncheckedCreateWithoutMeetingInput = {
    id?: number
    rsvpStatus?: string | null
    userId: number
  }

  export type MeetingParticipantCreateOrConnectWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    create: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantCreateManyMeetingInputEnvelope = {
    data: MeetingParticipantCreateManyMeetingInput | MeetingParticipantCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutMeetingsInput = {
    update: XOR<TeamUpdateWithoutMeetingsInput, TeamUncheckedUpdateWithoutMeetingsInput>
    create: XOR<TeamCreateWithoutMeetingsInput, TeamUncheckedCreateWithoutMeetingsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMeetingsInput, TeamUncheckedUpdateWithoutMeetingsInput>
  }

  export type TeamUpdateWithoutMeetingsInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    productOwnerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    projectManagerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ProjectUpsertWithoutMeetingsInput = {
    update: XOR<ProjectUpdateWithoutMeetingsInput, ProjectUncheckedUpdateWithoutMeetingsInput>
    create: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMeetingsInput, ProjectUncheckedUpdateWithoutMeetingsInput>
  }

  export type ProjectUpdateWithoutMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutCreatedMeetingsInput = {
    update: XOR<UserUpdateWithoutCreatedMeetingsInput, UserUncheckedUpdateWithoutCreatedMeetingsInput>
    create: XOR<UserCreateWithoutCreatedMeetingsInput, UserUncheckedCreateWithoutCreatedMeetingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMeetingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMeetingsInput, UserUncheckedUpdateWithoutCreatedMeetingsInput>
  }

  export type UserUpdateWithoutCreatedMeetingsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMeetingsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingNoteUpsertWithWhereUniqueWithoutMeetingInput = {
    where: MeetingNoteWhereUniqueInput
    update: XOR<MeetingNoteUpdateWithoutMeetingInput, MeetingNoteUncheckedUpdateWithoutMeetingInput>
    create: XOR<MeetingNoteCreateWithoutMeetingInput, MeetingNoteUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingNoteUpdateWithWhereUniqueWithoutMeetingInput = {
    where: MeetingNoteWhereUniqueInput
    data: XOR<MeetingNoteUpdateWithoutMeetingInput, MeetingNoteUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingNoteUpdateManyWithWhereWithoutMeetingInput = {
    where: MeetingNoteScalarWhereInput
    data: XOR<MeetingNoteUpdateManyMutationInput, MeetingNoteUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MeetingSummaryUpsertWithWhereUniqueWithoutMeetingInput = {
    where: MeetingSummaryWhereUniqueInput
    update: XOR<MeetingSummaryUpdateWithoutMeetingInput, MeetingSummaryUncheckedUpdateWithoutMeetingInput>
    create: XOR<MeetingSummaryCreateWithoutMeetingInput, MeetingSummaryUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingSummaryUpdateWithWhereUniqueWithoutMeetingInput = {
    where: MeetingSummaryWhereUniqueInput
    data: XOR<MeetingSummaryUpdateWithoutMeetingInput, MeetingSummaryUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingSummaryUpdateManyWithWhereWithoutMeetingInput = {
    where: MeetingSummaryScalarWhereInput
    data: XOR<MeetingSummaryUpdateManyMutationInput, MeetingSummaryUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    update: XOR<MeetingParticipantUpdateWithoutMeetingInput, MeetingParticipantUncheckedUpdateWithoutMeetingInput>
    create: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    data: XOR<MeetingParticipantUpdateWithoutMeetingInput, MeetingParticipantUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingParticipantUpdateManyWithWhereWithoutMeetingInput = {
    where: MeetingParticipantScalarWhereInput
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MeetingCreateWithoutNotesInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    team: TeamCreateNestedOneWithoutMeetingsInput
    project: ProjectCreateNestedOneWithoutMeetingsInput
    creator: UserCreateNestedOneWithoutCreatedMeetingsInput
    summaries?: MeetingSummaryCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutNotesInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
    createById: number
    summaries?: MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutNotesInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutNotesInput, MeetingUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutAuthoredNotesInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthoredNotesInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthoredNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthoredNotesInput, UserUncheckedCreateWithoutAuthoredNotesInput>
  }

  export type MeetingUpsertWithoutNotesInput = {
    update: XOR<MeetingUpdateWithoutNotesInput, MeetingUncheckedUpdateWithoutNotesInput>
    create: XOR<MeetingCreateWithoutNotesInput, MeetingUncheckedCreateWithoutNotesInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutNotesInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutNotesInput, MeetingUncheckedUpdateWithoutNotesInput>
  }

  export type MeetingUpdateWithoutNotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMeetingsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    summaries?: MeetingSummaryUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
    summaries?: MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutAuthoredNotesInput = {
    update: XOR<UserUpdateWithoutAuthoredNotesInput, UserUncheckedUpdateWithoutAuthoredNotesInput>
    create: XOR<UserCreateWithoutAuthoredNotesInput, UserUncheckedCreateWithoutAuthoredNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthoredNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthoredNotesInput, UserUncheckedUpdateWithoutAuthoredNotesInput>
  }

  export type UserUpdateWithoutAuthoredNotesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthoredNotesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingCreateWithoutSummariesInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    team: TeamCreateNestedOneWithoutMeetingsInput
    project: ProjectCreateNestedOneWithoutMeetingsInput
    creator: UserCreateNestedOneWithoutCreatedMeetingsInput
    notes?: MeetingNoteCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutSummariesInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
    createById: number
    notes?: MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutSummariesInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutSummariesInput, MeetingUncheckedCreateWithoutSummariesInput>
  }

  export type UserCreateWithoutCreatedSummariesInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    attendedMeetings?: MeetingParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedSummariesInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    attendedMeetings?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedSummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSummariesInput, UserUncheckedCreateWithoutCreatedSummariesInput>
  }

  export type MeetingUpsertWithoutSummariesInput = {
    update: XOR<MeetingUpdateWithoutSummariesInput, MeetingUncheckedUpdateWithoutSummariesInput>
    create: XOR<MeetingCreateWithoutSummariesInput, MeetingUncheckedCreateWithoutSummariesInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutSummariesInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutSummariesInput, MeetingUncheckedUpdateWithoutSummariesInput>
  }

  export type MeetingUpdateWithoutSummariesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMeetingsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    notes?: MeetingNoteUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutSummariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
    notes?: MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutCreatedSummariesInput = {
    update: XOR<UserUpdateWithoutCreatedSummariesInput, UserUncheckedUpdateWithoutCreatedSummariesInput>
    create: XOR<UserCreateWithoutCreatedSummariesInput, UserUncheckedCreateWithoutCreatedSummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSummariesInput, UserUncheckedUpdateWithoutCreatedSummariesInput>
  }

  export type UserUpdateWithoutCreatedSummariesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    attendedMeetings?: MeetingParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSummariesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    attendedMeetings?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingCreateWithoutParticipantsInput = {
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    team: TeamCreateNestedOneWithoutMeetingsInput
    project: ProjectCreateNestedOneWithoutMeetingsInput
    creator: UserCreateNestedOneWithoutCreatedMeetingsInput
    notes?: MeetingNoteCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutParticipantsInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
    createById: number
    notes?: MeetingNoteUncheckedCreateNestedManyWithoutMeetingInput
    summaries?: MeetingSummaryUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutParticipantsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutAttendedMeetingsInput = {
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAttendedMeetingsInput = {
    userId?: number
    cognitoId: string
    username: string
    profilePictureUrl?: string | null
    teamId?: number | null
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedFiles?: AttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    createdMeetings?: MeetingUncheckedCreateNestedManyWithoutCreatorInput
    authoredNotes?: MeetingNoteUncheckedCreateNestedManyWithoutAuthorInput
    createdSummaries?: MeetingSummaryUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAttendedMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendedMeetingsInput, UserUncheckedCreateWithoutAttendedMeetingsInput>
  }

  export type MeetingUpsertWithoutParticipantsInput = {
    update: XOR<MeetingUpdateWithoutParticipantsInput, MeetingUncheckedUpdateWithoutParticipantsInput>
    create: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutParticipantsInput, MeetingUncheckedUpdateWithoutParticipantsInput>
  }

  export type MeetingUpdateWithoutParticipantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMeetingsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    notes?: MeetingNoteUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
    notes?: MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutAttendedMeetingsInput = {
    update: XOR<UserUpdateWithoutAttendedMeetingsInput, UserUncheckedUpdateWithoutAttendedMeetingsInput>
    create: XOR<UserCreateWithoutAttendedMeetingsInput, UserUncheckedCreateWithoutAttendedMeetingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendedMeetingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendedMeetingsInput, UserUncheckedUpdateWithoutAttendedMeetingsInput>
  }

  export type UserUpdateWithoutAttendedMeetingsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendedMeetingsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedFiles?: AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    createdMeetings?: MeetingUncheckedUpdateManyWithoutCreatorNestedInput
    authoredNotes?: MeetingNoteUncheckedUpdateManyWithoutAuthorNestedInput
    createdSummaries?: MeetingSummaryUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TeamMemberCreateManyUserInput = {
    id?: number
    role?: string | null
    teamId: number
  }

  export type TaskAssignmentCreateManyUserInput = {
    id?: number
    taskId: number
  }

  export type AttachmentCreateManyUploadedByInput = {
    id?: number
    fileURL: string
    fileName?: string | null
    taskId: number
  }

  export type CommentCreateManyUserInput = {
    id?: number
    text: string
    taskId: number
  }

  export type MeetingCreateManyCreatorInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    projectId: number
  }

  export type MeetingNoteCreateManyAuthorInput = {
    id?: number
    content: string
    createAt?: Date | string
    meetingId: number
  }

  export type MeetingSummaryCreateManyCreatorInput = {
    id?: number
    content: string
    aiModel?: string | null
    createAt?: Date | string
    meetingId: number
  }

  export type MeetingParticipantCreateManyUserInput = {
    id?: number
    rsvpStatus?: string | null
    meetingId: number
  }

  export type TeamMemberUpdateWithoutUserInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskAssignmentUpdateWithoutUserInput = {
    task?: TaskUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentUpdateWithoutUploadedByInput = {
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutUploadedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMeetingsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    notes?: MeetingNoteUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    notes?: MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingNoteUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutNotesNestedInput
  }

  export type MeetingNoteUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingSummaryUpdateWithoutCreatorInput = {
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutSummariesNestedInput
  }

  export type MeetingSummaryUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingSummaryUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingParticipantUpdateWithoutUserInput = {
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    meeting?: MeetingUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type MeetingParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateManyTeamInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    projectId: number
    createById: number
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: number
    role?: string | null
    userId: number
  }

  export type MeetingUpdateWithoutTeamInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    notes?: MeetingNoteUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
    notes?: MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTeamMembershipsNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    meetingURL?: string | null
    recordingURL?: string | null
    startTime: Date | string
    endTime: Date | string
    teamId: number
    createById: number
  }

  export type MeetingUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMeetingsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetingsNestedInput
    notes?: MeetingNoteUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
    notes?: MeetingNoteUncheckedUpdateManyWithoutMeetingNestedInput
    summaries?: MeetingSummaryUncheckedUpdateManyWithoutMeetingNestedInput
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    meetingURL?: NullableStringFieldUpdateOperationsInput | string | null
    recordingURL?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: IntFieldUpdateOperationsInput | number
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type TaskAssignmentCreateManyTaskInput = {
    id?: number
    userId: number
  }

  export type AttachmentCreateManyTaskInput = {
    id?: number
    fileURL: string
    fileName?: string | null
    uploadedById: number
  }

  export type CommentCreateManyTaskInput = {
    id?: number
    text: string
    userId: number
  }

  export type TaskAssignmentUpdateWithoutTaskInput = {
    user?: UserUpdateOneRequiredWithoutTaskAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentUpdateWithoutTaskInput = {
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: UserUpdateOneRequiredWithoutUploadedFilesNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutTaskInput = {
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyStatusRelationInput = {
    id?: number
    title: string
    description?: string | null
    priorityId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
  }

  export type TaskUpdateWithoutStatusRelationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    priorityRelation?: TaskPriorityUpdateOneWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStatusRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutStatusRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priorityId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCreateManyPriorityRelationInput = {
    id?: number
    title: string
    description?: string | null
    statusId?: number | null
    tags?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    points?: number | null
    projectId: number
    authorUserId: number
    assignedUserId?: number | null
  }

  export type TaskUpdateWithoutPriorityRelationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    statusRelation?: TaskStatusUpdateOneWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutPriorityRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutPriorityRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    authorUserId?: IntFieldUpdateOperationsInput | number
    assignedUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MeetingNoteCreateManyMeetingInput = {
    id?: number
    content: string
    createAt?: Date | string
    authorId: number
  }

  export type MeetingSummaryCreateManyMeetingInput = {
    id?: number
    content: string
    aiModel?: string | null
    createAt?: Date | string
    createById: number
  }

  export type MeetingParticipantCreateManyMeetingInput = {
    id?: number
    rsvpStatus?: string | null
    userId: number
  }

  export type MeetingNoteUpdateWithoutMeetingInput = {
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAuthoredNotesNestedInput
  }

  export type MeetingNoteUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingNoteUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingSummaryUpdateWithoutMeetingInput = {
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedSummariesNestedInput
  }

  export type MeetingSummaryUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingSummaryUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    aiModel?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createById?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingParticipantUpdateWithoutMeetingInput = {
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAttendedMeetingsNestedInput
  }

  export type MeetingParticipantUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rsvpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}