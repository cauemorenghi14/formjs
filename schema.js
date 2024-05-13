import { z } from "zod"

export const schemaForm = z.object({
    name: z.string().min(8, 'Nome deve ter no mínimo 8 caracteres'),
    email: z.string().email('Email inválido')
})