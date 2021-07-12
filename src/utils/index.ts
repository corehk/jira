import {
    useEffect,
    useState
} from "react";

export const isFalsy = (value: unknown): boolean => value === 0 ? false : !value

// 在一个函数里改变传入的对象本身是不好的
export const cleanObject = (object: any) => {
    const result = {
        ...object
    }
    Object.keys(result).forEach(key => {
        const value = object[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    });
    return result
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce =<V> (value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        // 每次在value变化以后，设置一个定时器
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        //   每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}

// export const useArray =<T>(initialArray:T[])=>{
//     const [value,setValue]=useState(initialArray)
//     return{
//         value,
//         setValue,
//         add:(item:T)=>setValue([...value,item]),
//         clear:()=>setValue([]),
//         removeIndex:()=>{
//             const copy=[...value]
//             copy.splice(index,1)
//             setValue(copy)
//         }
//     }
// }