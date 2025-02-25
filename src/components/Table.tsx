import "../styles/Table.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table() {
    return (
        <div className="table-container">
            <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {/* <TableRow /> */}
            </tbody>
        </table>
        </div>
    );
}

export default Table;
