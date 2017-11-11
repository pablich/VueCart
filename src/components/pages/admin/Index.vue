<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <ul class="list-group">
              <!-- Links are to sibling routes -->
              <li class="list-group-item"><router-link to="/admin">View Products</router-link></li>
              <li class="list-group-item"><router-link to="/admin/new">New Product</router-link></li>
            </ul>
          </div>
          <div class="col-md-9">
          <!-- Outlet for children routes -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>