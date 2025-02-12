import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../db_services/db";
import Franchise from "@/models/franchiseModel";

export async function GET() {
  try {
    await connectToMongoDB();
    const data = await Franchise.find();
    return NextResponse.json(data, {status: 200});
  
  } catch (error) {
    console.error("Error in /api/franchises:", error);
    return NextResponse.json(
      { message: "Error fetching franchises data" },
      { status: 500 }
    );
  }
}