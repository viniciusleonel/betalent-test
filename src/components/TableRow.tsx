import { useEffect, useState } from "react";
import "../styles/Table.css";
import { Employee } from "../types/Employee";
import getEmployeePicture from "../utils/getEmployeePicture";
import formatDate from "../utils/formatDate";
import formatPhoneNumber from "../utils/formatPhoneNumber";
import arrowDown from "../assets/charm_chevron-down.svg"
import arrowUp from "../assets/charm_chevron-up.svg"


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
            <td className="employee_picture_container">
                <img
                    className="employee_picture"
                    src={employeePicture}
                    alt="Employee Picture"
                />
            </td>

            <td>{employeeData.name}</td>

            <td className="icon_container">
                <button className="icon_button">
                    <img src={arrowDown} alt="Icon" className="icon_svg" />
                </button>
            </td>

            <td className="employeeData_job">{employeeData.job}</td>

            <td className="employeeData_admission_date">{formatDate(employeeData.admission_date)}</td>

            <td className="employeeData_phone">{formatPhoneNumber(employeeData.phone)}</td>
        </tr>
    );
}

export default TableRow;
