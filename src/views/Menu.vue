<template>
    <v-container fluid>
        <HomePlans/>
        <MealRecipes />
    </v-container>
</template>
<script>
import HomePlans from '@/components/HomePlans';
import MealRecipes from '@/components/MealRecipes';
export default {
    components: {
        HomePlans,
        MealRecipes
    }
}
</script>
