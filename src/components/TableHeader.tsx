import "../styles/Table.css";

function TableHeader() {
    return (
        <tr>
            <th
                className="employee_picture_container"
                scope="col"
            >
                FOTO
            </th>

            <th scope="col">NOME</th>

            <th
                className="icon_container"
                scope="col"
            >
                <span className="circle_icon"></span>
            </th>

            <th
                className="employeeData_job"
                scope="col"
            >
                CARGO
            </th>

            <th
                className="employeeData_admission_date"
                scope="col"
            >
                DATA DE ADMISSÃO
            </th>

            <th
                className="employeeData_phone"
                scope="col"
            >
                TELEFONE
            </th>
        </tr>
    );
}

export default TableHeader;
