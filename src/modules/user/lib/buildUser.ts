import { idModule } from "../../id";
import { userType } from "../../user";
import { authenticator } from "./authenticator";

export { buildUser };

async function buildUser({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}): Promise<userType> {
  const baseUser = await authenticator.buildBaseUser({ email, name, password });
  return {
    ...baseUser,
    _id: idModule.lib.buildId(),
  };
}
