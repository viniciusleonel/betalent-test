import { Employee } from "../types/Employee";

export default async function getEmployeePicture(employee: Employee) {
    return import(`../assets/${employee.name}.png`)
        .then(module => module.default)
        .catch(() => employee.image);
}