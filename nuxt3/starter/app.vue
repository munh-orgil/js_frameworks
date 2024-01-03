<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<script setup lang="ts">
import storageHelper from "./helpers/storage.helper";

const route = useRoute()
if (route.query.token) {
  storageHelper.set("token", route.query.token);
  document.location.href = "/users"
}

const userInfo = useUserInfo();
userInfo.value = storageHelper.get("user")
const token = useUserToken();
token.value = storageHelper.get("token");

if (token.value == null || token.value == "") {
  document.location.href = "https://accounts.gerege.mn/auth?app_id=40099&continue=http://localhost:3000/"
}
</script>