import "../styles/Table.css";

function TableHeader() {
    return (
        <tr>
            <th
                scope="col">FOTO
            </th>

            <th
                className="test"
                scope="col">NOME
            </th>

            <th
                scope="col">CARGO
            </th>

            <th
                scope="col">DATA DE ADMISSÃO
            </th>

            <th
                scope="col">TELEFONE
            </th>

        </tr>
    );
}

export default TableHeader;
