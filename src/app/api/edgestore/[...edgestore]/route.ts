import { initEdgeStore } from '@edgestore/server'
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app'
import * as z from 'zod'
import * as jwt from 'jsonwebtoken'
const es = initEdgeStore.create()
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es
    .fileBucket()
    .input(z.object({ token: z.string() }))
    .beforeUpload(({ ctx, input, fileInfo }) => {
      console.log(ctx, fileInfo, input)
      const user = <jwt.UserRoleJwtPayload>jwt.decode(input.token)
      if (!user) {
        return false
      }
      if (user.email) {
        return true
      }
      return false
    }),
})
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
})
export { handler as GET, handler as POST }
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter
