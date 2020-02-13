<template>
  <div>
    <InputBind/>
    <ConditionallyShow/>
    <List/>
    <CssClass/>
    <AlterState/>
  </div>
</template>

<script>

export default {
  components:{
    InputBind: () => import('@/examples/InputBind'),
    ConditionallyShow: () => import('@/examples/ConditionallyShow'),
    List: () => import('@/examples/List'),
    CssClass: () => import('@/examples/CssClass'),
    AlterState: () => import('@/examples/AlterState'),
  }
}
</script>
