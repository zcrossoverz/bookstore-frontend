<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'App',
  computed: {
        ...mapGetters({
            currentUser: "loggedInUser",
        }),
    },
    methods: {
        ...mapMutations([
            "initAuthState" // map this.initAuthState() to this.$store.commit("initAuthState")
        ]),

        logout() {
            this.$store.commit("logout");
            this.$router.push("login");
        },
    },
    mounted() {
        this.initAuthState();
    }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
