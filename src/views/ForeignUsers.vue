<script setup>

import { ref, onMounted } from "vue";
import axios from "axios";
import {triggerError} from "@/helpers/ErrorHelper.js";

const users = ref([]);
const currentPage = ref(1);
const pageSize = 4;
const totalPages = ref(1);

const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    console.log(response);
    users.value = response.data.map(user => ({
      id: user.id || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      location: user.location || '',
      phone: user.phone || '',
    }));
    // totalPages.value = response.data.totalPages;
  } catch (err) {
    triggerError('Error fetching users: ' + err.message);
  }
};

const nextPage = () => {
  currentPage.value++;
  fetchUsers();
};

const previousPage = () => {
  currentPage.value--;
  fetchUsers();
};

onMounted(fetchUsers);

</script>

<template>

  <div class="bg-white h-dvh">
    <div class="grid grid-cols-5 gap-y-3 p-10">
      <a v-for="user in users" :key="user.id" :href="'/user/' + user.id" class="group hover:bg-gray-200 bg-gray-100 col-start-2 col-span-3 rounded-lg">
        <div class="flex min-w-0 min-h-12 gap-y-4 m-2">
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">{{ user.email }}</p>
            <p class="mt-1 text-xs/5 text-gray-500">{{user.firstName + " " + user.lastName }}</p>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm/6 text-gray-900">{{ user.location }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>