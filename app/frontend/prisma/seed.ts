import { PrismaPg } from '@prisma/adapter-pg'; // Импорт адаптера для PostgreSQL
import { PrismaClient } from './generated/prisma/client'; // Импорт сгенерированного клиента Prisma для взаимодействия с базой данных

// Функция для создания экземпляра PrismaClient с использованием адаптера PostgreSQL
function createPrismaClient() {
	const connectionString = process.env.DATABASE_URL; // Получаем строку подключения к базе данных из переменных окружения

	if (!connectionString) {
		throw new Error('DATABASE_URL is not set'); // Если строка подключения не установлена, выбрасываем ошибку
	}

	return new PrismaClient({
		adapter: new PrismaPg(connectionString), // Создаем новый экземпляр PrismaClient с адаптером PostgreSQL, используя строку подключения
	});
}

const prisma = createPrismaClient(); // Создаем экземпляр PrismaClient, который будет использоваться для взаимодействия с базой данных

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }; // Создаем глобальную переменную для хранения экземпляра PrismaClient, чтобы избежать создания нескольких экземпляров при горячей перезагрузке в разработке

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; // В режиме разработки сохраняем экземпляр PrismaClient в глобальной переменной, чтобы избежать создания нескольких экземпляров при горячей перезагрузке
 
export default prisma; // Экспортируем экземпляр PrismaClient для использования в других частях приложения