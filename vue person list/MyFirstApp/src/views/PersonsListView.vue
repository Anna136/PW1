<script>
import CList from "../components/List.vue";
import CDetails from "../components/Details.vue";
import {useUsersStore} from "../stores/persons";

export default {
  components: { CDetails, CList },

  setup() {
    const store = useUsersStore();

    return { store }
  },

  data: () => ({
    item: null,
    list: [
      {
        name: "Ion Creanga",
        phone: "012345678",
        email: "ioncreanga@gmail.com",
      },
      {
        name: "Mihai Eminescu",
        phone: "012345678",
        email: "mihaieminescu@gmail.com",
      },
      {
        name: "Grigore Vieru",
        phone: "012345678",
        email: "grigorevieru@gmail.com",
      },
    ],
  }),

  mounted() {
    if (localStorage.getItem("selected_user")) {
      this.item = JSON.parse(localStorage.getItem("selected_user"));
    }
  },

  methods: {
    setItem(item) {
      this.item = item;

      localStorage.setItem("selected_user", JSON.stringify(item));
    },
  },
};
</script>

<template>
  <div class="container">
    <c-list @input="setItem" :list="store.getUsers"></c-list>
    <c-details :user="item"></c-details>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
