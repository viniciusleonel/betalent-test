export default function formatDate (data: string) {
    return new Date(data.split(",")[0].split("/").reverse().join("-")).toLocaleDateString("pt-BR");
}