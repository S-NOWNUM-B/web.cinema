import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaClient } from './generated/prisma/client';

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

const VIDEO_URL = 'videos/demo.mkv';

async function main() {
	// Очистка данных
	await prisma.episode.deleteMany();
	await prisma.series.deleteMany();
	await prisma.season.deleteMany();
	await prisma.genre.deleteMany();

	// Создание жанров
	const sciFi = await prisma.genre.create({
		data: { name: 'Sci-Fi', slug: 'sci-fi' },
	});

	const animation = await prisma.genre.create({
		data: { name: 'Animation', slug: 'animation' },
	});

	// Сериал: The Boys 3
	await prisma.series.create({
		data: {
			slug: 'the-boys-3',
			title: 'The Boys 3',
			description: 'Хоумлендер окончательно теряет связь с реальностью, становясь непредсказуемой угрозой для всего мира',
			year: 2019,
			ratingAge: '18+',
			imageUrl: '/images/tb/hero-image.jpg',
			posterUrl: '/images/tb/poster.jpg',
			genres: {
				connect: { id: sciFi.id },
			},
			seasons: {
				create: [
					{
						number: 3,
						episodes: {
							create: [
								{
									number: 1,
									title: 'Payback',
									videoUrl: VIDEO_URL,
									durationSec: 3720,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_1.jpg',
								},
								{
									number: 2,
									title: 'The Only Man In The Sky',
									videoUrl: VIDEO_URL,
									durationSec: 3720,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_2_1.jpg',
								},
								{
									number: 3,
									title: 'Barbary Coast',
									videoUrl: VIDEO_URL,
									durationSec: 3660,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_3_1.jpg',
								},
								{
									number: 4,
									title: 'Glorious Five Year Plan',
									videoUrl: VIDEO_URL,
									durationSec: 3780,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_4_1.jpg',
								},
								{
									number: 5,
									title: 'The Last Time to Look on This World of Lies',
									videoUrl: VIDEO_URL,
									durationSec: 3540,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_5_1.jpg',
								},
								{
									number: 6,
									title: 'Herogasm',
									videoUrl: VIDEO_URL,
									durationSec: 3600,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_6_1.jpg',
								},
								{
									number: 7,
									title: 'Here Comes a Candle to Light You to Bed',
									videoUrl: VIDEO_URL,
									durationSec: 3660,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_7_1.jpg',
								},
								{
									number: 8,
									title: 'The Instant White-Hot Wild',
									videoUrl: VIDEO_URL,
									durationSec: 3960,
									thumbnailUrl: '/images/tb/season_3/imgi_3_e_8_1.jpg',
								},
							],
						},
					},
				],
			},
		},
	});

	// Сериал: Secret Level
	await prisma.series.create({
		data: {
			slug: 'secret-level',
			title: 'Secret Level',
			description: 'В каждой серии оживают миры самых культовых видеоигр в истории человечества',
			year: 2024,
			ratingAge: '18+',
			imageUrl: '/images/sl/hero-image.jpg',
			posterUrl: '/images/sl/poster.jpg',
			genres: {
				connect: { id: animation.id },
			},
			seasons: {
				create: [
					{
						number: 1,
						episodes: {
							create: [
								{
									number: 1,
									title: 'Dungeons & Dragons',
									videoUrl: VIDEO_URL,
									durationSec: 600,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_1.jpg',
								},
								{
									number: 2,
									title: 'SIFU',
									videoUrl: VIDEO_URL,
									durationSec: 900,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_2_1.jpg',
								},
								{
									number: 3,
									title: 'New World',
									videoUrl: VIDEO_URL,
									durationSec: 840,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_3_1.jpg',
								},
								{
									number: 4,
									title: 'Unreal Tournament',
									videoUrl: VIDEO_URL,
									durationSec: 840,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_4_1.jpg',
								},
								{
									number: 5,
									title: 'Warhammer 40,000',
									videoUrl: VIDEO_URL,
									durationSec: 780,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_5_1.jpg',
								},
								{
									number: 6,
									title: 'PAC-MAN',
									videoUrl: VIDEO_URL,
									durationSec: 480,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_6_1.jpg',
								},
								{
									number: 7,
									title: 'Armored Core',
									videoUrl: VIDEO_URL,
									durationSec: 1080,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_7_1.jpg',
								},
								{
									number: 8,
									title: 'The Outer Worlds',
									videoUrl: VIDEO_URL,
									durationSec: 900,
									thumbnailUrl: '/images/sl/season_1/imgi_1_e_8_1.jpg',
								},
							],
						},
					},
				],
			},
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
		await pool.end();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		await pool.end();
		process.exit(1);
	});
