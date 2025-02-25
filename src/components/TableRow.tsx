import "../styles/TableRow.css";
import { Employee } from "../types/Employee";

interface TableRowProps {
    employeeData: Employee;
};

function TableRow({employeeData} : TableRowProps) {

    const formattedDatetime = new Date(employeeData.admission_date).toLocaleString();

    return (
        <tr>
            <td>
                {employeeData.image}
            </td>

            <td>
                {employeeData.name}
            </td>

            <td>
                {employeeData.job}
            </td>

            <td>
                {formattedDatetime}
            </td>
            
            <td>
                {employeeData.phone}
            </td>
        </tr>
    );
}

export default TableRow;
