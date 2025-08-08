import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Heart,
  MessageSquare,
  Share2,
  Bookmark
} from "lucide-react";
import blogHero from "@/assets/doctor-profile.jpg"; // Using existing image as placeholder
import { useLanguage } from "@/contexts/LanguageContext";

// Sample blog post data
const featuredPosts = [
  {
    id: 1,
    titleKey: "blog.featuredPosts.post1.title",
    excerptKey: "blog.featuredPosts.post1.excerpt",
    categoryKey: "blog.featuredPosts.post1.category",
    authorKey: "blog.featuredPosts.post1.author",
    dateKey: "blog.featuredPosts.post1.date",
    readTimeKey: "blog.featuredPosts.post1.readTime",
    image: blogHero,
    tagsKeys: ["blog.featuredPosts.post1.tag1", "blog.featuredPosts.post1.tag2", "blog.featuredPosts.post1.tag3"]
  },
  {
    id: 2,
    titleKey: "blog.featuredPosts.post2.title",
    excerptKey: "blog.featuredPosts.post2.excerpt",
    categoryKey: "blog.featuredPosts.post2.category",
    authorKey: "blog.featuredPosts.post2.author",
    dateKey: "blog.featuredPosts.post2.date",
    readTimeKey: "blog.featuredPosts.post2.readTime",
    image: blogHero,
    tagsKeys: ["blog.featuredPosts.post2.tag1", "blog.featuredPosts.post2.tag2", "blog.featuredPosts.post2.tag3"]
  },
  {
    id: 3,
    titleKey: "blog.featuredPosts.post3.title",
    excerptKey: "blog.featuredPosts.post3.excerpt",
    categoryKey: "blog.featuredPosts.post3.category",
    authorKey: "blog.featuredPosts.post3.author",
    dateKey: "blog.featuredPosts.post3.date",
    readTimeKey: "blog.featuredPosts.post3.readTime",
    image: blogHero,
    tagsKeys: ["blog.featuredPosts.post3.tag1", "blog.featuredPosts.post3.tag2", "blog.featuredPosts.post3.tag3"]
  }
];

const recentPosts = [
  {
    id: 4,
    titleKey: "blog.recentPosts.post1.title",
    categoryKey: "blog.recentPosts.post1.category",
    dateKey: "blog.recentPosts.post1.date",
    readTimeKey: "blog.recentPosts.post1.readTime"
  },
  {
    id: 5,
    titleKey: "blog.recentPosts.post2.title",
    categoryKey: "blog.recentPosts.post2.category",
    dateKey: "blog.recentPosts.post2.date",
    readTimeKey: "blog.recentPosts.post2.readTime"
  },
  {
    id: 6,
    titleKey: "blog.recentPosts.post3.title",
    categoryKey: "blog.recentPosts.post3.category",
    dateKey: "blog.recentPosts.post3.date",
    readTimeKey: "blog.recentPosts.post3.readTime"
  },
  {
    id: 7,
    titleKey: "blog.recentPosts.post4.title",
    categoryKey: "blog.recentPosts.post4.category",
    dateKey: "blog.recentPosts.post4.date",
    readTimeKey: "blog.recentPosts.post4.readTime"
  }
];

const categories = [
  { nameKey: "blog.categories.telemedicine", count: 12 },
  { nameKey: "blog.categories.preventiveCare", count: 8 },
  { nameKey: "blog.categories.mentalHealth", count: 15 },
  { nameKey: "blog.categories.nutrition", count: 10 },
  { nameKey: "blog.categories.medications", count: 7 },
  { nameKey: "blog.categories.wellness", count: 14 },
  { nameKey: "blog.categories.chronicCare", count: 9 }
];

const Blog = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-medical-light to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('blog.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('blog.hero.description')}
          </p>
          <div className="flex justify-center space-x-4">
            <Button>
              {t('blog.hero.subscribeButton')}
            </Button>
            <Button variant="outline">
              {t('blog.hero.browseCategoriesButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('blog.featuredArticles.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={t(post.titleKey)}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {t(post.categoryKey)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{t(post.readTimeKey)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {t(post.titleKey)}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {t(post.excerptKey)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{t(post.authorKey)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{t(post.dateKey)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline">
              {t('blog.featuredArticles.viewAllButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('blog.latestHealthInsights.title')}
              </h2>
              
              {/* Health Tips Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-primary" />
                    {t('blog.healthTips.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>
                      {t('blog.healthTips.description')}
                    </p>
                    <h3>{t('blog.healthTips.quickTipsTitle')}</h3>
                    <ul>
                      <li>{t('blog.healthTips.tip1')}</li>
                      <li>{t('blog.healthTips.tip2')}</li>
                      <li>{t('blog.healthTips.tip3')}</li>
                      <li>{t('blog.healthTips.tip4')}</li>
                      <li>{t('blog.healthTips.tip5')}</li>
                    </ul>
                    <p>
                      {t('blog.healthTips.conclusion')}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link to="/book">
                      <Button>
                        Book a Consultation
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Articles */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {t('blog.recentArticles.title')}
                </h3>
                {recentPosts.map((post) => (
                  <Card key={post.id} className="transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {t(post.categoryKey)}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-3">
                        <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {t(post.titleKey)}
                        </Link>
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{t(post.dateKey)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{t(post.readTimeKey)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t('blog.sidebar.categoriesTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.nameKey} className="flex justify-between items-center">
                        <Link 
                          to={`/blog/category/${t(category.nameKey).toLowerCase().replace(' ', '-')}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t(category.nameKey)}
                        </Link>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter Signup */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">{t('blog.sidebar.newsletterTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-primary-foreground/90">
                    {t('blog.sidebar.newsletterDescription')}
                  </p>
                  <div className="space-y-2">
                    <input 
                      type="email" 
                      placeholder={t('blog.sidebar.newsletterPlaceholder')} 
                      className="w-full px-4 py-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                    />
                    <Button variant="secondary" className="w-full">
                      {t('blog.sidebar.newsletterButton')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tags Cloud */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t('blog.sidebar.tagsTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(featuredPosts.flatMap(post => post.tagsKeys))).map((tagKey) => (
                      <Badge key={tagKey} variant="outline" className="hover:bg-muted cursor-pointer">
                        {t(tagKey)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('blog.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('blog.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button variant="secondary">
                {t('blog.cta.bookConsultationButton')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                {t('blog.cta.contactUsButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;