<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="#" class="breadcrumb-link">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="#" class="breadcrumb-link">Library</router-link></li>
      <li class="breadcrumb-item active breadcrumb-link" aria-current="page">Data</li>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: "BreadCrumb"
  }
</script>

<style lang="css">
  .breadcrumb {
    background-color: white;
  }
  .breadcrumb-link {
    font-size: 14px;
  }
</style>
