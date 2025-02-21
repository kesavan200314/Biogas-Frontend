import axios from "axios";
import { ReactNode, useState, useContext, createContext } from "react";

// Define the Booking interface
interface Booking {
    id: number;
    name: string;
    number: string;
    product: string; 
    product_name: string; 
    
}

// Booking Context Type
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
            const response = await axios.get("http://localhost:3000/api/bookings");
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    // Create a Booking
    const createBooking = async (number: string, product: string, product_name: string) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/api/booking/create`,
                { name, number, product, product_name },
                { withCredentials: true }
            );
            console.log(response, "Response");
            
            // Assuming response.data contains the booking data
            setBookings((prev) => [...prev, response.data]); // Make sure this line matches your data structure
        } catch (error) {
            console.error("Error creating booking:", error);
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
