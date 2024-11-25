
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
import { z } from "zod"

const loginSchema = z.object({
    input: z.string()
})

export default loginSchema