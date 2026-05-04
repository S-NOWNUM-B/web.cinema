import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaClient } from './generated/prisma/client'

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

const VIDEO_URL = '/demo.mkv'

async function main() {
	await prisma.episode.deleteMany()
	await prisma.series.deleteMany()
	await prisma.season.deleteMany()
	await prisma.genre.deleteMany()

	const sciFi = await prisma.genre.create({
		data: { name: 'Sci-Fi', slug: 'sci-fi' }
	})

	const animation = await prisma.genre.create({
		data: { name: 'Animation', slug: 'animation' }
	})

	await prisma.series.create({
		data: {
			slug: 'the-boys-3',
			title: 'The Boys 3',
			description:
				'Хоумлендер окончательно теряет связь с реальностью, становясь непредсказуемой угрозой для всего мира',
			year: 2019,
			ratingAge: '18+',
			imageUrl: '/images/tb/hero-image.jpg',
			posterUrl: '/images/tb/poster.jpg',
			genres: {
				connect: { id: sciFi.id }
			},
			episodes: {
				create: [
					{
						number: 1,
						title: 'Payback',
						videoUrl: VIDEO_URL,
						durationSec: 3720, // 62m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_1.jpg'
					},
					{
						number: 2,
						title: 'The Only Man In The Sky',
						videoUrl: VIDEO_URL,
						durationSec: 3720, // 62m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_2.jpg'
					},
					{
						number: 3,
						title: 'Barbary Coast',
						videoUrl: VIDEO_URL,
						durationSec: 3660, // 61m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_3.jpg'
					},
					{
						number: 4,
						title: 'Glorious Five Year Plan',
						videoUrl: VIDEO_URL,
						durationSec: 3780, // 63m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_4.jpg'
					},
					{
						number: 5,
						title: 'The Last Time to Look on This World of Lies',
						videoUrl: VIDEO_URL,
						durationSec: 3540, // 59m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_5.jpg'
					},
					{
						number: 6,
						title: 'Herogasm',
						videoUrl: VIDEO_URL,
						durationSec: 3600, // 60m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_6.jpg'
					},
					{
						number: 7,
						title: 'Here Comes a Candle to Light You to Bed',
						videoUrl: VIDEO_URL,
						durationSec: 3660, // 61m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_7.jpg'
					},
					{
						number: 8,
						title: 'The Instant White-Hot Wild',
						videoUrl: VIDEO_URL,
						durationSec: 3960, // 66m
						thumbnailUrl: '/images/tb/season_3/imgi_3_e_1_8.jpg'
					}
				]
			}
		}
	})

	await prisma.series.create({
		data: {
			slug: 'secret-level',
			title: 'Secret Level',
			description:
				'В каждой серии оживают миры самых культовых видеоигр в истории человечества',
			year: 2024,
			ratingAge: '18+',
			imageUrl: '/images/sl/hero-image.jpg',
			posterUrl: '/images/sl/poster.jpg',
			genres: {
				connect: { id: animation.id }
			},
			episodes: {
				create: [
					{
						number: 1,
						title: 'Dungeons & Dragons',
						videoUrl: VIDEO_URL,
						durationSec: 600, // 10m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_1.jpg'
					},
					{
						number: 2,
						title: 'SIFU',
						videoUrl: VIDEO_URL,
						durationSec: 900, // 15m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_2.jpg'
					},
					{
						number: 3,
						title: 'New World',
						videoUrl: VIDEO_URL,
						durationSec: 840, // 14m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_3.jpg'
					},
					{
						number: 4,
						title: 'Unreal Tournament',
						videoUrl: VIDEO_URL,
						durationSec: 840, // 14m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_4.jpg'
					},
					{
						number: 5,
						title: 'Warhammer 40,000',
						videoUrl: VIDEO_URL,
						durationSec: 780, // 13m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_5.jpg'
					},
					{
						number: 6,
						title: 'PAC-MAN',
						videoUrl: VIDEO_URL,
						durationSec: 480, // 8m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_6.jpg'
					},
					{
						number: 7,
						title: 'Armored Core',
						videoUrl: VIDEO_URL,
						durationSec: 1080, // 18m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_7.jpg'
					},
					{
						number: 8,
						title: 'The Outer Worlds',
						videoUrl: VIDEO_URL,
						durationSec: 900, // 15m
						thumbnailUrl: '/images/sl/season_1/imgi_1_e_1_8.jpg'
					}
				]
			}
		}
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
		await pool.end()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		await pool.end()
		process.exit(1)
	})
