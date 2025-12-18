import { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  Utensils, 
  MapPin, 
  AlertCircle, 
  Globe,
  MessageCircle,
  Heart,
  Calendar,
  Clock,
  Users,
  Wifi,
  CircleCheck,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

// Course modules data
const modules = [
  {
    icon: Plane,
    title: "Аэропорт без стресса",
    description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
    benefit: "Уверенность уже в первые часы за границей."
  },
  {
    icon: Hotel,
    title: "В отеле: заселение и помощь",
    description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
    benefit: "Практика вежливых фраз и повседневной лексики."
  },
  {
    icon: Utensils,
    title: "Кафе и рестораны",
    description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
    benefit: "Развитие гастрономического словаря и уверенности в общении."
  },
  {
    icon: MapPin,
    title: "На улице: ориентирование и просьбы",
    description: "Как спросить дорогу, вызвать такси или найти аптеку.",
    benefit: "Понимание устной речи и произношения в реальных ситуациях."
  },
  {
    icon: AlertCircle,
    title: "Экстренные случаи",
    description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
    benefit: "Важные фразы, которые могут спасти отпуск."
  },
  {
    icon: Globe,
    title: "Туризм и развлечения",
    description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
    benefit: "Погружение в культурный контекст через язык."
  },
  {
    icon: MessageCircle,
    title: "Дружба в путешествиях",
    description: "Как познакомиться с другими детьми или подростками за границей.",
    benefit: "Игровая практика диалогов и неформального общения."
  },
  {
    icon: Heart,
    title: "Дипломный проект: «Мой идеальный отпуск»",
    description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
    benefit: "Развитие связной речи и творческого самовыражения."
  }
];

const features = [
  {
    icon: Sparkles,
    text: "Акцент на практическую, живую речь, а не на грамматику ради грамматики."
  },
  {
    icon: Globe,
    text: "Все ситуации — из реальной жизни путешественника."
  },
  {
    icon: CircleCheck,
    text: "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты."
  },
  {
    icon: Users,
    text: "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс."
  }
];

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleEnroll = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Новый курс</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Курс «Английский для путешествий»
            </h1>

            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, 
              поездках и будущих путешествиях!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnroll}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300"
            >
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-foreground">
              📌 Для кого курс
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Первая группа</h3>
                </div>
                <p className="text-xl text-secondary">4–5 класс</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Вторая группа</h3>
                </div>
                <p className="text-xl text-secondary">6–8 класс</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
              📚 Программа курса
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              8 тематических модулей для уверенного общения в любой ситуации
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <module.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground">{module.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-start gap-2 pt-4 border-t border-border">
                    <span className="text-secondary text-sm">👉</span>
                    <p className="text-sm text-foreground/70 italic">{module.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
              ✨ Почему этот курс особенный?
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 shadow-lg"
                >
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements & Schedule Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">💻 Что потребуется</h2>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Стабильный интернет и Zoom</span>
                </li>
              </ul>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-foreground">🕒 Расписание</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Четверг, 15:00 (МСК)</p>
                    <p className="text-sm text-muted-foreground">группа 4–5 класс</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Пятница, 15:30 (МСК)</p>
                    <p className="text-sm text-muted-foreground">группа 6–8 класс</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
              💳 Стоимость
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-8 shadow-xl"
              >
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Полный курс</p>
                  <p className="text-4xl font-bold text-primary mb-2">12 000 ₽</p>
                  <p className="text-sm text-foreground/70">10 уроков</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border-2 border-border rounded-2xl p-8 shadow-xl"
              >
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Абонемент</p>
                  <p className="text-4xl font-bold text-secondary mb-2">1 300 ₽</p>
                  <p className="text-sm text-foreground/70">за урок</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              📢 Набор открыт!
            </h2>

            <div className="bg-card border border-border rounded-2xl p-8 mb-8 shadow-xl">
              <p className="text-lg text-foreground/80 mb-4">
                Группы маленькие — максимум <span className="text-primary font-semibold">6 детей</span>, 
                чтобы каждый получил внимание.
              </p>
              <p className="text-xl font-semibold text-secondary">Места ограничены!</p>
            </div>

            <p className="text-xl mb-8 text-foreground/80 leading-relaxed">
              👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит 
              по-английски без страха!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnroll}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black px-10 py-5 rounded-xl text-xl shadow-2xl shadow-primary/30 transition-all duration-300"
            >
              Записаться на курс
            </motion.button>

            <p className="mt-6 text-sm text-muted-foreground">
              Оценили 3 человека ⭐⭐⭐⭐⭐
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleCheck className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Отлично!</h3>
              <p className="text-foreground/80 mb-6">
                Для записи на курс свяжитесь с нами по телефону или электронной почте:
              </p>

              <div className="space-y-3 mb-8 text-left bg-muted rounded-lg p-4">
                <p className="text-foreground">
                  <span className="text-muted-foreground">Телефон:</span> +7 (XXX) XXX-XX-XX
                </p>
                <p className="text-foreground">
                  <span className="text-muted-foreground">Email:</span> info@example.com
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg transition-colors"
              >
                Закрыть
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
