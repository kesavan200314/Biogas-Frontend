import axios from "axios";
import { ReactNode, useState, useContext, createContext } from "react";
import Cookies from "js-cookie";

// Define the Booking interface
interface Booking {
    id: number;
    name: string;
    number: string;
    product: string; 
    product_name: string; 
    
}

// // Booking Context Type
interface BookingContextType {
    bookings: Booking[];
    fetchBookings: () => Promise<void>;
    createBooking: (number: string, product: string, product_name: string) => Promise<void>;
    deleteBooking: (id: number) => Promise<void>;
}


// Create the Booking Context
const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    // Fetch Bookings
    const fetchBookings = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/bookings/get");
            console.log(response.data); 
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    const createBooking = async (number: string, product: string, product_name: string) => {
        try {
            // Get the token from cookies
            const token = Cookies.get("token");
    
            if (!token) {
                console.error("No authentication token found");
                return;
            }
    
            const response = await axios.post(
                `http://localhost:3000/api/booking/create`, 
                { number, product, product_name },
                {
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: true, // Ensure cookies are sent with the request
                }
            );
    
            console.log("✅ Booking Created:", response.data);
            setBookings((prev) => [...prev, response.data]);
        } catch (error) {
            console.error("❌ Error creating booking:", error);
        }
    };
    
    
    
    // Delete a Booking
    const deleteBooking = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/api/bookings/${id}`);
            setBookings((prev) => prev.filter((booking) => booking.id !== id));
        } catch (error) {
            console.error("Error deleting booking:", error);
        }
    };

    return (
        <BookingContext.Provider value={{ bookings, fetchBookings, createBooking, deleteBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

// Custom Hook for Booking Context
export const useBooking = (): BookingContextType => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};

export default BookingContext;
