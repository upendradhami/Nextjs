import { comments } from "../data";

export async function GET(_request: Request ,{params} : {params : Promise<{id: string}>}){
  const {id} = await params;
  const text = comments.find(cmt => cmt.id === parseInt(id));
  return Response.json(text)
}

export async function PATCH(request: Request , 
  {params} : {
    params: Promise<{id:string}>
  }
){
  const comment = await request.json();
  const text = comment.comment;
  const {id} = await params;
  const  index = comments.findIndex(comt => comt.id === parseInt(id));
  comments[index].comment = text;

  return Response.json(comments[index])
}

export async function DELETE(_request: Request , 
  {params}:{
    params : Promise<{id: string}>
  }
){
  const {id} = await params;
  const index = comments.findIndex(cmt => cmt.id === parseInt(id));
  const dltdCmt = comments.splice(index,1);

  return Response.json(dltdCmt)
}