import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

interface Service {
    id: number;
    name: string;
    categories: Category[];
}
interface Category {
    id: number;
    name: string;
    description: string;
}
interface ServiceContextType {
    services: Service[];
    fetchServices: () => Promise<void>;
    createService: (name: string, description: string, categories: string[]) => Promise<void>;
    deleteService: (id: number) => Promise<void>;
}
const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>([]); const fetchServices = async () => {
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
                categories,
            });
            setServices((prev) => [...prev, response.data.service]);
        }
        catch (error) {
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
    }; return (
        <ServiceContext.Provider value={{ services, fetchServices, createService, deleteService }}>
            {children}
        </ServiceContext.Provider>
    );
};
