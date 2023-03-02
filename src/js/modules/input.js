import { cityFinder } from "./variables";
const cityFromInput = '';

cityFinder.forEach(item => {
    cityFromInput = item.value;
    item.value = '';
})
export default cityFromInput;