/**
 *
 * resource processing function list
 * choose your way
 */
const parse: Record<K, (...any: any[]) => any> = {
    // pre:(blob:Blob)=>{FileReader(blob)},
    // audio:(audio,bind?)=>{
    // },
    // image:(image:Blob)=>new
} as const;
export default parse;
