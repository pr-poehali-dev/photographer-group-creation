import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type PhotoCategory = 'all' | 'portrait' | 'wedding' | 'reportage' | 'studio';

interface Photo {
  id: number;
  url: string;
  category: PhotoCategory;
  title: string;
}

const photos: Photo[] = [
  { id: 1, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/eb6f0845-23f3-4caf-827e-b96c4d19183d.jpg', category: 'portrait', title: 'Студийный портрет' },
  { id: 2, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/19c5c377-75dd-44cc-91de-0270914c652d.jpg', category: 'wedding', title: 'Свадебная церемония' },
  { id: 3, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/9d07b4d6-6017-4874-9d66-6e093fb283b6.jpg', category: 'reportage', title: 'Репортажная съемка' },
  { id: 4, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/eb6f0845-23f3-4caf-827e-b96c4d19183d.jpg', category: 'studio', title: 'Студия 1' },
  { id: 5, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/19c5c377-75dd-44cc-91de-0270914c652d.jpg', category: 'wedding', title: 'Свадьба 2' },
  { id: 6, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/9d07b4d6-6017-4874-9d66-6e093fb283b6.jpg', category: 'reportage', title: 'Репортаж 2' },
  { id: 7, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/eb6f0845-23f3-4caf-827e-b96c4d19183d.jpg', category: 'portrait', title: 'Портрет 2' },
  { id: 8, url: 'https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/19c5c377-75dd-44cc-91de-0270914c652d.jpg', category: 'studio', title: 'Студия 2' },
];

const services = [
  {
    icon: 'User',
    title: 'Портретная съемка',
    description: 'Индивидуальные и групповые портреты в студии или на локации',
    price: 'от 8 000 ₽'
  },
  {
    icon: 'Heart',
    title: 'Свадебная съемка',
    description: 'Полное сопровождение свадебного дня с обработкой фото',
    price: 'от 50 000 ₽'
  },
  {
    icon: 'Camera',
    title: 'Репортажная съемка',
    description: 'Мероприятия, корпоративы, важные события',
    price: 'от 15 000 ₽'
  },
  {
    icon: 'Sparkles',
    title: 'Студийная съемка',
    description: 'Профессиональная студия с оборудованием и реквизитом',
    price: 'от 10 000 ₽'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const categories = [
    { id: 'all' as PhotoCategory, label: 'Все работы', icon: 'Grid3x3' },
    { id: 'portrait' as PhotoCategory, label: 'Портреты', icon: 'User' },
    { id: 'wedding' as PhotoCategory, label: 'Свадьбы', icon: 'Heart' },
    { id: 'reportage' as PhotoCategory, label: 'Репортаж', icon: 'Camera' },
    { id: 'studio' as PhotoCategory, label: 'Студия', icon: 'Sparkles' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-primary">PHOTO</span>
            <span className="text-secondary">GRAPHY</span>
          </h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <Button className="bg-primary hover:bg-primary/90 text-white">Связаться</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Создаю <span className="text-primary">искусство</span>
            <br />
            через объектив
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Каждый кадр — это история. Профессиональная фотосъемка любой сложности
            с уникальным художественным подходом
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Icon name="ArrowRight" className="mr-2" size={20} />
            Посмотреть работы
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Портфолио
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Избранные работы из моей практики
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white scale-105' 
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name={category.icon} size={18} className="mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredPhoto(photo.id)}
                onMouseLeave={() => setHoveredPhoto(null)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  hoveredPhoto === photo.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300" 
                       style={{ transform: hoveredPhoto === photo.id ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-white text-xl font-semibold mb-2">{photo.title}</h3>
                    <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Широкий спектр фотографических услуг для любых задач
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:bg-card/80 border-border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/3e1044fb-6a09-428d-a588-2f97f2325cbf/files/eb6f0845-23f3-4caf-827e-b96c4d19183d.jpg"
                alt="О фотографе"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Обо мне
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Привет! Я профессиональный фотограф с более чем 10-летним опытом
                  работы в индустрии. Моя страсть — создавать уникальные визуальные
                  истории, которые передают эмоции и атмосферу момента.
                </p>
                <p className="text-lg">
                  Работаю в различных жанрах: от портретной и свадебной фотографии
                  до репортажной и коммерческой съемки. Каждый проект для меня —
                  это возможность реализовать творческий замысел и превзойти ожидания клиента.
                </p>
                <p className="text-lg">
                  Использую профессиональное оборудование и современные техники обработки,
                  чтобы каждый кадр был безупречным. Моя цель — не просто сделать фотографию,
                  а создать произведение искусства.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Написать мне
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-primary">PHOTO</span>
                <span className="text-secondary">GRAPHY</span>
              </h3>
              <p className="text-muted-foreground">
                Профессиональная фотосъемка с художественным подходом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-muted-foreground">
                <a href="#portfolio" className="block hover:text-primary transition-colors">Портфолио</a>
                <a href="#services" className="block hover:text-primary transition-colors">Услуги</a>
                <a href="#about" className="block hover:text-primary transition-colors">Обо мне</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@photography.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <div className="flex gap-3 mt-4">
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Icon name="Instagram" size={18} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Icon name="Facebook" size={18} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Icon name="Twitter" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground pt-8 border-t border-border">
            <p>© 2024 Photography. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
