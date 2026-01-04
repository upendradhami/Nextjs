import { comments } from "./data";

export async function GET(){
  return Response.json(comments)
}

export async function POST(request : Request) {
  const text = await request.json();
  const newComment = {
    id: comments.length+1,
    comment: text.comment,
  }

  comments.push(newComment);
  return new Response(JSON.stringify(newComment),
{
  headers: {"content-type": "application/json"},
  status: 201,
})

}