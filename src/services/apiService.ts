import { Employee } from "../types/Employee";

export async function getEmployees(): Promise<Employee[]> {

    const response = await fetch('http://localhost:3000/employees');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados');
        }
        const data: Employee[] = await response.json();
        return data;
}
