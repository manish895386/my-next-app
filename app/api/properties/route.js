import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const properties = await Property.find({}).lean();
    return NextResponse.json(properties, { status: 200 });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
