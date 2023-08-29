<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="../src/assets/logo-empleo.png" alt="" width="30" height="24">
  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Listar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/editar" class="nav-link">Editar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crear" class="nav-link">Crear</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>