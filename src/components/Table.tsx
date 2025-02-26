import { useState, useEffect } from "react";
import { getEmployees } from "../services/apiService";
import "../styles/Table.css";
import { Employee } from "../types/Employee";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table() {

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
    return (
        <div className="table-container">
            <table>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <TableRow key={employee.id} employeeData={employee} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
