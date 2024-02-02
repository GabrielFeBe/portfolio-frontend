import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import jwtsecret from '@/lib/jwtsecret'
import prisma from '../../../../prisma'
const correctEmail = process.env.EMAIL || 'emailteste@gmail.com'

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization')
  const {
    projectImage,
    projectDescription,
    createdAt,
    repositoryLink,
    isFavorite,
    title,
    mainLanguage,
    deployLink,
  } = await req.json()
  try {
    const isValid = <jwt.UserRoleJwtPayload>jwt.verify(
      token as string,
      jwtsecret,
      {
        maxAge: '1d',
      },
    )
    if (isValid.email !== correctEmail) return NextResponse.error()
    await prisma.projects.create({
      data: {
        deployLink,
        isFavorite,
        mainLanguage,
        projectDescription,
        projectImage,
        repositoryLink,
        title,
        createdAt,
      },
    })

    return NextResponse.json({ message: 'Project created sucessfully' })
  } catch (err) {
    console.log('incorreto')
    return NextResponse.error()
  }
}
