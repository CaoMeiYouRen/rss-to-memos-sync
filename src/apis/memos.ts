/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @default "KIND_UNSPECIFIED" */
export enum ListNodeKind {
  KIND_UNSPECIFIED = "KIND_UNSPECIFIED",
  ORDERED = "ORDERED",
  UNORDERED = "UNORDERED",
  DESCRIPTION = "DESCRIPTION",
}

export type MemoServiceRebuildMemoPropertyBody = object;

export interface MemoServiceRenameMemoTagBody {
  oldTag?: string;
  newTag?: string;
}

export interface MemoServiceSetMemoRelationsBody {
  relations?: V1MemoRelation[];
}

export interface MemoServiceSetMemoResourcesBody {
  resources?: V1Resource[];
}

export interface MemoServiceUpsertMemoReactionBody {
  reaction?: V1Reaction;
}

export interface TableNodeRow {
  cells?: V1Node[];
}

/** @default "ROLE_UNSPECIFIED" */
export enum UserRole {
  ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
  HOST = "HOST",
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface UserServiceCreateUserAccessTokenBody {
  description?: string;
  /** @format date-time */
  expiresAt?: string;
}

/** Reference: https://developers.cloudflare.com/r2/examples/aws/aws-sdk-go/ */
export interface WorkspaceStorageSettingS3Config {
  accessKeyId?: string;
  accessKeySecret?: string;
  endpoint?: string;
  region?: string;
  bucket?: string;
}

/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest)
 *         returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody)
 *         returns (google.protobuf.Empty);
 *
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface ApiHttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /**
   * The HTTP request/response body as raw binary.
   * @format byte
   */
  data?: string;
  /**
   * Application specific response metadata. Must be set in the first response
   * for streaming APIs.
   */
  extensions?: ProtobufAny[];
}

/** ActivityMemoCommentPayload represents the payload of a memo comment activity. */
export interface Apiv1ActivityMemoCommentPayload {
  /**
   * The memo id of comment.
   * @format int32
   */
  memoId?: number;
  /**
   * The memo id of related memo.
   * @format int32
   */
  relatedMemoId?: number;
}

export interface Apiv1ActivityPayload {
  /** ActivityMemoCommentPayload represents the payload of a memo comment activity. */
  memoComment?: Apiv1ActivityMemoCommentPayload;
  versionUpdate?: Apiv1ActivityVersionUpdatePayload;
}

export interface Apiv1ActivityVersionUpdatePayload {
  /** The updated version of memos. */
  version?: string;
}

export interface Apiv1FieldMapping {
  identifier?: string;
  displayName?: string;
  email?: string;
}

export interface Apiv1IdentityProvider {
  /**
   * The name of the identityProvider.
   * Format: identityProviders/{id}
   */
  name?: string;
  type?: Apiv1IdentityProviderType;
  title?: string;
  identifierFilter?: string;
  config?: Apiv1IdentityProviderConfig;
}

export interface Apiv1IdentityProviderConfig {
  oauth2Config?: Apiv1OAuth2Config;
}

/** @default "TYPE_UNSPECIFIED" */
export enum Apiv1IdentityProviderType {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  OAUTH2 = "OAUTH2",
}

export interface Apiv1OAuth2Config {
  clientId?: string;
  clientSecret?: string;
  authUrl?: string;
  tokenUrl?: string;
  userInfoUrl?: string;
  scopes?: string[];
  fieldMapping?: Apiv1FieldMapping;
}

export interface Apiv1UserSetting {
  /**
   * The name of the user.
   * Format: users/{id}
   */
  name?: string;
  /** The preferred locale of the user. */
  locale?: string;
  /** The preferred appearance of the user. */
  appearance?: string;
  /** The default visibility of the memo. */
  memoVisibility?: string;
}

export interface Apiv1WorkspaceCustomProfile {
  title?: string;
  description?: string;
  logoUrl?: string;
  locale?: string;
  appearance?: string;
}

export interface Apiv1WorkspaceGeneralSetting {
  /** disallow_user_registration disallows user registration. */
  disallowUserRegistration?: boolean;
  /** disallow_password_auth disallows password authentication. */
  disallowPasswordAuth?: boolean;
  /** additional_script is the additional script. */
  additionalScript?: string;
  /** additional_style is the additional style. */
  additionalStyle?: string;
  /** custom_profile is the custom profile. */
  customProfile?: Apiv1WorkspaceCustomProfile;
  /**
   * week_start_day_offset is the week start day offset from Sunday.
   * 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
   * Default is Sunday.
   * @format int32
   */
  weekStartDayOffset?: number;
  /** disallow_change_username disallows changing username. */
  disallowChangeUsername?: boolean;
  /** disallow_change_nickname disallows changing nickname. */
  disallowChangeNickname?: boolean;
}

export interface Apiv1WorkspaceMemoRelatedSetting {
  /** disallow_public_visibility disallows set memo as public visibility. */
  disallowPublicVisibility?: boolean;
  /** display_with_update_time orders and displays memo with update time. */
  displayWithUpdateTime?: boolean;
  /**
   * content_length_limit is the limit of content length. Unit is byte.
   * @format int32
   */
  contentLengthLimit?: number;
  /** enable_auto_compact enables auto compact for large content. */
  enableAutoCompact?: boolean;
  /** enable_double_click_edit enables editing on double click. */
  enableDoubleClickEdit?: boolean;
  /** enable_link_preview enables links preview. */
  enableLinkPreview?: boolean;
  /** enable_comment enables comment. */
  enableComment?: boolean;
}

export interface Apiv1WorkspaceSetting {
  /**
   * name is the name of the setting.
   * Format: settings/{setting}
   */
  name?: string;
  generalSetting?: Apiv1WorkspaceGeneralSetting;
  storageSetting?: Apiv1WorkspaceStorageSetting;
  memoRelatedSetting?: Apiv1WorkspaceMemoRelatedSetting;
}

export interface Apiv1WorkspaceStorageSetting {
  /** storage_type is the storage type. */
  storageType?: Apiv1WorkspaceStorageSettingStorageType;
  /**
   * The template of file path.
   * e.g. assets/{timestamp}_{filename}
   */
  filepathTemplate?: string;
  /**
   * The max upload size in megabytes.
   * @format int64
   */
  uploadSizeLimitMb?: string;
  /** The S3 config. */
  s3Config?: WorkspaceStorageSettingS3Config;
}

/**
 *  - DATABASE: DATABASE is the database storage type.
 *  - LOCAL: LOCAL is the local storage type.
 *  - S3: S3 is the S3 storage type.
 * @default "STORAGE_TYPE_UNSPECIFIED"
 */
export enum Apiv1WorkspaceStorageSettingStorageType {
  STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED",
  DATABASE = "DATABASE",
  LOCAL = "LOCAL",
  S3 = "S3",
}

export interface GooglerpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *     // or ...
 *     if (any.isSameTypeAs(Foo.getDefaultInstance())) {
 *       foo = any.unpack(Foo.getDefaultInstance());
 *     }
 *
 *  Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 *  Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com. As of May 2023, there are no widely used type server
   * implementations and no plans to implement one.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
  [key: string]: any;
}

export interface V1Activity {
  /**
   * The name of the activity.
   * Format: activities/{id}
   */
  name?: string;
  /**
   * The uid of the user who created the activity.
   * @format int32
   */
  creatorId?: number;
  /** The type of the activity. */
  type?: string;
  /** The level of the activity. */
  level?: string;
  /**
   * The create time of the activity.
   * @format date-time
   */
  createTime?: string;
  /** The payload of the activity. */
  payload?: Apiv1ActivityPayload;
}

export interface V1AutoLinkNode {
  url?: string;
  isRawText?: boolean;
}

export interface V1BlockquoteNode {
  children?: V1Node[];
}

export interface V1BoldItalicNode {
  symbol?: string;
  content?: string;
}

export interface V1BoldNode {
  symbol?: string;
  children?: V1Node[];
}

export interface V1CodeBlockNode {
  language?: string;
  content?: string;
}

export interface V1CodeNode {
  content?: string;
}

export interface V1CreateMemoRequest {
  content?: string;
  visibility?: V1Visibility;
  resources?: V1Resource[];
  relations?: V1MemoRelation[];
}

export interface V1CreateWebhookRequest {
  name?: string;
  url?: string;
}

export interface V1EmbeddedContentNode {
  resourceName?: string;
  params?: string;
}

export interface V1EscapingCharacterNode {
  symbol?: string;
}

export interface V1HTMLElementNode {
  tagName?: string;
  attributes?: Record<string, string>;
}

export interface V1HeadingNode {
  /** @format int32 */
  level?: number;
  children?: V1Node[];
}

export interface V1HighlightNode {
  content?: string;
}

export interface V1HorizontalRuleNode {
  symbol?: string;
}

export interface V1ImageNode {
  altText?: string;
  url?: string;
}

export interface V1Inbox {
  /**
   * The name of the inbox.
   * Format: inboxes/{id}
   */
  name?: string;
  /** Format: users/{id} */
  sender?: string;
  /** Format: users/{id} */
  receiver?: string;
  status?: V1InboxStatus;
  /** @format date-time */
  createTime?: string;
  type?: V1InboxType;
  /** @format int32 */
  activityId?: number;
}

/** @default "STATUS_UNSPECIFIED" */
export enum V1InboxStatus {
  STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED",
  UNREAD = "UNREAD",
  ARCHIVED = "ARCHIVED",
}

/** @default "TYPE_UNSPECIFIED" */
export enum V1InboxType {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  MEMO_COMMENT = "MEMO_COMMENT",
  VERSION_UPDATE = "VERSION_UPDATE",
}

export interface V1ItalicNode {
  symbol?: string;
  content?: string;
}

export type V1LineBreakNode = object;

export interface V1LinkMetadata {
  title?: string;
  description?: string;
  image?: string;
}

export interface V1LinkNode {
  text?: string;
  url?: string;
}

export interface V1ListIdentityProvidersResponse {
  identityProviders?: Apiv1IdentityProvider[];
}

export interface V1ListInboxesResponse {
  inboxes?: V1Inbox[];
}

export interface V1ListMemoCommentsResponse {
  memos?: V1Memo[];
}

export interface V1ListMemoPropertiesResponse {
  entities?: V1MemoPropertyEntity[];
}

export interface V1ListMemoReactionsResponse {
  reactions?: V1Reaction[];
}

export interface V1ListMemoRelationsResponse {
  relations?: V1MemoRelation[];
}

export interface V1ListMemoResourcesResponse {
  resources?: V1Resource[];
}

export interface V1ListMemoTagsResponse {
  /**
   * tag_amounts is the amount of tags.
   * key is the tag name. e.g. "tag1".
   * value is the amount of the tag.
   */
  tagAmounts?: Record<string, number>;
}

export interface V1ListMemosResponse {
  memos?: V1Memo[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
}

export interface V1ListNode {
  kind?: ListNodeKind;
  /** @format int32 */
  indent?: number;
  children?: V1Node[];
}

export interface V1ListResourcesResponse {
  resources?: V1Resource[];
}

export interface V1ListUserAccessTokensResponse {
  accessTokens?: V1UserAccessToken[];
}

export interface V1ListUsersResponse {
  users?: V1User[];
}

export interface V1ListWebhooksResponse {
  webhooks?: V1Webhook[];
}

export interface V1MathBlockNode {
  content?: string;
}

export interface V1MathNode {
  content?: string;
}

export interface V1Memo {
  /**
   * The name of the memo.
   * Format: memos/{id}
   * id is the system generated id.
   */
  name?: string;
  /** The user defined id of the memo. */
  uid?: string;
  rowStatus?: V1RowStatus;
  /**
   * The name of the creator.
   * Format: users/{id}
   */
  creator?: string;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format date-time */
  displayTime?: string;
  content?: string;
  nodes?: V1Node[];
  visibility?: V1Visibility;
  tags?: string[];
  pinned?: boolean;
  resources?: V1Resource[];
  relations?: V1MemoRelation[];
  reactions?: V1Reaction[];
  property?: V1MemoProperty;
  /**
   * The name of the parent memo.
   * Format: memos/{id}
   */
  parent?: string;
  /** The snippet of the memo content. Plain text only. */
  snippet?: string;
}

export interface V1MemoProperty {
  tags?: string[];
  hasLink?: boolean;
  hasTaskList?: boolean;
  hasCode?: boolean;
  hasIncompleteTasks?: boolean;
}

export interface V1MemoPropertyEntity {
  /**
   * The name of the memo property.
   * Format: memos/{id}/properties/{property_id}
   */
  name?: string;
  property?: V1MemoProperty;
  /** @format date-time */
  displayTime?: string;
}

export interface V1MemoRelation {
  /**
   * The name of memo.
   * Format: "memos/{uid}"
   */
  memo?: string;
  /**
   * The name of related memo.
   * Format: "memos/{uid}"
   */
  relatedMemo?: string;
  type?: V1MemoRelationType;
}

/** @default "TYPE_UNSPECIFIED" */
export enum V1MemoRelationType {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  REFERENCE = "REFERENCE",
  COMMENT = "COMMENT",
}

export interface V1Node {
  /**
   *  - LINE_BREAK: Block nodes.
   *  - TEXT: Inline nodes.
   */
  type?: V1NodeType;
  /** Block nodes. */
  lineBreakNode?: V1LineBreakNode;
  paragraphNode?: V1ParagraphNode;
  codeBlockNode?: V1CodeBlockNode;
  headingNode?: V1HeadingNode;
  horizontalRuleNode?: V1HorizontalRuleNode;
  blockquoteNode?: V1BlockquoteNode;
  listNode?: V1ListNode;
  orderedListItemNode?: V1OrderedListItemNode;
  unorderedListItemNode?: V1UnorderedListItemNode;
  taskListItemNode?: V1TaskListItemNode;
  mathBlockNode?: V1MathBlockNode;
  tableNode?: V1TableNode;
  embeddedContentNode?: V1EmbeddedContentNode;
  /** Inline nodes. */
  textNode?: V1TextNode;
  boldNode?: V1BoldNode;
  italicNode?: V1ItalicNode;
  boldItalicNode?: V1BoldItalicNode;
  codeNode?: V1CodeNode;
  imageNode?: V1ImageNode;
  linkNode?: V1LinkNode;
  autoLinkNode?: V1AutoLinkNode;
  tagNode?: V1TagNode;
  strikethroughNode?: V1StrikethroughNode;
  escapingCharacterNode?: V1EscapingCharacterNode;
  mathNode?: V1MathNode;
  highlightNode?: V1HighlightNode;
  subscriptNode?: V1SubscriptNode;
  superscriptNode?: V1SuperscriptNode;
  referencedContentNode?: V1ReferencedContentNode;
  spoilerNode?: V1SpoilerNode;
  htmlElementNode?: V1HTMLElementNode;
}

/**
 *  - LINE_BREAK: Block nodes.
 *  - TEXT: Inline nodes.
 * @default "NODE_UNSPECIFIED"
 */
export enum V1NodeType {
  NODE_UNSPECIFIED = "NODE_UNSPECIFIED",
  LINE_BREAK = "LINE_BREAK",
  PARAGRAPH = "PARAGRAPH",
  CODE_BLOCK = "CODE_BLOCK",
  HEADING = "HEADING",
  HORIZONTAL_RULE = "HORIZONTAL_RULE",
  BLOCKQUOTE = "BLOCKQUOTE",
  LIST = "LIST",
  ORDERED_LIST_ITEM = "ORDERED_LIST_ITEM",
  UNORDERED_LIST_ITEM = "UNORDERED_LIST_ITEM",
  TASK_LIST_ITEM = "TASK_LIST_ITEM",
  MATH_BLOCK = "MATH_BLOCK",
  TABLE = "TABLE",
  EMBEDDED_CONTENT = "EMBEDDED_CONTENT",
  TEXT = "TEXT",
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  BOLD_ITALIC = "BOLD_ITALIC",
  CODE = "CODE",
  IMAGE = "IMAGE",
  LINK = "LINK",
  AUTO_LINK = "AUTO_LINK",
  TAG = "TAG",
  STRIKETHROUGH = "STRIKETHROUGH",
  ESCAPING_CHARACTER = "ESCAPING_CHARACTER",
  MATH = "MATH",
  HIGHLIGHT = "HIGHLIGHT",
  SUBSCRIPT = "SUBSCRIPT",
  SUPERSCRIPT = "SUPERSCRIPT",
  REFERENCED_CONTENT = "REFERENCED_CONTENT",
  SPOILER = "SPOILER",
  HTML_ELEMENT = "HTML_ELEMENT",
}

export interface V1OrderedListItemNode {
  number?: string;
  /** @format int32 */
  indent?: number;
  children?: V1Node[];
}

export interface V1ParagraphNode {
  children?: V1Node[];
}

export interface V1ParseMarkdownRequest {
  markdown?: string;
}

export interface V1ParseMarkdownResponse {
  nodes?: V1Node[];
}

export interface V1Reaction {
  /** @format int32 */
  id?: number;
  /**
   * The name of the creator.
   * Format: users/{id}
   */
  creator?: string;
  contentId?: string;
  reactionType?: V1ReactionType;
}

/** @default "TYPE_UNSPECIFIED" */
export enum V1ReactionType {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  THUMBS_UP = "THUMBS_UP",
  THUMBS_DOWN = "THUMBS_DOWN",
  HEART = "HEART",
  FIRE = "FIRE",
  CLAPPING_HANDS = "CLAPPING_HANDS",
  LAUGH = "LAUGH",
  OK_HAND = "OK_HAND",
  ROCKET = "ROCKET",
  EYES = "EYES",
  THINKING_FACE = "THINKING_FACE",
  CLOWN_FACE = "CLOWN_FACE",
  QUESTION_MARK = "QUESTION_MARK",
}

export interface V1ReferencedContentNode {
  resourceName?: string;
  params?: string;
}

export interface V1Resource {
  /**
   * The name of the resource.
   * Format: resources/{id}
   * id is the system generated unique identifier.
   */
  name?: string;
  /** The user defined id of the resource. */
  uid?: string;
  /** @format date-time */
  createTime?: string;
  filename?: string;
  /** @format byte */
  content?: string;
  externalLink?: string;
  type?: string;
  /** @format int64 */
  size?: string;
  /**
   * The related memo.
   * Format: memos/{id}
   */
  memo?: string;
}

export interface V1RestoreMarkdownNodesRequest {
  nodes?: V1Node[];
}

export interface V1RestoreMarkdownNodesResponse {
  markdown?: string;
}

/** @default "ROW_STATUS_UNSPECIFIED" */
export enum V1RowStatus {
  ROW_STATUS_UNSPECIFIED = "ROW_STATUS_UNSPECIFIED",
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export interface V1SearchUsersResponse {
  users?: V1User[];
}

export interface V1SpoilerNode {
  content?: string;
}

export interface V1StrikethroughNode {
  content?: string;
}

export interface V1StringifyMarkdownNodesRequest {
  nodes?: V1Node[];
}

export interface V1StringifyMarkdownNodesResponse {
  plainText?: string;
}

export interface V1SubscriptNode {
  content?: string;
}

export interface V1SuperscriptNode {
  content?: string;
}

export interface V1TableNode {
  header?: V1Node[];
  delimiter?: string[];
  rows?: TableNodeRow[];
}

export interface V1TagNode {
  content?: string;
}

export interface V1TaskListItemNode {
  symbol?: string;
  /** @format int32 */
  indent?: number;
  complete?: boolean;
  children?: V1Node[];
}

export interface V1TextNode {
  content?: string;
}

export interface V1UnorderedListItemNode {
  symbol?: string;
  /** @format int32 */
  indent?: number;
  children?: V1Node[];
}

export interface V1User {
  /**
   * The name of the user.
   * Format: users/{id}
   */
  name?: string;
  /**
   * The system generated uid of the user.
   * @format int32
   */
  id?: number;
  role?: UserRole;
  username?: string;
  email?: string;
  nickname?: string;
  avatarUrl?: string;
  description?: string;
  password?: string;
  rowStatus?: V1RowStatus;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  updateTime?: string;
}

export interface V1UserAccessToken {
  accessToken?: string;
  description?: string;
  /** @format date-time */
  issuedAt?: string;
  /** @format date-time */
  expiresAt?: string;
}

/** @default "VISIBILITY_UNSPECIFIED" */
export enum V1Visibility {
  VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED",
  PRIVATE = "PRIVATE",
  PROTECTED = "PROTECTED",
  PUBLIC = "PUBLIC",
}

export interface V1Webhook {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  creatorId?: number;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  updateTime?: string;
  rowStatus?: V1RowStatus;
  name?: string;
  url?: string;
}

export interface V1WorkspaceProfile {
  /**
   * The name of instance owner.
   * Format: "users/{id}"
   */
  owner?: string;
  /** version is the current version of instance */
  version?: string;
  /** mode is the instance mode (e.g. "prod", "dev" or "demo"). */
  mode?: string;
  /** instance_url is the URL of the instance. */
  instanceUrl?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title api/v1/activity_service.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags AuthService
     * @name AuthServiceSignIn
     * @summary SignIn signs in the user with the given username and password.
     * @request POST:/api/v1/auth/signin
     */
    authServiceSignIn: (
      query?: {
        /** The username to sign in with. */
        username?: string;
        /** The password to sign in with. */
        password?: string;
        /** Whether the session should never expire. */
        neverExpire?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/auth/signin`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthService
     * @name AuthServiceSignInWithSso
     * @summary SignInWithSSO signs in the user with the given SSO code.
     * @request POST:/api/v1/auth/signin/sso
     */
    authServiceSignInWithSso: (
      query?: {
        /**
         * The ID of the SSO provider.
         * @format int32
         */
        idpId?: number;
        /** The code to sign in with. */
        code?: string;
        /** The redirect URI. */
        redirectUri?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/auth/signin/sso`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthService
     * @name AuthServiceSignOut
     * @summary SignOut signs out the user.
     * @request POST:/api/v1/auth/signout
     */
    authServiceSignOut: (params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/auth/signout`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthService
     * @name AuthServiceSignUp
     * @summary SignUp signs up the user with the given username and password.
     * @request POST:/api/v1/auth/signup
     */
    authServiceSignUp: (
      query?: {
        /** The username to sign up with. */
        username?: string;
        /** The password to sign up with. */
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/auth/signup`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthService
     * @name AuthServiceGetAuthStatus
     * @summary GetAuthStatus returns the current auth status of the user.
     * @request POST:/api/v1/auth/status
     */
    authServiceGetAuthStatus: (params: RequestParams = {}) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/auth/status`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityProviderService
     * @name IdentityProviderServiceListIdentityProviders
     * @summary ListIdentityProviders lists identity providers.
     * @request GET:/api/v1/identityProviders
     */
    identityProviderServiceListIdentityProviders: (params: RequestParams = {}) =>
      this.request<V1ListIdentityProvidersResponse, GooglerpcStatus>({
        path: `/api/v1/identityProviders`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityProviderService
     * @name IdentityProviderServiceCreateIdentityProvider
     * @summary CreateIdentityProvider creates an identity provider.
     * @request POST:/api/v1/identityProviders
     */
    identityProviderServiceCreateIdentityProvider: (
      identityProvider: Apiv1IdentityProvider,
      params: RequestParams = {},
    ) =>
      this.request<Apiv1IdentityProvider, GooglerpcStatus>({
        path: `/api/v1/identityProviders`,
        method: "POST",
        body: identityProvider,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InboxService
     * @name InboxServiceListInboxes
     * @summary ListInboxes lists inboxes for a user.
     * @request GET:/api/v1/inboxes
     */
    inboxServiceListInboxes: (
      query?: {
        /** Format: users/{id} */
        user?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1ListInboxesResponse, GooglerpcStatus>({
        path: `/api/v1/inboxes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarkdownService
     * @name MarkdownServiceGetLinkMetadata
     * @summary GetLinkMetadata returns metadata for a given link.
     * @request GET:/api/v1/markdown/link:metadata
     */
    markdownServiceGetLinkMetadata: (
      metadata: string,
      query?: {
        link?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1LinkMetadata, GooglerpcStatus>({
        path: `/api/v1/markdown/link${metadata}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarkdownService
     * @name MarkdownServiceRestoreMarkdownNodes
     * @summary RestoreMarkdownNodes restores the given nodes to markdown content.
     * @request POST:/api/v1/markdown/node:restore
     */
    markdownServiceRestoreMarkdownNodes: (
      restore: string,
      body: V1RestoreMarkdownNodesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1RestoreMarkdownNodesResponse, GooglerpcStatus>({
        path: `/api/v1/markdown/node${restore}`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarkdownService
     * @name MarkdownServiceStringifyMarkdownNodes
     * @summary StringifyMarkdownNodes stringify the given nodes to plain text content.
     * @request POST:/api/v1/markdown/node:stringify
     */
    markdownServiceStringifyMarkdownNodes: (
      stringify: string,
      body: V1StringifyMarkdownNodesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1StringifyMarkdownNodesResponse, GooglerpcStatus>({
        path: `/api/v1/markdown/node${stringify}`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarkdownService
     * @name MarkdownServiceParseMarkdown
     * @summary ParseMarkdown parses the given markdown content and returns a list of nodes.
     * @request POST:/api/v1/markdown:parse
     */
    markdownServiceParseMarkdown: (parse: string, body: V1ParseMarkdownRequest, params: RequestParams = {}) =>
      this.request<V1ParseMarkdownResponse, GooglerpcStatus>({
        path: `/api/v1/markdown${parse}`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemos
     * @summary ListMemos lists memos with pagination and filter.
     * @request GET:/api/v1/memos
     */
    memoServiceListMemos: (
      query?: {
        /**
         * The maximum number of memos to return.
         * @format int32
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListMemos` call.
         * Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
        /**
         * Filter is used to filter memos returned in the list.
         * Format: "creator == 'users/{uid}' && visibilities == ['PUBLIC', 'PROTECTED']"
         */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1ListMemosResponse, GooglerpcStatus>({
        path: `/api/v1/memos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceCreateMemo
     * @summary CreateMemo creates a memo.
     * @request POST:/api/v1/memos
     */
    memoServiceCreateMemo: (body: V1CreateMemoRequest, params: RequestParams = {}) =>
      this.request<V1Memo, GooglerpcStatus>({
        path: `/api/v1/memos`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceGetMemoByUid
     * @summary GetMemoByUid gets a memo by uid
     * @request GET:/api/v1/memos:by-uid/{uid}
     */
    memoServiceGetMemoByUid: (uid: string, byUid: string, params: RequestParams = {}) =>
      this.request<V1Memo, GooglerpcStatus>({
        path: `/api/v1/memos${byUid}/${uid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceDeleteMemoReaction
     * @summary DeleteMemoReaction deletes a reaction for a memo.
     * @request DELETE:/api/v1/reactions/{reactionId}
     */
    memoServiceDeleteMemoReaction: (reactionId: number, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/reactions/${reactionId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceListResources
     * @summary ListResources lists all resources.
     * @request GET:/api/v1/resources
     */
    resourceServiceListResources: (params: RequestParams = {}) =>
      this.request<V1ListResourcesResponse, GooglerpcStatus>({
        path: `/api/v1/resources`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceCreateResource
     * @summary CreateResource creates a new resource.
     * @request POST:/api/v1/resources
     */
    resourceServiceCreateResource: (resource: V1Resource, params: RequestParams = {}) =>
      this.request<V1Resource, GooglerpcStatus>({
        path: `/api/v1/resources`,
        method: "POST",
        body: resource,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceGetResourceByUid
     * @summary GetResourceByUid returns a resource by uid.
     * @request GET:/api/v1/resources:by-uid/{uid}
     */
    resourceServiceGetResourceByUid: (uid: string, byUid: string, params: RequestParams = {}) =>
      this.request<V1Resource, GooglerpcStatus>({
        path: `/api/v1/resources${byUid}/${uid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceListUsers
     * @summary ListUsers returns a list of users.
     * @request GET:/api/v1/users
     */
    userServiceListUsers: (params: RequestParams = {}) =>
      this.request<V1ListUsersResponse, GooglerpcStatus>({
        path: `/api/v1/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceCreateUser
     * @summary CreateUser creates a new user.
     * @request POST:/api/v1/users
     */
    userServiceCreateUser: (user: V1User, params: RequestParams = {}) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/users`,
        method: "POST",
        body: user,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceSearchUsers
     * @summary SearchUsers searches users by filter.
     * @request GET:/api/v1/users:search
     */
    userServiceSearchUsers: (
      search: string,
      query?: {
        /**
         * Filter is used to filter users returned in the list.
         * Format: "username == 'frank'"
         */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1SearchUsersResponse, GooglerpcStatus>({
        path: `/api/v1/users${search}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookService
     * @name WebhookServiceListWebhooks
     * @summary ListWebhooks returns a list of webhooks.
     * @request GET:/api/v1/webhooks
     */
    webhookServiceListWebhooks: (
      query?: {
        /** @format int32 */
        creatorId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1ListWebhooksResponse, GooglerpcStatus>({
        path: `/api/v1/webhooks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookService
     * @name WebhookServiceCreateWebhook
     * @summary CreateWebhook creates a new webhook.
     * @request POST:/api/v1/webhooks
     */
    webhookServiceCreateWebhook: (body: V1CreateWebhookRequest, params: RequestParams = {}) =>
      this.request<V1Webhook, GooglerpcStatus>({
        path: `/api/v1/webhooks`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookService
     * @name WebhookServiceGetWebhook
     * @summary GetWebhook returns a webhook by id.
     * @request GET:/api/v1/webhooks/{id}
     */
    webhookServiceGetWebhook: (id: number, params: RequestParams = {}) =>
      this.request<V1Webhook, GooglerpcStatus>({
        path: `/api/v1/webhooks/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookService
     * @name WebhookServiceDeleteWebhook
     * @summary DeleteWebhook deletes a webhook by id.
     * @request DELETE:/api/v1/webhooks/{id}
     */
    webhookServiceDeleteWebhook: (id: number, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/webhooks/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookService
     * @name WebhookServiceUpdateWebhook
     * @summary UpdateWebhook updates a webhook.
     * @request PATCH:/api/v1/webhooks/{webhook.id}
     */
    webhookServiceUpdateWebhook: (
      webhookId: number,
      webhook: {
        /** @format int32 */
        creatorId?: number;
        /** @format date-time */
        createTime?: string;
        /** @format date-time */
        updateTime?: string;
        rowStatus?: V1RowStatus;
        name?: string;
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Webhook, GooglerpcStatus>({
        path: `/api/v1/webhooks/${webhookId}`,
        method: "PATCH",
        body: webhook,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkspaceService
     * @name WorkspaceServiceGetWorkspaceProfile
     * @summary GetWorkspaceProfile returns the workspace profile.
     * @request GET:/api/v1/workspace/profile
     */
    workspaceServiceGetWorkspaceProfile: (params: RequestParams = {}) =>
      this.request<V1WorkspaceProfile, GooglerpcStatus>({
        path: `/api/v1/workspace/profile`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkspaceSettingService
     * @name WorkspaceSettingServiceGetWorkspaceSetting
     * @summary GetWorkspaceSetting returns the setting by name.
     * @request GET:/api/v1/workspace/{name}
     */
    workspaceSettingServiceGetWorkspaceSetting: (name: string, params: RequestParams = {}) =>
      this.request<Apiv1WorkspaceSetting, GooglerpcStatus>({
        path: `/api/v1/workspace/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkspaceSettingService
     * @name WorkspaceSettingServiceSetWorkspaceSetting
     * @summary SetWorkspaceSetting updates the setting.
     * @request PATCH:/api/v1/workspace/{setting.name}
     */
    workspaceSettingServiceSetWorkspaceSetting: (
      settingName: string,
      setting: {
        generalSetting?: Apiv1WorkspaceGeneralSetting;
        storageSetting?: Apiv1WorkspaceStorageSetting;
        memoRelatedSetting?: Apiv1WorkspaceMemoRelatedSetting;
      },
      params: RequestParams = {},
    ) =>
      this.request<Apiv1WorkspaceSetting, GooglerpcStatus>({
        path: `/api/v1/workspace/${settingName}`,
        method: "PATCH",
        body: setting,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityProviderService
     * @name IdentityProviderServiceUpdateIdentityProvider
     * @summary UpdateIdentityProvider updates an identity provider.
     * @request PATCH:/api/v1/{identityProvider.name}
     */
    identityProviderServiceUpdateIdentityProvider: (
      identityProviderName: string,
      identityProvider: {
        type?: Apiv1IdentityProviderType;
        title?: string;
        identifierFilter?: string;
        config?: Apiv1IdentityProviderConfig;
      },
      params: RequestParams = {},
    ) =>
      this.request<Apiv1IdentityProvider, GooglerpcStatus>({
        path: `/api/v1/${identityProviderName}`,
        method: "PATCH",
        body: identityProvider,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InboxService
     * @name InboxServiceUpdateInbox
     * @summary UpdateInbox updates an inbox.
     * @request PATCH:/api/v1/{inbox.name}
     */
    inboxServiceUpdateInbox: (
      inboxName: string,
      inbox: {
        /** Format: users/{id} */
        sender?: string;
        /** Format: users/{id} */
        receiver?: string;
        status?: V1InboxStatus;
        /** @format date-time */
        createTime?: string;
        type?: V1InboxType;
        /** @format int32 */
        activityId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Inbox, GooglerpcStatus>({
        path: `/api/v1/${inboxName}`,
        method: "PATCH",
        body: inbox,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceUpdateMemo
     * @summary UpdateMemo updates a memo.
     * @request PATCH:/api/v1/{memo.name}
     */
    memoServiceUpdateMemo: (
      memoName: string,
      memo: {
        /** The user defined id of the memo. */
        uid?: string;
        rowStatus?: V1RowStatus;
        /**
         * The name of the creator.
         * Format: users/{id}
         */
        creator?: string;
        /** @format date-time */
        createTime?: string;
        /** @format date-time */
        updateTime?: string;
        /** @format date-time */
        displayTime?: string;
        content?: string;
        nodes?: V1Node[];
        visibility?: V1Visibility;
        tags?: string[];
        pinned?: boolean;
        resources?: V1Resource[];
        relations?: V1MemoRelation[];
        reactions?: V1Reaction[];
        property?: V1MemoProperty;
        /**
         * The name of the parent memo.
         * Format: memos/{id}
         */
        parent?: string;
        /** The snippet of the memo content. Plain text only. */
        snippet?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Memo, GooglerpcStatus>({
        path: `/api/v1/${memoName}`,
        method: "PATCH",
        body: memo,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceGetUser
     * @summary GetUser gets a user by name.
     * @request GET:/api/v1/{name_1}
     */
    userServiceGetUser: (name1: string, params: RequestParams = {}) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/${name1}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityProviderService
     * @name IdentityProviderServiceDeleteIdentityProvider
     * @summary DeleteIdentityProvider deletes an identity provider.
     * @request DELETE:/api/v1/{name_1}
     */
    identityProviderServiceDeleteIdentityProvider: (name1: string, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name1}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityProviderService
     * @name IdentityProviderServiceGetIdentityProvider
     * @summary GetIdentityProvider gets an identity provider.
     * @request GET:/api/v1/{name_2}
     */
    identityProviderServiceGetIdentityProvider: (name2: string, params: RequestParams = {}) =>
      this.request<Apiv1IdentityProvider, GooglerpcStatus>({
        path: `/api/v1/${name2}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InboxService
     * @name InboxServiceDeleteInbox
     * @summary DeleteInbox deletes an inbox.
     * @request DELETE:/api/v1/{name_2}
     */
    inboxServiceDeleteInbox: (name2: string, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name2}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceGetResource
     * @summary GetResource returns a resource by name.
     * @request GET:/api/v1/{name_3}
     */
    resourceServiceGetResource: (name3: string, params: RequestParams = {}) =>
      this.request<V1Resource, GooglerpcStatus>({
        path: `/api/v1/${name3}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceDeleteResource
     * @summary DeleteResource deletes a resource by name.
     * @request DELETE:/api/v1/{name_3}
     */
    resourceServiceDeleteResource: (name3: string, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name3}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceGetMemo
     * @summary GetMemo gets a memo.
     * @request GET:/api/v1/{name_4}
     */
    memoServiceGetMemo: (name4: string, params: RequestParams = {}) =>
      this.request<V1Memo, GooglerpcStatus>({
        path: `/api/v1/${name4}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceDeleteMemo
     * @summary DeleteMemo deletes a memo.
     * @request DELETE:/api/v1/{name_4}
     */
    memoServiceDeleteMemo: (name4: string, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name4}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActivityService
     * @name ActivityServiceGetActivity
     * @summary GetActivity returns the activity with the given id.
     * @request GET:/api/v1/{name}
     */
    activityServiceGetActivity: (name: string, params: RequestParams = {}) =>
      this.request<V1Activity, GooglerpcStatus>({
        path: `/api/v1/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceDeleteUser
     * @summary DeleteUser deletes a user.
     * @request DELETE:/api/v1/{name}
     */
    userServiceDeleteUser: (name: string, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceListUserAccessTokens
     * @summary ListUserAccessTokens returns a list of access tokens for a user.
     * @request GET:/api/v1/{name}/access_tokens
     */
    userServiceListUserAccessTokens: (name: string, params: RequestParams = {}) =>
      this.request<V1ListUserAccessTokensResponse, GooglerpcStatus>({
        path: `/api/v1/${name}/access_tokens`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceCreateUserAccessToken
     * @summary CreateUserAccessToken creates a new access token for a user.
     * @request POST:/api/v1/{name}/access_tokens
     */
    userServiceCreateUserAccessToken: (
      name: string,
      body: UserServiceCreateUserAccessTokenBody,
      params: RequestParams = {},
    ) =>
      this.request<V1UserAccessToken, GooglerpcStatus>({
        path: `/api/v1/${name}/access_tokens`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceDeleteUserAccessToken
     * @summary DeleteUserAccessToken deletes an access token for a user.
     * @request DELETE:/api/v1/{name}/access_tokens/{accessToken}
     */
    userServiceDeleteUserAccessToken: (name: string, accessToken: string, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name}/access_tokens/${accessToken}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemoComments
     * @summary ListMemoComments lists comments for a memo.
     * @request GET:/api/v1/{name}/comments
     */
    memoServiceListMemoComments: (name: string, params: RequestParams = {}) =>
      this.request<V1ListMemoCommentsResponse, GooglerpcStatus>({
        path: `/api/v1/${name}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceCreateMemoComment
     * @summary CreateMemoComment creates a comment for a memo.
     * @request POST:/api/v1/{name}/comments
     */
    memoServiceCreateMemoComment: (name: string, comment: V1CreateMemoRequest, params: RequestParams = {}) =>
      this.request<V1Memo, GooglerpcStatus>({
        path: `/api/v1/${name}/comments`,
        method: "POST",
        body: comment,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemoProperties
     * @summary ListMemoProperties lists memo properties.
     * @request GET:/api/v1/{name}/properties
     */
    memoServiceListMemoProperties: (name: string, params: RequestParams = {}) =>
      this.request<V1ListMemoPropertiesResponse, GooglerpcStatus>({
        path: `/api/v1/${name}/properties`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceRebuildMemoProperty
     * @summary RebuildMemoProperty rebuilds a memo property.
     * @request POST:/api/v1/{name}/properties:rebuild
     */
    memoServiceRebuildMemoProperty: (
      name: string,
      rebuild: string,
      body: MemoServiceRebuildMemoPropertyBody,
      params: RequestParams = {},
    ) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name}/properties${rebuild}`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemoReactions
     * @summary ListMemoReactions lists reactions for a memo.
     * @request GET:/api/v1/{name}/reactions
     */
    memoServiceListMemoReactions: (name: string, params: RequestParams = {}) =>
      this.request<V1ListMemoReactionsResponse, GooglerpcStatus>({
        path: `/api/v1/${name}/reactions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceUpsertMemoReaction
     * @summary UpsertMemoReaction upserts a reaction for a memo.
     * @request POST:/api/v1/{name}/reactions
     */
    memoServiceUpsertMemoReaction: (
      name: string,
      body: MemoServiceUpsertMemoReactionBody,
      params: RequestParams = {},
    ) =>
      this.request<V1Reaction, GooglerpcStatus>({
        path: `/api/v1/${name}/reactions`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemoRelations
     * @summary ListMemoRelations lists relations for a memo.
     * @request GET:/api/v1/{name}/relations
     */
    memoServiceListMemoRelations: (name: string, params: RequestParams = {}) =>
      this.request<V1ListMemoRelationsResponse, GooglerpcStatus>({
        path: `/api/v1/${name}/relations`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceSetMemoRelations
     * @summary SetMemoRelations sets relations for a memo.
     * @request PATCH:/api/v1/{name}/relations
     */
    memoServiceSetMemoRelations: (name: string, body: MemoServiceSetMemoRelationsBody, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name}/relations`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemoResources
     * @summary ListMemoResources lists resources for a memo.
     * @request GET:/api/v1/{name}/resources
     */
    memoServiceListMemoResources: (name: string, params: RequestParams = {}) =>
      this.request<V1ListMemoResourcesResponse, GooglerpcStatus>({
        path: `/api/v1/${name}/resources`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceSetMemoResources
     * @summary SetMemoResources sets resources for a memo.
     * @request PATCH:/api/v1/{name}/resources
     */
    memoServiceSetMemoResources: (name: string, body: MemoServiceSetMemoResourcesBody, params: RequestParams = {}) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${name}/resources`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceGetUserSetting
     * @summary GetUserSetting gets the setting of a user.
     * @request GET:/api/v1/{name}/setting
     */
    userServiceGetUserSetting: (name: string, params: RequestParams = {}) =>
      this.request<Apiv1UserSetting, GooglerpcStatus>({
        path: `/api/v1/${name}/setting`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceListMemoTags
     * @summary ListMemoTags lists tags for a memo.
     * @request GET:/api/v1/{parent}/tags
     */
    memoServiceListMemoTags: (
      parent: string,
      query?: {
        /**
         * Filter is used to filter memos.
         * Format: "creator == 'users/{uid}' && visibilities == ['PUBLIC', 'PROTECTED']"
         */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1ListMemoTagsResponse, GooglerpcStatus>({
        path: `/api/v1/${parent}/tags`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceDeleteMemoTag
     * @summary DeleteMemoTag deletes a tag for a memo.
     * @request DELETE:/api/v1/{parent}/tags/{tag}
     */
    memoServiceDeleteMemoTag: (
      parent: string,
      tag: string,
      query?: {
        deleteRelatedMemos?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${parent}/tags/${tag}`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MemoService
     * @name MemoServiceRenameMemoTag
     * @summary RenameMemoTag renames a tag for a memo.
     * @request PATCH:/api/v1/{parent}/tags:rename
     */
    memoServiceRenameMemoTag: (
      parent: string,
      rename: string,
      body: MemoServiceRenameMemoTagBody,
      params: RequestParams = {},
    ) =>
      this.request<MemoServiceRebuildMemoPropertyBody, GooglerpcStatus>({
        path: `/api/v1/${parent}/tags${rename}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceUpdateResource
     * @summary UpdateResource updates a resource.
     * @request PATCH:/api/v1/{resource.name}
     */
    resourceServiceUpdateResource: (
      resourceName: string,
      resource: {
        /** The user defined id of the resource. */
        uid?: string;
        /** @format date-time */
        createTime?: string;
        filename?: string;
        /** @format byte */
        content?: string;
        externalLink?: string;
        type?: string;
        /** @format int64 */
        size?: string;
        /**
         * The related memo.
         * Format: memos/{id}
         */
        memo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Resource, GooglerpcStatus>({
        path: `/api/v1/${resourceName}`,
        method: "PATCH",
        body: resource,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceUpdateUserSetting
     * @summary UpdateUserSetting updates the setting of a user.
     * @request PATCH:/api/v1/{setting.name}
     */
    userServiceUpdateUserSetting: (
      settingName: string,
      setting: {
        /** The preferred locale of the user. */
        locale?: string;
        /** The preferred appearance of the user. */
        appearance?: string;
        /** The default visibility of the memo. */
        memoVisibility?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Apiv1UserSetting, GooglerpcStatus>({
        path: `/api/v1/${settingName}`,
        method: "PATCH",
        body: setting,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceUpdateUser
     * @summary UpdateUser updates a user.
     * @request PATCH:/api/v1/{user.name}
     */
    userServiceUpdateUser: (
      userName: string,
      user: {
        /**
         * The system generated uid of the user.
         * @format int32
         */
        id?: number;
        role?: UserRole;
        username?: string;
        email?: string;
        nickname?: string;
        avatarUrl?: string;
        description?: string;
        password?: string;
        rowStatus?: V1RowStatus;
        /** @format date-time */
        createTime?: string;
        /** @format date-time */
        updateTime?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1User, GooglerpcStatus>({
        path: `/api/v1/${userName}`,
        method: "PATCH",
        body: user,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  file = {
    /**
     * No description
     *
     * @tags UserService
     * @name UserServiceGetUserAvatarBinary
     * @summary GetUserAvatarBinary gets the avatar of a user.
     * @request GET:/file/{name}/avatar
     */
    userServiceGetUserAvatarBinary: (
      name: string,
      query?: {
        /** The HTTP Content-Type header value specifying the content type of the body. */
        httpBodyContentType?: string;
        /**
         * The HTTP request/response body as raw binary.
         * @format byte
         */
        httpBodyData?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiHttpBody, GooglerpcStatus>({
        path: `/file/${name}/avatar`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResourceService
     * @name ResourceServiceGetResourceBinary
     * @summary GetResourceBinary returns a resource binary by name.
     * @request GET:/file/{name}/{filename}
     */
    resourceServiceGetResourceBinary: (
      name: string,
      filename: string,
      query?: {
        /** A flag indicating if the thumbnail version of the resource should be returned */
        thumbnail?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiHttpBody, GooglerpcStatus>({
        path: `/file/${name}/${filename}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
