import {NextRequest, NextResponse} from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const newIssueSchema = z.object({
    title: z.string().min(1, 'Title is Required').max(255),
    description: z.string().min(1, 'Description is required')
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = newIssueSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json({error: validation.error.format()}, { status: 400 })

    const newUser = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(
        newUser,
        { status: 201 }
    )
}
