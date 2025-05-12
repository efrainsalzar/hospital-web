<!-- src/components/NewsPost.vue -->
<template>
  <v-col cols="12" md="8">
        <div
          v-for="(post, index) in newsPosts"
          :key="index"
          class="news_post mb-8"
        >
          <div class="news_image">
            <img :src="post.imagen" alt="Imagen de la noticia" />
            <div class="news_date">
              <div class="news_day">{{ post.date.day }}</div>
              <div class="news_month">{{ post.date.month }}</div>
            </div>
          </div>

          <div class="news_body">
            <div class="news_title">
              <a href="#">{{ post.title }}</a>
            </div>

            <div class="news_info">
              <ul>
                <li class="news_author"><span>By </span><a href="#">{{ post.author }}</a></li>
                <li class="news_tags"><span>in </span><a href="#">{{ post.category }}</a></li>
                <li class="news_comments"><a href="#">{{ post.comments }} Comments</a></li>
              </ul>
            </div>

            <div class="news_text">
              <p>{{ post.summary }}</p>
            </div>

            <div class="news_link">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </v-col>
</template>

<script setup>
const newsPosts = [
  {
    imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
    date: { day: '15', month: 'March' },
    title: '10 Reasons to make a check up',
    author: 'Dr. William Smith',
    category: 'Therapy',
    comments: 3,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa.',
  },
]
</script>

<style scoped>
/* News Card Styles */
.news_post {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
}

.news_image {
  position: relative;
}
.news_image img {
  width: 100%;
  height: auto;
  display: block;
}
.news_date {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #2ecc71;
  color: white;
  padding: 8px 10px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
}
.news_day {
  font-size: 20px;
}
.news_month {
  font-size: 12px;
  text-transform: uppercase;
}
.news_body {
  padding: 24px;
}
.news_title a {
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #2c3e50;
}
.news_info ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 12px 0;
  list-style: none;
  gap: 8px;
}
.news_info a {
  color: #2ecc71;
  font-weight: 500;
  text-decoration: none;
}
.news_text p {
  color: #444;
}
.news_link a {
  color: #2ecc71;
  text-decoration: none;
  font-weight: bold;
}

</style>
