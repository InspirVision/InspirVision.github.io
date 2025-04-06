export async function GET(){
const res = await fetch("http://localhost:5000/images")
const images = await res.json();

return NextResponse.json(images); // returns the todo data that was fetched 
}

export async function POST(request){
const body = await request.json();

const res = await fetch("http://localhost:5000/images", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(body),
});

const images = await res.json();
return NextResponse.json(images);
}