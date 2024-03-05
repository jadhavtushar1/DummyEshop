import Item from "./Item"
interface getAllProducts {
    data :Item[]
}
interface homeState {
    allData : getAllProducts
}
export default homeState