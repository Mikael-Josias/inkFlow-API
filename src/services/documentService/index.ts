import { NotFoundError, InternalError } from '@/errors'
import { createDocument, findDocumentById, getUserById } from '@/repositories'
import { updateDocument } from '@/repositories'

type updateDocumentByIdProps = {
  id: string,
  title: string,
  data: object
}

export async function createNewDocument(userId: string) {
  const user = await getUserById(userId)
  if (!user) throw NotFoundError('User not found!')

  try {
    const res = await createDocument(userId)
    return res.insertedId
  } catch (error) {
    throw InternalError('Unexpected error!')
  }
}

export async function getDocumentData(documentId: string) {
  const document = await findDocumentById(documentId)
  if(!document) throw NotFoundError('Document not found!')
  return document
}

export async function updateDocumentById({id, title, data}: updateDocumentByIdProps) {
  await updateDocument(id, title, data)
}