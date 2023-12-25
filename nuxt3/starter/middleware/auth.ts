import storageHelper from "@/helpers/storage.helper";
import { useUserInfo } from "~/composables/userInfo";

export default defineNuxtRouteMiddleware((to, from) => {
  const loggedUser = useUserInfo();
  loggedUser.value = storageHelper.get("user");
  console.log(loggedUser.value);

  if (
    !loggedUser.value &&
    (to.path.includes("user-profile") || to.path.includes("dashboard"))
  ) {
    return navigateTo("/");
  }
});
