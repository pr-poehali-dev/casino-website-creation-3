import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient bg-[length:200%_200%]" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="text-6xl mb-4 animate-float">🎁</div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              NFT Подарки в Telegram
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Скупаю и продаю эксклюзивные NFT подарки. Быстро, безопасно, выгодно.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white"
                onClick={() => scrollToSection('contact')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Связаться в Telegram
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
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 animate-fade-in bg-gradient-to-br from-white to-muted/30"
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

      <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-muted/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О себе
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-xl transition-shadow animate-fade-in border-2">
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

              <Card className="p-8 hover:shadow-xl transition-shadow animate-fade-in border-2" style={{ animationDelay: '0.1s' }}>
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
                        Безопасные транзакции
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={20} />
                        Честные цены
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow animate-fade-in border-2" style={{ animationDelay: '0.2s' }}>
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

              <Card className="p-8 hover:shadow-xl transition-shadow animate-fade-in border-2" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Надёжность</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Работаю напрямую через Telegram, без посредников. 
                      Все сделки прозрачны и безопасны.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-accent/10 to-primary/10" />
        
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

            <Card className="p-8 shadow-2xl animate-fade-in border-2">
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
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t-2">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Icon name="MessageCircle" className="text-secondary" size={24} />
                  <span className="font-semibold">Telegram:</span>
                  <a 
                    href="https://t.me/yournickname" 
                    className="text-secondary hover:text-primary transition-colors font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @yournickname
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
