<template>
  <v-app>
    <v-layout>
      <v-container>
        <v-layout wrap>
          <v-btn
            dark
            fixed
            bottom
            right
            fab
            color="pink"
            @click.stop="drawer = !drawer"
          >
            <fa :icon="['fas', 'bars']" style="width: 25px; color: white;"/>
          </v-btn>
          <nuxt/>
        </v-layout>
      </v-container>

      <v-navigation-drawer
        v-model="drawer"
        class="maindark"
        dark
        fixed
        absolute
        temporary
        app
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img v-if="$store.state.admin" :src="$store.state.admin.avatar"/>
              <img v-else src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-if="$store.state.admin">{{this.$store.state.admin.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-group
            sub-group
            no-action
            v-for="item in items"
            :key="item.title"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                <v-list-tile-action>
                  <fa :icon="['fas', item.icon]" style="height: 16px; color: inherit;"/>
                </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="(sub, i) in item.sub"
              :key="i"
              @click="$router.push(sub.to)"
            >
              <v-list-tile-title v-text="sub.title"></v-list-tile-title>
              <v-list-tile-action>
                <fa :icon="['fas', sub.icon]" style="height: 16px; color: inherit;"/>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-app>
</template>
<script>
  export default {
    middleware: "auth",
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'home', sub: [
            {title: 'Welcome', icon: 'eye', to: '/admin'},
            {title: 'Status', icon: 'eye', to: "/admin/home/status"}
          ]},
          { title: 'Slide', icon: 'book-open', sub: [
            {title: 'Insert', icon: 'plus', to: "/admin/slide/insert"},
            {title: 'Update', icon: 'edit', to: "/admin/slide/update"},
            {title: 'Status', icon: 'eye', to: "/admin/slide/status"}
          ]}, { title: 'Event', icon: 'calendar-alt', sub: [
            {title: 'Insert', icon: 'plus', to: "/admin/event/insert"},
            {title: 'Update', icon: 'edit', to: "/admin/event/update"},
            {title: 'Status', icon: 'eye', to: "/admin/event/status"},
            {title: 'Description', icon: 'pen', to: "/admin/event/description"}
          ]}, { title: 'Blog', icon: 'blog', sub: [
            {title: 'Insert', icon: 'plus', to: "/admin/blog/insert"},
            {title: 'Update', icon: 'edit', to: "/admin/blog/update"},
            {title: 'Status', icon: 'eye', to: "/admin/blog/status"},
          ]}, { title: 'Project', icon: 'spider', sub: [
            {title: 'Insert', icon: 'plus', to: "/admin/project/insert"},
            {title: 'Update', icon: 'edit', to: "/admin/project/update"},
            {title: 'Status', icon: 'eye', to: "/admin/project/status"},
          ]}, { title: 'Timeline', icon: 'history', sub: [
            {title: 'Insert', icon: 'plus', to: "/admin/timeline/insert"},
            {title: 'Update', icon: 'edit', to: "/admin/timeline/update"},
            {title: 'Status', icon: 'eye', to: "/admin/timeline/status"},
          ]}, { title: 'Team', icon: 'users', sub: [
            {title: 'Insert', icon: 'plus', to: "/admin/team/insert"},
            {title: 'Update', icon: 'edit', to: "/admin/team/update"},
            {title: 'Status', icon: 'eye', to: "/admin/team/status"},
          ]}, { title: 'Contact Request', icon: 'id-badge', sub: [
            {title: 'Contact Us', icon: 'id-card', to: "/admin/contact/contactus"},
            {title: 'Subscription', icon: 'rss', to: "/admin/contact/subscription"},
            {title: 'CV', icon: 'jedi', to: "/admin/contact/cv"},
          ]}, { title: 'Uploads', icon: 'upload', sub: [
            {title: 'Image', icon: 'file-image', to: "/admin/uploads/image"},
            {title: 'Video', icon: 'file-video', to: "/admin/uploads/video"},
          ]}, { title: 'Config', icon: 'check-circle', sub: [
            {title: 'Footer', icon: 'shoe-prints', to: "/admin/config/footer"},
            {title: 'Social', icon: 'handshake', to: "/admin/config/special"},
          ]}, { title: 'Account', icon: 'user', sub: [
            {title: 'Profile', icon: 'user-cog', to: "/admin/account/profile"},
            {title: 'Logout', icon: 'sign-out-alt', to: "/admin/logout"}
          ]}



          // { title: 'Event', icon: 'calendar', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }
          // { title: 'Slide', icon: 'question_answer', to: "#" }

        ]
      }
    },
    mounted(){
      if(this.$store.state.token) this.$axios.setToken(this.$store.state.token);
    }
  }
</script>
<style scoped>

</style>
