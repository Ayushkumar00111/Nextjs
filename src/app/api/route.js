export async function GET(request) {
   
    return Response.json({
        message:"iam first api",
        
    })
    
}
export async function  POST(request) {
 const data = await request.json(); 
    return Response.json({
        succes:"product was update",
        data:data
       
    },
 {
            status:201
        })
}

export async function  DELETE(request) {
    return Response.json({
        succes:"product was DELTE"
    })
}