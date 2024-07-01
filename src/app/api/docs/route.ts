import { NextResponse } from "next/server";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../../../../swaggerConfig";

export async function GET(req: Request) {
  const swaggerHTML = swaggerUi.generateHTML(swaggerSpec);
  return new NextResponse(swaggerHTML, {
    headers: { "Content-Type": "text/html" },
  });
}
