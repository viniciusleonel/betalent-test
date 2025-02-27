import { useEffect, useState } from "react";
import "../styles/Table.css";
import { Employee } from "../types/Employee";
import getEmployeePicture from "../utils/getEmployeePicture";
import formatDate from "../utils/formatDate";
import formatPhoneNumber from "../utils/formatPhoneNumber";
import arrowDown from "../assets/charm_chevron-down.svg";
import arrowUp from "../assets/charm_chevron-up.svg";

interface TableRowProps {
    employeeData: Employee;
}

function TableRow({ employeeData }: TableRowProps) {
    const [employeePicture, setEmployeePicture] = useState<string>("");
    const [isMobileTableOpen, setMobileTableOpen] = useState(false);

    useEffect(() => {
        const fetchEmployeePicture = async () => {
            const picture = await getEmployeePicture(employeeData);
            setEmployeePicture(picture);
        };

        fetchEmployeePicture();
    }, [employeeData]);

    const handleMobileTable = () => {
        setMobileTableOpen(!isMobileTableOpen);
    };

    return (
        <>
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
                        <button
                            onClick={handleMobileTable}
                            className="icon_button"
                        >
                            <img
                                src={isMobileTableOpen ? arrowUp : arrowDown}
                                alt="Expandir/Fechar"
                                className="icon_svg"
                            />
                        </button>
                    </td>

                <td className="employeeData_job">{employeeData.job}</td>

                <td className="employeeData_admission_date">
                    {formatDate(employeeData.admission_date)}
                </td>

                <td className="employeeData_phone">
                    {formatPhoneNumber(employeeData.phone)}
                </td>
            </tr>

            {isMobileTableOpen && (
                <tr className="expanded-row">
                    <td colSpan={6}>
                        <p className="expanded_details h3"><strong>Cargo:</strong> {employeeData.job}</p>
                        <p className="expanded_details h3"><strong>Data de Admissão:</strong> {formatDate(employeeData.admission_date)}</p>
                        <p className="expanded_details h3"><strong>Telefone:</strong> {formatPhoneNumber(employeeData.phone)}</p>
                    </td>
                </tr>
            )}
        </>
    );
}

export default TableRow;
