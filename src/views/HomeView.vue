<script setup>
import { ref, onMounted, computed } from 'vue'
import SingleProject from '../components/SingleProject.vue'
import FilterNavVue from '../components/FilterNav.vue';

const current = ref('all')
const projects = ref([])


function handleDelete(id) {
  projects.value = projects.value.filter((project) => {
    return project.id !== id

  })
  
} 

function handleComplete(id) {
  let p = projects.value.find( project =>
   project.id === id
   )
   p.complete = !p.complete
}

const filteredProjects = computed(() => {
  if (current.value === 'completed') {
    return projects.value.filter(project => project.complete)
  }
  if (current.value === 'ongoing') {
    return projects.value.filter(project => !project.complete)
  }
  return projects.value

})

onMounted(() => {
  fetch('http://localhost:3000/projects')
  .then(res => res.json())
  .then(data => projects.value = data)
  .catch(err => console.log(err.message))
});



</script>

<template>
  <main >
    <div class="home">
      <FilterNavVue @filterChange="current = $event" :current="current" />
      <div class="" v-if="projects.length">
        <div class="" v-for="project in filteredProjects" :key="project.id">
          <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />

        </div>
    

      </div>

    </div>
  </main>
</template>

<style scoped>
.home{
  text-align: center;
  padding: 20px 0;
}


</style>
