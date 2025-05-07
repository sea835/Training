// Khởi tạo người dùng mẫu
use("food_delivery_db");
db.dropDatabase(); // Xóa cơ sở dữ liệu cũ nếu có
db.users.insertMany([
  {
    username: "admin1",
    password: "hashed_admin_pw",
    fullName: "Admin Hệ Thống",
    role: "ADMIN",
    email: "admin1@example.com",
    phone: "0900000001",
    createdAt: new Date(),
  },
  {
    username: "chef1",
    password: "hashed_chef_pw",
    fullName: "Bếp Chính 1",
    role: "CHEF",
    email: "chef1@example.com",
    phone: "0900000002",
    createdAt: new Date(),
  },
  {
    username: "chef2",
    password: "hashed_chef_pw",
    fullName: "Bếp Chính 2",
    role: "CHEF",
    email: "chef2@example.com",
    phone: "0900000003",
    createdAt: new Date(),
  },
  {
    username: "delivery1",
    password: "hashed_delivery_pw",
    fullName: "Giao Hàng A",
    role: "DELIVERY",
    email: "delivery1@example.com",
    phone: "0900000004",
    createdAt: new Date(),
  },
  {
    username: "delivery2",
    password: "hashed_delivery_pw",
    fullName: "Giao Hàng B",
    role: "DELIVERY",
    email: "delivery2@example.com",
    phone: "0900000005",
    createdAt: new Date(),
  },
  {
    username: "user1",
    password: "hashed_user_pw",
    fullName: "Nguyễn Văn A",
    role: "CUSTOMER",
    email: "user1@example.com",
    phone: "0900000006",
    createdAt: new Date(),
  },
  {
    username: "user2",
    password: "hashed_user_pw",
    fullName: "Trần Thị B",
    role: "CUSTOMER",
    email: "user2@example.com",
    phone: "0900000007",
    createdAt: new Date(),
  },
  {
    username: "user3",
    password: "hashed_user_pw",
    fullName: "Lê Minh C",
    role: "CUSTOMER",
    email: "user3@example.com",
    phone: "0900000008",
    createdAt: new Date(),
  },
]);

// Tạo các món ăn mẫu trong thực đơn
db.menu_items.insertMany([
  {
    name: "Cơm tấm sườn bì",
    description: "Cơm tấm với sườn nướng và bì",
    price: 30000,
    availableDate: ISODate("2025-05-08"),
    createdBy: db.users.findOne({ username: "chef1" })._id,
    status: "ACTIVE",
  },
  {
    name: "Bún chả",
    description: "Bún chả Hà Nội",
    price: 28000,
    availableDate: ISODate("2025-05-08"),
    createdBy: db.users.findOne({ username: "chef2" })._id,
    status: "ACTIVE",
  },
  {
    name: "Phở bò",
    description: "Phở bò tái, chín",
    price: 35000,
    availableDate: ISODate("2025-05-09"),
    createdBy: db.users.findOne({ username: "chef1" })._id,
    status: "ACTIVE",
  },
  {
    name: "Gà rán",
    description: "Gà rán giòn ngon",
    price: 25000,
    availableDate: ISODate("2025-05-09"),
    createdBy: db.users.findOne({ username: "chef2" })._id,
    status: "ACTIVE",
  },
  {
    name: "Bánh mì chả cá",
    description: "Bánh mì với chả cá tươi",
    price: 20000,
    availableDate: ISODate("2025-05-10"),
    createdBy: db.users.findOne({ username: "chef1" })._id,
    status: "ACTIVE",
  },
]);

// Tạo các đơn đặt món mẫu
const user1 = db.users.findOne({ username: "user1" });
const user2 = db.users.findOne({ username: "user2" });
const menuItem1 = db.menu_items.findOne({ name: "Cơm tấm sườn bì" });
const menuItem2 = db.menu_items.findOne({ name: "Bún chả" });
const menuItem3 = db.menu_items.findOne({ name: "Phở bò" });

db.orders.insertMany([
  {
    userId: user1._id,
    orderDate: ISODate("2025-05-08"),
    items: [
      { menuItemId: menuItem1._id, quantity: 1, note: "Không hành" },
      { menuItemId: menuItem2._id, quantity: 2, note: "Thêm ớt" },
    ],
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    userId: user2._id,
    orderDate: ISODate("2025-05-09"),
    items: [{ menuItemId: menuItem3._id, quantity: 3, note: "Thêm chanh" }],
    status: "CONFIRMED",
    createdAt: new Date(),
  },
]);

// Tạo các đơn giao hàng mẫu
const delivery1 = db.users.findOne({ username: "delivery1" });
const delivery2 = db.users.findOne({ username: "delivery2" });

const order1 = db.orders.findOne({ userId: user1._id });
const order2 = db.orders.findOne({ userId: user2._id });

db.deliveries.insertMany([
  {
    orderId: order1._id,
    deliveryStaffId: delivery1._id,
    status: "PENDING",
    deliveryTime: ISODate("2025-05-08T12:00:00"),
    confirmationTime: null,
    note: "Giao trước 12h",
  },
  {
    orderId: order2._id,
    deliveryStaffId: delivery2._id,
    status: "IN_PROGRESS",
    deliveryTime: ISODate("2025-05-09T13:00:00"),
    confirmationTime: null,
    note: "Giao sau 13h",
  },
]);

// Khởi tạo cài đặt hệ thống
db.system_settings.insertOne({
  cutOffTime: "10:30",
  defaultMealPrice: 25000,
  deliveryWindow: { start: "11:30", end: "12:30" },
  createdBy: db.users.findOne({ username: "admin1" })._id,
  updatedAt: new Date(),
});
