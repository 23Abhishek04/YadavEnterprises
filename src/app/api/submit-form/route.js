import { NextResponse } from "next/server";
import formidable from "formidable";
import cloudinary from "cloudinary";
import nodemailer from "nodemailer";

// Disable body parsing (needed for file upload)
export const config = {
  api: {
    bodyParser: false,
  },
};

// Cloudinary credentials from .env
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  return new Promise((resolve) => {
    const form = formidable({ keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("❌ Parse error:", err);
        return resolve(
          NextResponse.json(
            { success: false, message: "Parse failed" },
            { status: 500 }
          )
        );
      }

      try {
        const file = files.image;
        if (!file || !file.filepath) {
          return resolve(
            NextResponse.json(
              { success: false, message: "No file uploaded" },
              { status: 400 }
            )
          );
        }

        const upload = await cloudinary.v2.uploader.upload(file.filepath);
        const imageUrl = upload.secure_url;

        const name = fields.name?.[0] || "No name";
        const email = fields.email?.[0] || "No email";

        // Email setup
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: "New Form Submission",
          html: `
            <h2>New Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Image:</strong> <a href="${imageUrl}">View Image</a></p>
          `,
        });

        return resolve(NextResponse.json({ success: true }, { status: 200 }));
      } catch (error) {
        console.error("❌ Server error:", error);
        return resolve(
          NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
          )
        );
      }
    });
  });
}
