import React, { createContext, useState, ReactNode, useContext } from "react";
import axios from "axios";

// Define the structure for a Service and Booking
interface Service {
    id: number;
    name: string;
    description: string;

}



interface Booking {
    id: number;
    username: string;
    number: string;
    product: string;
    product_name: string; 
}

// Service Context Type
interface ServiceContextType {
    services: Service[];
    fetchServices: () => Promise<void>;
    createService: (name: string, description: string, categories: string[]) => Promise<void>;
    deleteService: (id: number) => Promise<void>;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>([]);

    const fetchServices = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/services");
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    const createService = async (name: string, description: string, categories: string[]) => {
        try {
            const response = await axios.post("http://localhost:3000/api/services", {
                name,
                description,
                categories
            });
            setServices((prev) => [...prev, response.data.service]);
        } catch (error) {
            console.error("Error creating service:", error);
        }
    };

    const deleteService = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/api/services/${id}`);
            setServices((prev) => prev.filter((service) => service.id !== id));
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    return (
        <ServiceContext.Provider value={{ services, fetchServices, createService, deleteService }}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useService = (): ServiceContextType => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error("useService must be used within a ServiceProvider");
    }
    return context;
};

// Booking Context
interface BookingContextType {
    bookings: Booking[];
    fetchBookings: () => Promise<void>;
    createBooking: (username: string, telephone_number: string, product: string, variant: string) => Promise<void>;
    deleteBooking: (id: number) => Promise<void>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    const fetchBookings = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/bookings");
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    const createBooking = async (username: string, number: string, product: string,product_Name: string) => {
        try {
            const response = await axios.post("http://localhost:3000/api/bookings", {
                username,
                number,
                product,
                product_Name
            });
            setBookings((prev) => [...prev, response.data.booking]);
        } catch (error) {
            console.error("Error creating booking:", error);
        }
    };

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

export const useBooking = (): BookingContextType => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};
