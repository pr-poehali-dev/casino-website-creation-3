import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOnline(hour >= 8 || hour === 0);
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createStars = () => {
      const container = document.getElementById('stars-container');
      if (!container) return;
      
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
      }

      for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDuration = `${3 + Math.random() * 3}s`;
        shootingStar.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(shootingStar);
      }
    };

    createStars();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nftGifts = [
    {
      title: 'Премиум NFT',
      description: 'Эксклюзивные подарки для особых случаев',
      emoji: '💎'
    },
    {
      title: 'Коллекционные',
      description: 'Редкие NFT с уникальным дизайном',
      emoji: '🎨'
    },
    {
      title: 'Праздничные',
      description: 'Специальные NFT для торжеств',
      emoji: '🎉'
    },
    {
      title: 'Тематические',
      description: 'Подарки под любой повод',
      emoji: '🎁'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <div id="stars-container" className="fixed inset-0 z-0" />
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg shadow-primary/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            NFT Gifts
          </h1>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors font-medium"
            >
              О себе
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative pt-20 z-10"
      >
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="text-6xl mb-4 animate-float">🎁</div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              NFT Подарки в Telegram
            </h2>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                <span className="text-sm font-medium">
                  {isOnline ? 'Онлайн' : 'Оффлайн (00:00 - 08:00)'}
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Скупаю и продаю эксклюзивные NFT подарки. Быстро, безопасно, выгодно.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto">
              ⚡ Отвечаю почти сразу после вопроса • Работаю без выходных
            </p>
            <div className="flex gap-4 justify-center pt-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white"
                onClick={() => window.open('https://t.me/immspeedy', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://t.me/+wCu-erwzWmw0NDAy', '_blank')}
                className="border-2 border-secondary hover:bg-secondary hover:text-white"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Отзывы покупателей
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://t.me/ElfIGiftRobot', '_blank')}
                className="border-2 border-primary hover:bg-primary hover:text-white"
              >
                <Icon name="Bot" className="mr-2" size={20} />
                OtsElf
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://t.me/NexusGiftRobot', '_blank')}
                className="border-2 border-accent hover:bg-accent hover:text-white"
              >
                <Icon name="Bot" className="mr-2" size={20} />
                Nexus
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {nftGifts.map((gift, index) => (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 cursor-pointer border-2 border-primary/30 animate-fade-in bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {gift.emoji}
                  </div>
                  <CardTitle className="text-xl">{gift.title}</CardTitle>
                  <CardDescription className="text-base">{gift.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О себе
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-xl hover:shadow-primary/30 transition-shadow animate-fade-in border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💼</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Что я делаю</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Специализируюсь на скупке и продаже NFT подарков в Telegram. 
                      Помогаю найти редкие коллекционные экземпляры и выгодно продать ваши NFT.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl hover:shadow-primary/30 transition-shadow animate-fade-in border-2 border-primary/30 bg-card/50 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Преимущества</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={20} />
                        Быстрые сделки
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={20} />
                        Только проверенные боты
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={20} />
                        Честные цены
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl hover:shadow-primary/30 transition-shadow animate-fade-in border-2 border-primary/30 bg-card/50 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Опыт работы</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Работаю с NFT подарками с момента их появления в Telegram. 
                      Знаю рынок изнутри и слежу за всеми трендами.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl hover:shadow-primary/30 transition-shadow animate-fade-in border-2 border-primary/30 bg-card/50 backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Надёжность</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Провожу сделки только через проверенныхботов OtsElf и Nexus в Telegram. 
                      Все транзакции прозрачны и безопасны.
                    </p>
                    <div className="flex gap-3 mt-4 flex-wrap">
                      <Button 
                        variant="outline"
                        className="border-primary/50 hover:bg-primary hover:text-white"
                        onClick={() => window.open('https://t.me/ElfIGiftRobot', '_blank')}
                      >
                        <Icon name="Bot" className="mr-2" size={18} />
                        OtsElf
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-secondary/50 hover:bg-secondary hover:text-white"
                        onClick={() => window.open('https://t.me/NexusGiftRobot', '_blank')}
                      >
                        <Icon name="Bot" className="mr-2" size={18} />
                        Nexus
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 relative z-10">
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Связаться со мной
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8" />
              <p className="text-xl text-muted-foreground">
                Готов ответить на все ваши вопросы
              </p>
            </div>

            <Card className="p-8 shadow-2xl shadow-primary/30 animate-fade-in border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    className="border-2 focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Telegram</label>
                  <Input 
                    placeholder="@username" 
                    className="border-2 focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, чем могу помочь..."
                    className="min-h-32 border-2 focus:border-secondary resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity text-lg py-6 text-white"
                  size="lg"
                  onClick={() => window.open('https://t.me/immspeedy', '_blank')}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t-2">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Icon name="MessageCircle" className="text-secondary" size={24} />
                  <span className="font-semibold">Telegram:</span>
                  <a 
                    href="https://t.me/immspeedy" 
                    className="text-secondary hover:text-primary transition-colors font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @immspeedy
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-lg font-medium">
            © 2024 NFT Gifts. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;