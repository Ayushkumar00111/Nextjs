
export async function GET(request , {params}) {
   
    const {id}=  await params;
   const { searchParams } = new URL(request.url)
   const role = searchParams.get("role")
    
    
    return Response.json({
        message:"iam first api ",
        result:id,
        role:role
    })
    
}