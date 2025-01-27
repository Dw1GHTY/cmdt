import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../db_services/db";
import Company from "@/models/companyModel";

export async function GET() {
  try {
    await connectToMongoDB();
    const data = await Company.find();
    return NextResponse.json(data, {status: 200});
    
  } catch (error) {
    console.error("Error in /api/companies:", error);
    return NextResponse.json(
      { message: "Error fetching companies data" },
      { status: 500 }
    );
  }
}