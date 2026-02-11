import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log({body})
    const { accepted, activities, wishes } = body;

         console.log({ accepted, activities, wishes });

    const res = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "caleb-script@outlook.de",
      subject: "Rachel hat geantwortet ❤️",
      html: `
        <h2>Valentine Antwort</h2>
        <p><strong>Accepted:</strong> ${accepted}</p>
        <p><strong>Aktivitäten:</strong></p>
        <ul>
          ${activities.map((a: string) => `<li>${a}</li>`).join("")}
        </ul>
        <p><strong>Wünsche:</strong></p>
        <p>${wishes || "Keine"}</p>
        <hr/>
        <p>Zeit: ${new Date().toLocaleString()}</p>
      `,
    });

    console.log({id: res.data?.id})
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}