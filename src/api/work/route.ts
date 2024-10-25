import prisma from "@/lib/db";
import { workSchema } from "@/lib/schema";

export const POST = async (req: Request, res: Response) => {
  try {
    // Parse the incoming request body as JSON
    const body = await req.json();

    // Validate the body against the workSchema
    const result = workSchema.safeParse(body);

    // Create a new work experience entry, including all required fields
    const work = await prisma.workExperience.create({
      data: result.data,
    });

    // Return the created work experience as a JSON response
    return new Response(JSON.stringify(work), {
      status: 201, // 201 Created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handle any unexpected errors
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
