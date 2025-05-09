import axios from "axios";

export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    availableDate: string;
    createdBy: string;
    status: string;
    image: string;
}

export const getDishes = async (): Promise<Dish[]> => {
    try {
        const response = await axios.get<Dish[]>("http://localhost:5555/api/menu/items");
        return response.data;
    } catch (error) {
        throw new Error(error as string || "Cannot fetch dishes list");
    }
};
