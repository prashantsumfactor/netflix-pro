const { Magic } = require("magic-sdk");

 const createMagic = () =>{
    return (
        typeof window !== 'undefined' && 
        new Magic(process.env.NEXT_PUBLIC_MAGIC_API_PUBLIC_KEY)
    );
 };

export const magic  = createMagic();
console.log('magic setup',magic);
