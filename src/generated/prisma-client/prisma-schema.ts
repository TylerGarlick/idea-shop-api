export const typeDefs = /* GraphQL */ `type Address {
  id: ID!
  type: AddressKind!
  street1: String!
  street2: String
  city: String!
  state: String!
  zip: String!
  longitude: String
  latitude: String
  isActive: Boolean!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  type: AddressKind!
  street1: String!
  street2: String
  city: String!
  state: String!
  zip: String!
  longitude: String
  latitude: String
  isActive: Boolean
  users: UserCreateManyWithoutAddressesInput
}

input AddressCreateManyWithoutUsersInput {
  create: [AddressCreateWithoutUsersInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

input AddressCreateWithoutUsersInput {
  type: AddressKind!
  street1: String!
  street2: String
  city: String!
  state: String!
  zip: String!
  longitude: String
  latitude: String
  isActive: Boolean
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressKind {
  Shipping
  Billing
  Both
  Other
  Home
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  street1_ASC
  street1_DESC
  street2_ASC
  street2_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
  longitude_ASC
  longitude_DESC
  latitude_ASC
  latitude_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  type: AddressKind!
  street1: String!
  street2: String
  city: String!
  state: String!
  zip: String!
  longitude: String
  latitude: String
  isActive: Boolean!
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: AddressKind
  type_not: AddressKind
  type_in: [AddressKind!]
  type_not_in: [AddressKind!]
  street1: String
  street1_not: String
  street1_in: [String!]
  street1_not_in: [String!]
  street1_lt: String
  street1_lte: String
  street1_gt: String
  street1_gte: String
  street1_contains: String
  street1_not_contains: String
  street1_starts_with: String
  street1_not_starts_with: String
  street1_ends_with: String
  street1_not_ends_with: String
  street2: String
  street2_not: String
  street2_in: [String!]
  street2_not_in: [String!]
  street2_lt: String
  street2_lte: String
  street2_gt: String
  street2_gte: String
  street2_contains: String
  street2_not_contains: String
  street2_starts_with: String
  street2_not_starts_with: String
  street2_ends_with: String
  street2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  longitude: String
  longitude_not: String
  longitude_in: [String!]
  longitude_not_in: [String!]
  longitude_lt: String
  longitude_lte: String
  longitude_gt: String
  longitude_gte: String
  longitude_contains: String
  longitude_not_contains: String
  longitude_starts_with: String
  longitude_not_starts_with: String
  longitude_ends_with: String
  longitude_not_ends_with: String
  latitude: String
  latitude_not: String
  latitude_in: [String!]
  latitude_not_in: [String!]
  latitude_lt: String
  latitude_lte: String
  latitude_gt: String
  latitude_gte: String
  latitude_contains: String
  latitude_not_contains: String
  latitude_starts_with: String
  latitude_not_starts_with: String
  latitude_ends_with: String
  latitude_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  type: AddressKind
  street1: String
  street2: String
  city: String
  state: String
  zip: String
  longitude: String
  latitude: String
  isActive: Boolean
  users: UserUpdateManyWithoutAddressesInput
}

input AddressUpdateInput {
  type: AddressKind
  street1: String
  street2: String
  city: String
  state: String
  zip: String
  longitude: String
  latitude: String
  isActive: Boolean
  users: UserUpdateManyWithoutAddressesInput
}

input AddressUpdateManyDataInput {
  type: AddressKind
  street1: String
  street2: String
  city: String
  state: String
  zip: String
  longitude: String
  latitude: String
  isActive: Boolean
}

input AddressUpdateManyMutationInput {
  type: AddressKind
  street1: String
  street2: String
  city: String
  state: String
  zip: String
  longitude: String
  latitude: String
  isActive: Boolean
}

input AddressUpdateManyWithoutUsersInput {
  create: [AddressCreateWithoutUsersInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  set: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  update: [AddressUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [AddressUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateOneRequiredInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  connect: AddressWhereUniqueInput
}

input AddressUpdateWithoutUsersDataInput {
  type: AddressKind
  street1: String
  street2: String
  city: String
  state: String
  zip: String
  longitude: String
  latitude: String
  isActive: Boolean
}

input AddressUpdateWithWhereUniqueWithoutUsersInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateWithoutUsersDataInput!
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressUpsertWithWhereUniqueWithoutUsersInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateWithoutUsersDataInput!
  create: AddressCreateWithoutUsersInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: AddressKind
  type_not: AddressKind
  type_in: [AddressKind!]
  type_not_in: [AddressKind!]
  street1: String
  street1_not: String
  street1_in: [String!]
  street1_not_in: [String!]
  street1_lt: String
  street1_lte: String
  street1_gt: String
  street1_gte: String
  street1_contains: String
  street1_not_contains: String
  street1_starts_with: String
  street1_not_starts_with: String
  street1_ends_with: String
  street1_not_ends_with: String
  street2: String
  street2_not: String
  street2_in: [String!]
  street2_not_in: [String!]
  street2_lt: String
  street2_lte: String
  street2_gt: String
  street2_gte: String
  street2_contains: String
  street2_not_contains: String
  street2_starts_with: String
  street2_not_starts_with: String
  street2_ends_with: String
  street2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  longitude: String
  longitude_not: String
  longitude_in: [String!]
  longitude_not_in: [String!]
  longitude_lt: String
  longitude_lte: String
  longitude_gt: String
  longitude_gte: String
  longitude_contains: String
  longitude_not_contains: String
  longitude_starts_with: String
  longitude_not_starts_with: String
  longitude_ends_with: String
  longitude_not_ends_with: String
  latitude: String
  latitude_not: String
  latitude_in: [String!]
  latitude_not_in: [String!]
  latitude_lt: String
  latitude_lte: String
  latitude_gt: String
  latitude_gte: String
  latitude_contains: String
  latitude_not_contains: String
  latitude_starts_with: String
  latitude_not_starts_with: String
  latitude_ends_with: String
  latitude_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregatePhone {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  createPhone(data: PhoneCreateInput!): Phone!
  updatePhone(data: PhoneUpdateInput!, where: PhoneWhereUniqueInput!): Phone
  updateManyPhones(data: PhoneUpdateManyMutationInput!, where: PhoneWhereInput): BatchPayload!
  upsertPhone(where: PhoneWhereUniqueInput!, create: PhoneCreateInput!, update: PhoneUpdateInput!): Phone!
  deletePhone(where: PhoneWhereUniqueInput!): Phone
  deleteManyPhones(where: PhoneWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  billingAddress: Address!
  shippingAddress: Address!
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  subtotal: Float
  tax: Float
  total: Float
  user: User!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  billingAddress: AddressCreateOneInput!
  shippingAddress: AddressCreateOneInput!
  items: OrderItemCreateManyWithoutOrderInput
  subtotal: Float
  tax: Float
  total: Float
  user: UserCreateOneWithoutOrdersInput!
}

input OrderCreateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateOneWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutItemsInput {
  billingAddress: AddressCreateOneInput!
  shippingAddress: AddressCreateOneInput!
  subtotal: Float
  tax: Float
  total: Float
  user: UserCreateOneWithoutOrdersInput!
}

input OrderCreateWithoutUserInput {
  billingAddress: AddressCreateOneInput!
  shippingAddress: AddressCreateOneInput!
  items: OrderItemCreateManyWithoutOrderInput
  subtotal: Float
  tax: Float
  total: Float
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  id: ID!
  price: Float
  quantity: Int
  order: Order!
  product: Product!
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  price: Float
  quantity: Int
  order: OrderCreateOneWithoutItemsInput!
  product: ProductCreateOneWithoutItemsInput!
}

input OrderItemCreateManyWithoutOrderInput {
  create: [OrderItemCreateWithoutOrderInput!]
  connect: [OrderItemWhereUniqueInput!]
}

input OrderItemCreateManyWithoutProductInput {
  create: [OrderItemCreateWithoutProductInput!]
  connect: [OrderItemWhereUniqueInput!]
}

input OrderItemCreateWithoutOrderInput {
  price: Float
  quantity: Int
  product: ProductCreateOneWithoutItemsInput!
}

input OrderItemCreateWithoutProductInput {
  price: Float
  quantity: Int
  order: OrderCreateOneWithoutItemsInput!
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderItemPreviousValues {
  id: ID!
  price: Float
  quantity: Int
}

input OrderItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderItemScalarWhereInput!]
  OR: [OrderItemScalarWhereInput!]
  NOT: [OrderItemScalarWhereInput!]
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
  OR: [OrderItemSubscriptionWhereInput!]
  NOT: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateInput {
  price: Float
  quantity: Int
  order: OrderUpdateOneRequiredWithoutItemsInput
  product: ProductUpdateOneRequiredWithoutItemsInput
}

input OrderItemUpdateManyDataInput {
  price: Float
  quantity: Int
}

input OrderItemUpdateManyMutationInput {
  price: Float
  quantity: Int
}

input OrderItemUpdateManyWithoutOrderInput {
  create: [OrderItemCreateWithoutOrderInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  set: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  update: [OrderItemUpdateWithWhereUniqueWithoutOrderInput!]
  upsert: [OrderItemUpsertWithWhereUniqueWithoutOrderInput!]
  deleteMany: [OrderItemScalarWhereInput!]
  updateMany: [OrderItemUpdateManyWithWhereNestedInput!]
}

input OrderItemUpdateManyWithoutProductInput {
  create: [OrderItemCreateWithoutProductInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  set: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  update: [OrderItemUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [OrderItemUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [OrderItemScalarWhereInput!]
  updateMany: [OrderItemUpdateManyWithWhereNestedInput!]
}

input OrderItemUpdateManyWithWhereNestedInput {
  where: OrderItemScalarWhereInput!
  data: OrderItemUpdateManyDataInput!
}

input OrderItemUpdateWithoutOrderDataInput {
  price: Float
  quantity: Int
  product: ProductUpdateOneRequiredWithoutItemsInput
}

input OrderItemUpdateWithoutProductDataInput {
  price: Float
  quantity: Int
  order: OrderUpdateOneRequiredWithoutItemsInput
}

input OrderItemUpdateWithWhereUniqueWithoutOrderInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateWithoutOrderDataInput!
}

input OrderItemUpdateWithWhereUniqueWithoutProductInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateWithoutProductDataInput!
}

input OrderItemUpsertWithWhereUniqueWithoutOrderInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateWithoutOrderDataInput!
  create: OrderItemCreateWithoutOrderInput!
}

input OrderItemUpsertWithWhereUniqueWithoutProductInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateWithoutProductDataInput!
  create: OrderItemCreateWithoutProductInput!
}

input OrderItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  order: OrderWhereInput
  product: ProductWhereInput
  AND: [OrderItemWhereInput!]
  OR: [OrderItemWhereInput!]
  NOT: [OrderItemWhereInput!]
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  subtotal_ASC
  subtotal_DESC
  tax_ASC
  tax_DESC
  total_ASC
  total_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  subtotal: Float
  tax: Float
  total: Float
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  subtotal: Float
  subtotal_not: Float
  subtotal_in: [Float!]
  subtotal_not_in: [Float!]
  subtotal_lt: Float
  subtotal_lte: Float
  subtotal_gt: Float
  subtotal_gte: Float
  tax: Float
  tax_not: Float
  tax_in: [Float!]
  tax_not_in: [Float!]
  tax_lt: Float
  tax_lte: Float
  tax_gt: Float
  tax_gte: Float
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateOneRequiredInput
  items: OrderItemUpdateManyWithoutOrderInput
  subtotal: Float
  tax: Float
  total: Float
  user: UserUpdateOneRequiredWithoutOrdersInput
}

input OrderUpdateManyDataInput {
  subtotal: Float
  tax: Float
  total: Float
}

input OrderUpdateManyMutationInput {
  subtotal: Float
  tax: Float
  total: Float
}

input OrderUpdateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateOneRequiredWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  update: OrderUpdateWithoutItemsDataInput
  upsert: OrderUpsertWithoutItemsInput
  connect: OrderWhereUniqueInput
}

input OrderUpdateWithoutItemsDataInput {
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateOneRequiredInput
  subtotal: Float
  tax: Float
  total: Float
  user: UserUpdateOneRequiredWithoutOrdersInput
}

input OrderUpdateWithoutUserDataInput {
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateOneRequiredInput
  items: OrderItemUpdateManyWithoutOrderInput
  subtotal: Float
  tax: Float
  total: Float
}

input OrderUpdateWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutUserDataInput!
}

input OrderUpsertWithoutItemsInput {
  update: OrderUpdateWithoutItemsDataInput!
  create: OrderCreateWithoutItemsInput!
}

input OrderUpsertWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutUserDataInput!
  create: OrderCreateWithoutUserInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  billingAddress: AddressWhereInput
  shippingAddress: AddressWhereInput
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  subtotal: Float
  subtotal_not: Float
  subtotal_in: [Float!]
  subtotal_not_in: [Float!]
  subtotal_lt: Float
  subtotal_lte: Float
  subtotal_gt: Float
  subtotal_gte: Float
  tax: Float
  tax_not: Float
  tax_in: [Float!]
  tax_not_in: [Float!]
  tax_lt: Float
  tax_lte: Float
  tax_gt: Float
  tax_gte: Float
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  user: UserWhereInput
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Phone {
  id: ID!
  type: PhoneKind!
  number: String!
  ext: String
  isActive: Boolean
}

type PhoneConnection {
  pageInfo: PageInfo!
  edges: [PhoneEdge]!
  aggregate: AggregatePhone!
}

input PhoneCreateInput {
  type: PhoneKind!
  number: String!
  ext: String
  isActive: Boolean
}

input PhoneCreateManyInput {
  create: [PhoneCreateInput!]
  connect: [PhoneWhereUniqueInput!]
}

type PhoneEdge {
  node: Phone!
  cursor: String!
}

enum PhoneKind {
  Home
  Cell
  Office
  Other
  Mobile
}

enum PhoneOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  number_ASC
  number_DESC
  ext_ASC
  ext_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PhonePreviousValues {
  id: ID!
  type: PhoneKind!
  number: String!
  ext: String
  isActive: Boolean
}

input PhoneScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: PhoneKind
  type_not: PhoneKind
  type_in: [PhoneKind!]
  type_not_in: [PhoneKind!]
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  ext: String
  ext_not: String
  ext_in: [String!]
  ext_not_in: [String!]
  ext_lt: String
  ext_lte: String
  ext_gt: String
  ext_gte: String
  ext_contains: String
  ext_not_contains: String
  ext_starts_with: String
  ext_not_starts_with: String
  ext_ends_with: String
  ext_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  AND: [PhoneScalarWhereInput!]
  OR: [PhoneScalarWhereInput!]
  NOT: [PhoneScalarWhereInput!]
}

type PhoneSubscriptionPayload {
  mutation: MutationType!
  node: Phone
  updatedFields: [String!]
  previousValues: PhonePreviousValues
}

input PhoneSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PhoneWhereInput
  AND: [PhoneSubscriptionWhereInput!]
  OR: [PhoneSubscriptionWhereInput!]
  NOT: [PhoneSubscriptionWhereInput!]
}

input PhoneUpdateDataInput {
  type: PhoneKind
  number: String
  ext: String
  isActive: Boolean
}

input PhoneUpdateInput {
  type: PhoneKind
  number: String
  ext: String
  isActive: Boolean
}

input PhoneUpdateManyDataInput {
  type: PhoneKind
  number: String
  ext: String
  isActive: Boolean
}

input PhoneUpdateManyInput {
  create: [PhoneCreateInput!]
  update: [PhoneUpdateWithWhereUniqueNestedInput!]
  upsert: [PhoneUpsertWithWhereUniqueNestedInput!]
  delete: [PhoneWhereUniqueInput!]
  connect: [PhoneWhereUniqueInput!]
  set: [PhoneWhereUniqueInput!]
  disconnect: [PhoneWhereUniqueInput!]
  deleteMany: [PhoneScalarWhereInput!]
  updateMany: [PhoneUpdateManyWithWhereNestedInput!]
}

input PhoneUpdateManyMutationInput {
  type: PhoneKind
  number: String
  ext: String
  isActive: Boolean
}

input PhoneUpdateManyWithWhereNestedInput {
  where: PhoneScalarWhereInput!
  data: PhoneUpdateManyDataInput!
}

input PhoneUpdateWithWhereUniqueNestedInput {
  where: PhoneWhereUniqueInput!
  data: PhoneUpdateDataInput!
}

input PhoneUpsertWithWhereUniqueNestedInput {
  where: PhoneWhereUniqueInput!
  update: PhoneUpdateDataInput!
  create: PhoneCreateInput!
}

input PhoneWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: PhoneKind
  type_not: PhoneKind
  type_in: [PhoneKind!]
  type_not_in: [PhoneKind!]
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  ext: String
  ext_not: String
  ext_in: [String!]
  ext_not_in: [String!]
  ext_lt: String
  ext_lte: String
  ext_gt: String
  ext_gte: String
  ext_contains: String
  ext_not_contains: String
  ext_starts_with: String
  ext_not_starts_with: String
  ext_ends_with: String
  ext_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  AND: [PhoneWhereInput!]
  OR: [PhoneWhereInput!]
  NOT: [PhoneWhereInput!]
}

input PhoneWhereUniqueInput {
  id: ID
}

type Product {
  id: ID!
  name: String!
  description: String
  price: Float
  tags: [String!]!
  isActive: Boolean
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  description: String
  price: Float
  tags: ProductCreatetagsInput
  isActive: Boolean
  items: OrderItemCreateManyWithoutProductInput
}

input ProductCreateOneWithoutItemsInput {
  create: ProductCreateWithoutItemsInput
  connect: ProductWhereUniqueInput
}

input ProductCreatetagsInput {
  set: [String!]
}

input ProductCreateWithoutItemsInput {
  name: String!
  description: String
  price: Float
  tags: ProductCreatetagsInput
  isActive: Boolean
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  description: String
  price: Float
  tags: [String!]!
  isActive: Boolean
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  description: String
  price: Float
  tags: ProductUpdatetagsInput
  isActive: Boolean
  items: OrderItemUpdateManyWithoutProductInput
}

input ProductUpdateManyMutationInput {
  name: String
  description: String
  price: Float
  tags: ProductUpdatetagsInput
  isActive: Boolean
}

input ProductUpdateOneRequiredWithoutItemsInput {
  create: ProductCreateWithoutItemsInput
  update: ProductUpdateWithoutItemsDataInput
  upsert: ProductUpsertWithoutItemsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdatetagsInput {
  set: [String!]
}

input ProductUpdateWithoutItemsDataInput {
  name: String
  description: String
  price: Float
  tags: ProductUpdatetagsInput
  isActive: Boolean
}

input ProductUpsertWithoutItemsInput {
  update: ProductUpdateWithoutItemsDataInput!
  create: ProductCreateWithoutItemsInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  isActive: Boolean
  isActive_not: Boolean
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  phone(where: PhoneWhereUniqueInput!): Phone
  phones(where: PhoneWhereInput, orderBy: PhoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Phone]!
  phonesConnection(where: PhoneWhereInput, orderBy: PhoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhoneConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  phone(where: PhoneSubscriptionWhereInput): PhoneSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  phones(where: PhoneWhereInput, orderBy: PhoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Phone!]
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  addresses: AddressCreateManyWithoutUsersInput
  phones: PhoneCreateManyInput
  orders: OrderCreateManyWithoutUserInput
}

input UserCreateManyWithoutAddressesInput {
  create: [UserCreateWithoutAddressesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAddressesInput {
  email: String!
  password: String!
  name: String!
  phones: PhoneCreateManyInput
  orders: OrderCreateManyWithoutUserInput
}

input UserCreateWithoutOrdersInput {
  email: String!
  password: String!
  name: String!
  addresses: AddressCreateManyWithoutUsersInput
  phones: PhoneCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  addresses: AddressUpdateManyWithoutUsersInput
  phones: PhoneUpdateManyInput
  orders: OrderUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyWithoutAddressesInput {
  create: [UserCreateWithoutAddressesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutAddressesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutAddressesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAddressesDataInput {
  email: String
  password: String
  name: String
  phones: PhoneUpdateManyInput
  orders: OrderUpdateManyWithoutUserInput
}

input UserUpdateWithoutOrdersDataInput {
  email: String
  password: String
  name: String
  addresses: AddressUpdateManyWithoutUsersInput
  phones: PhoneUpdateManyInput
}

input UserUpdateWithWhereUniqueWithoutAddressesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutAddressesDataInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithWhereUniqueWithoutAddressesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutAddressesDataInput!
  create: UserCreateWithoutAddressesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  addresses_every: AddressWhereInput
  addresses_some: AddressWhereInput
  addresses_none: AddressWhereInput
  phones_every: PhoneWhereInput
  phones_some: PhoneWhereInput
  phones_none: PhoneWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`