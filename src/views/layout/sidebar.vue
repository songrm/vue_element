<template>
  <scrollbar>
    <el-menu
      :collapse="sbar_width"
      class="el-menu-vertical-demo fix_but"
      background-color="#272c32"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in permission_routers">
        <router-link
          v-if="item.hidden&&item.children === undefinde"
          :to="item.path"
          :key="item.path"
        >
          <el-menu-item :index="item.path">
            <svg
              class="icon sider_i"
              aria-hidden="true"
            >
              <use :bind:xlink:href="item.icon" />
            </svg>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>

        <el-submenu
          v-else-if="item.hidden"
          :index="item.num_w"
          :key="item.path"
        >
          <template slot="title">
            <svg
              class="icon sider_i"
              aria-hidden="true"
            >
              <use :bind:xlink:href="item.icon" />
            </svg>
            <span slot="title">{{ item.name }} </span>
          </template>
          <template v-for="child in item.children">

            <router-link
              :to="child.path"
              :key="child.name"
            >
              <el-menu-item :index="child.num_w">
                {{ child.name }}
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>

    </el-menu>
  </scrollbar>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import scrollbar from '@/components/scrollbar/index'
export default {
  name: 'Sildebar',
  components: { scrollbar },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'addRouters',
      'sbar_width'
    ])
  },
  methods: {

  }

}
</script>
<style>
/*.fix_but{position: absolute;;bottom: 0px;top:0px;left: 0px;width: 200px;}*/
.el-menu {
  width: 200px;
  border: 0px;
}
.hidesb {
  width: 64px !important;
}
.sider_i {
  width: 15px !important;
  height: 15px !important;
  margin: 0px 15px 0px 0px;
}
.el-menu--dark {
  background-color: #272c32;
}
.hidesider .scroll-container .scroll-wrapper ul > a > li > span {
  display: none;
}
</style>
