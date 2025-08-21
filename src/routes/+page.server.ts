import { redirect } from "@sveltejs/kit";

export async function load() {
  redirect(300, "/captain-falcon")
}
