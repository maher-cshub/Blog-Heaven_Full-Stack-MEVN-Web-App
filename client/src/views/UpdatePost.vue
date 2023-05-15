<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-sheet>
                    <v-card class="pa-5">
                        <v-card-title> Update Post</v-card-title>
                            <v-divider></v-divider>
                            <v-form @submit.prevent="updatePost" ref="form" class="pa-5" enctype="multipat/form-data">
                                <v-card-text>
                                    <!--BLOG TITLE-->
                                    <v-text-field v-model="title" label="Title" color="cyan" prepend-icon="mdi-plus" :rules="rules">
    
                                    </v-text-field>
    
                                    <!--BLOG CATEGORY-->
                                    <v-text-field v-model="category" label="Category" color="cyan" prepend-icon="mdi-format-list-checks" :rules="rules">
    
                                    </v-text-field>
    
                                    <!--BLOG CONTENT-->    
                                    <v-textarea v-model="content" label="Content" auto-grow background-color="grey lighten-2" color="cyan" prepend-icon="mdi-note" :rules="rules">
    
                                    </v-textarea>
    
                                    <!--BLOG IMAGE-->
                                    <v-file-input
                                        :rules="rules"
                                        @change="selectImage"
                                        color="cyan"
                                        label="Blog Cover Image"
                                        filled
                                        prepend-icon="mdi-image"
                                        v-model="new_image"
                                    >
                                    </v-file-input>
    
                            
                                </v-card-text>
    
                                <v-divider></v-divider>
    
                                <v-card-actions class="justify-center">
    
                                    <v-spacer />
    
                                    <v-btn
                                        type="submit" 
                                        color="deep-purple white--text" 
                                       
                                    >
    
                                        UPDATE POST
    
                                    </v-btn>
    
                                    <v-btn 
                                        text to="/"
                                    >
                                        EXIT TO HOME SCREEN
                                    </v-btn>
    
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </template>
    
    
    <script>
    
    import API from "../api"
    export default {
        data(){
            return{
                rules:[(value) =>
                !!value || "This field is Required"],
                    title: "",
                    category: "",
                    content: "",
    
            }
        },
        methods: {
            selectImage(file){
                this.new_image = file;
        
            },
            async updatePost(){
                console.log(this.category)
                if (this.$refs.form.validate()){
                    const formData = new FormData();
                    formData.append("image",this.new_image);
                    formData.append("old_image",this.image);
                    formData.append("title",this.title);
                    formData.append("category",this.category);
                    formData.append("content",this.content);
                    formData.append("date_updated",Date.now())
                    await API.updatePost(this.$route.params.id,formData);
                    this.$router.push({name:"Home",params:{message:"POST UPDATED SUCCESSFULY"}})
                }
            }
        },
        async created(){
            const id = this.$route.params.id;
            const post = await API.seePost(id);
            this.title = post.title;
            this.category = post.category;
            this.content = post.content;
            this.image = post.image;
            this.new_image = post.image;
            
        }
    }
    </script>