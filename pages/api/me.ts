import { validateRoute } from "../../lib/auth";

// validateRoute valida que el usuario tenga un token valido y si es asi,
// devuelve user
export default validateRoute((req, res, user) => {
  res.json(user)
})