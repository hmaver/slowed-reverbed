<template>
    <v-toolbar fixed class="orange">
    <v-toolbar-title class="mr-4">
        Slowed and Reverbed
    </v-toolbar-title>
<!-- 
    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items> -->

    <v-spacer>    </v-spacer>
        <v-toolbar-items>
            <v-btn flat dark router to ="search">
                Slow Down Time
            </v-btn>

            <v-btn flat dark router to ="login">
                Log In
            </v-btn>

            <v-btn flat dark router to ="register">
                Sign Up
            </v-btn>

        </v-toolbar-items>
        

    </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
