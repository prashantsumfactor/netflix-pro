const { Magic } = require("magic-sdk");

 const createMagic = () =>{
    return (
        typeof window !== 'undefined' && 
        new Magic(process.env.MAGIC_API_SECRET_KEY)
    );
 };

export const magic  = createMagic();
console.log('magic setup',magic);
