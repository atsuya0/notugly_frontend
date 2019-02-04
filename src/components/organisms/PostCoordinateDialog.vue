<template>
  <v-layout row justify-center>
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Post coordinate</span>
        </v-card-title>
        <v-card-text>
          <input type="file" accept="image/*" @change="readImage" />
          <v-img :src="image" contain max-height="500"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="close">Close</v-btn>
          <v-btn
            color="blue-grey lighten-4"
            :loading="isLoading"
            :disabled="isLoading"
            @click="postCoordinate"
          >
            POST
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "PostCoordinateDialog",
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    isLoading: false,
    image: ""
  }),
  methods: {
    readImage: function(event) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("error", err => {
        console.log(err);
      });
      reader.addEventListener("loadend", () => {
        this.image = reader.result;
      });
      reader.readAsDataURL(file);
    },
    postCoordinate: async function() {
      this.isLoading = true;
      await this.$emit("postCoordinate", this.image);
      this.isLoading = false;
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  }
};
</script>
