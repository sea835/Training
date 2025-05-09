import axios from 'axios';

// Định nghĩa kiểu dữ liệu cho người dùng
export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
}

// Hàm gọi API để lấy danh sách người dùng
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>("http://localhost:5555/api/users");
    return response.data;
  } catch (error) {
    throw new Error(error as string || "Không thể lấy danh sách người dùng");
  }
};

// Hàm tạo người dùng mới
export const createUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.post<User>("http://localhost:8080/api/users", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error as string || "Không thể tạo người dùng mới");
  }
};
