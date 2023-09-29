import fetch from "node-fetch";
import { User } from "./types";
import { urls } from "./urls";
import { cast } from "./util";

export const getFwUser = async (cookie: string): Promise<User> => {
  const res = await fetch(urls.fw + "/api/users/@me", {
    headers: {
      authorization: cookie,
    },
  });

  const data = cast<User>(await res.json());
  if (!data || !data.id) throw new Error("Invalid cookie");

  return data;
};
