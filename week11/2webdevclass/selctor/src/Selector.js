

export const counterAtom = atom({
    default:0,
    key:"counter"
})

export const evenselctor = selector({
    key:"isEvenSelector",
    get:function({get}){
        const currentcount = get(counterAtom);
        const isEven = (currentcount%2 ==0);
        return isEven;
    }
})