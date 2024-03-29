import { z } from "zod";

const AddNewEntrance = z.object({
  name: z.string(),
  email: z.string().email({ message: "E-mail inválido" }),
});
