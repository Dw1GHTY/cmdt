import { NextRequest, NextResponse } from "next/server";
import { transport } from "@/lib/nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  console.log("email api route data:", requestBody);

  const {
    firstName,
    lastName,
    company,
    email,
    phoneNumber,
    specificProduct,
    industry,
    additionalMessage, // Fix the name
  } = requestBody;
  const mailOptions: Mail.Options = {
    from: process.env.COMPANY_EMAIL,
    to: process.env.COMPANY_EMAIL,
    subject: "Email from Complete Mobile Drug Testing customer", // Plain text subject line
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="font-size: 20px; font-weight: bold;">Email from Complete Mobile Health customer</h2>
            <p><strong>NAME:</strong> ${firstName}</p>
            <p><strong>LAST NAME:</strong> ${lastName}</p>
            <p><strong>COMPANY:</strong> ${company}</p>
            <p><strong>EMAIL:</strong> ${email}</p>
            <p><strong>PHONE NUMBER:</strong> ${phoneNumber}</p>
            <p><strong>SPECIFIC PRODUCT:</strong> ${specificProduct}</p>
            <p><strong>INDUSTRY:</strong> ${industry}</p>
            <p><strong>ADDITIONAL MESSAGE:</strong> ${additionalMessage}</p>   
        </div>
    `,
  };
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent!" });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
