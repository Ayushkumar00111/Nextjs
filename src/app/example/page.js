export const instant=false
export default async function Example(){
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return <h1> this page take saome time </h1>;
}