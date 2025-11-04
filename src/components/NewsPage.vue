<template>
  <!-- Header Section -->
  <div class="news-header grid-item grid-news-header">
    <h1 class="news-heading">
      <span class="line-wrapper"><span class="line">The latest word <br> on domains</span></span>
     
    </h1>
    <p class="subtitle-text">Stay informed about the latest developments in <br> domain names, acquisitions, and industry trends.</p>
  </div>

  <div class="news-content grid-item grid-news-content">
    <div class="news-article">
      <h2 class="article-title">Exciting News! .TR Domains Now Available for Registration in Turkey</h2>
      <p class="article-text">Calling all businesses looking to strengthen their presence in the Turkish market! 📢The Turkish domain name registry has finally opened registrations for direct .TR domains! 🔛Previously, businesses relied on third-level…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">New Regulations for .cn Domains in China!</h2>
      <p class="article-subtitle">ICP License in on .cn domains</p>
      <p class="article-text">The Ministry of Industry and Information Technology (MIIT), China's internet regulator, has implemented new rules for .cn domains. You now require an Internet Content…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">JM Bullion Acquires Gold.com Domain</h2>
      <p class="article-text">JM Bullion has made a significant move in the domain name industry by acquiring gold.com 👏 A powerful one-word .com domain in the precious metals industry.The acquisition of this short, memorable and…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">How to Choose an Effective Domain Name for Your Organization</h2>
      <p class="article-text">In today's digital age, your organization's domain name is much more than just a web address. It's a crucial element of your brand identity, the first impression you make on…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">Top 5 Increasing Domain Focus Areas for success in 2024</h2>
      <p class="article-text">Here's everything you should focus on in 2024 to achieve success with your domain strategy. 1\. Security at the Forefront:Domain names are essential digital assets, and like any valuable possession,…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">New client: Philipson Wine</h2>
      <p class="article-text">Philipson Wine is now a part of Dotwhat. We are thrilled to be managing their domains, and we are committed to providing them with the best possible service. We know…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">Case study: Implement Consulting Group P/S</h2>
      <p class="article-text">Implement Consulting Group P/S recently became a client at DotWhat. Our Domain Strategist & DNS Consultant, Pernille, did an interview with Jesper Møller Damm Christensen from Implement Consulting Group, about…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">Pedestal.com secured</h2>
      <p class="article-text">What does your domain name communicate about your brand? Domain Name = Brand = Brand Equity Your domain pre-frames how your customers will view your brand and for Pedestal there was no…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>

    <div class="news-article">
      <h2 class="article-title">Case study</h2>
      <p class="article-subtitle">Full overview-Control-Security</p>
      <p class="article-text">With the services from dotwhat we now have a full overview of our domain portfolio and full control over our domains, which gives us peace of mind to…</p>
      <a href="#" class="read-more-link">Read More</a>
    </div>
  </div>
  
  <div class="news-pagination grid-item grid-news-pagination">
    <div class="pagination">
      <a href="#" class="page-number active">1</a>
      <a href="#" class="page-number">2</a>
      <a href="#" class="page-number">3</a>
      <a href="#" class="page-number">4</a>
      <a href="#" class="page-number next">Next »</a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.grid-news-header {
  grid-column: 1 / 7;
  grid-row: 1;
  padding: 0;
  margin-top: 35vh;
  margin-bottom: 10vh;
  position: fixed;
}

.news-heading {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 400;
  margin: 0 0 2rem 0;
  font-size: 5rem;
  line-height: 1.3;
}

.subtitle-text {
  font-family: 'BeVietnamPro-Regular', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.grid-news-content {
  grid-column: 1 / 13;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 0;
  margin-top: 99vh;
}

.news-article {
  grid-column: 6 / 12;
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.news-article:last-child {
  border-bottom: none;
}

.article-title {
  color: white;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.article-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
}

.article-text {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
}

.read-more-link {
  color: #0a7a80;
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.read-more-link:hover {
  color: white;
}

.grid-news-pagination {
  grid-column: 1 / 13;
  grid-row: 3;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.pagination {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.page-number {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'BeVietnamPro-Regular', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.page-number:hover {
  color: white;
  background: #0a7a80;
}

.page-number.active {
  color: white;
  background: #10a28e;
}

.page-number.next {
  margin-left: 1rem;
  padding-left: 1.5rem;
}

@media (max-width: 768px) {
  .grid-news-header {
    grid-column: 1 / 13;
    margin-top: 15vh;
    padding: 0 20px;
  }

  .news-heading {
    font-size: 2rem;
  }

  .grid-news-content {
    padding: 0 20px;
  }
  
  .news-article {
    grid-column: 1 / 13;
  }
  
  .article-title {
    font-size: 1.5rem;
  }
}
</style>

