import { NextResponse, NextRequest } from 'next/server'
import prisma from '../../../../../prisma'

export async function GET() {
  const array = await prisma.projects.findMany({
    where: {
      isFavorite: true,
    },
  })
  return NextResponse.json(array)
}
