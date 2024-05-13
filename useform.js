import { useForm } from "react-hook-form"
import { schemaForm } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForm),
        defaultValues: {
            name: "",
            email: ""
        }
    })

    const handleFormSubmit = (data) => {
        console.log(data)
    }

    return {
        register,
        handleFormSubmit,
        handleSubmit,
        errors
    }

}