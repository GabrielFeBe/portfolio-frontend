import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import jwtsecret from '@/lib/jwtsecret'
import prisma from '../../../../../prisma'
const correctEmail = process.env.EMAIL || 'emailteste@gmail.com'

interface Context {
  params: {
    id: string
  }
}

export async function GET(__req: NextRequest, context: Context) {
  const id = Number(context.params.id)

  const array = await prisma.projects.findFirst({
    where: {
      id,
    },
  })
  return NextResponse.json(array)
}

export async function PATCH(req: NextRequest, context: Context) {
  const { id } = context.params
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
    const numberId = Number(id)
    if (isNaN(Number(numberId))) return NextResponse.error()

    await prisma.projects.update({
      where: {
        id: numberId,
      },
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

    return NextResponse.json({ message: 'Project updated sucessfully' })
  } catch (err) {
    return NextResponse.error()
  }
}
