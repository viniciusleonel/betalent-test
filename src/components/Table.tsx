import { useState, useEffect } from "react";
import { getEmployees } from "../services/apiService";
import "../styles/Table.css";
import { Employee } from "../types/Employee";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
    searchTerm: string;
}

function Table({ searchTerm }: TableProps) {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getEmployees();
                console.log(response);
                setEmployees(response);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };

        fetchData();
    }, []);

    const normalizeString = (str: string) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") 
            .replace(/[-]/g, "")
            .toLowerCase();
    };

    const filteredEmployees = employees.filter(employee => {
        const normalizedSearchTerm = normalizeString(searchTerm);
        return (
            normalizeString(employee.name).includes(normalizedSearchTerm) ||
            normalizeString(employee.job).includes(normalizedSearchTerm) ||
            normalizeString(employee.phone).includes(normalizedSearchTerm)
        );
    });
    
    return (
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {filteredEmployees.map((employee) => (
                    <TableRow
                        key={employee.id}
                        employeeData={employee}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
