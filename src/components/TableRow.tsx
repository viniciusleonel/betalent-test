import { useEffect, useState } from "react";
import "../styles/Table.css";
import { Employee } from "../types/Employee";
import getEmployeePicture from "../utils/getEmployeePicture";
import formatDate from "../utils/formatDate";
import formatPhoneNumber from "../utils/formatPhoneNumber";

interface TableRowProps {
    employeeData: Employee;
}

function TableRow({ employeeData }: TableRowProps) {
    const [employeePicture, setEmployeePicture] = useState<string>("");

    useEffect(() => {
        const fetchEmployeePicture = async () => {
            const picture = await getEmployeePicture(employeeData);
            setEmployeePicture(picture);
        };

        fetchEmployeePicture();
    }, [employeeData]);

    return (
        <tr>
            <td>
                <img
                    className="employee_picture"
                    src={employeePicture}
                    alt="Employee Picture"
                />
            </td>

            <td className="test">{employeeData.name}</td>

            <td>{employeeData.job}</td>

            <td>{formatDate(employeeData.admission_date)}</td>

            <td>{formatPhoneNumber(employeeData.phone)}</td>
        </tr>
    );
}

export default TableRow;
