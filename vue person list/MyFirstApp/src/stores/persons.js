import { defineStore } from "pinia";

export const useUsersStore = defineStore({
  id: "users",

  state: () => ({
    users: [
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
  getters: {
    getUsers: (state) => state.users,
  },
});
