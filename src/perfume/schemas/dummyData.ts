import { BrandService } from 'src/brand/brand.service';
import { BRANDS_DUMMY } from 'src/brand/chemas/dummyData';
import { CategoryService } from 'src/category/category.service';
import { CATEGORIES_DUMMY } from 'src/category/chemas/dummyData';
import { PerfumeCollectionEnum } from 'src/enums/PerfumeCollection';
import { PerfumeCollectionsService } from 'src/perfume-collections/perfume-collections.service';

export const generateDummyData = async (
  categoryService: CategoryService,
  brandService: BrandService,
  perfumeCollectionService: PerfumeCollectionsService,
) => [
  {
    name: 'Rose Delight',
    description: 'A delightful floral fragrance.',
    prices: [
      { price: 450000, volume: '10ml' },
      { price: 880000, volume: '20ml' },
      { price: 3950000, volume: '100ml' },
    ],
    categoryIds: await Promise.all([
      categoryService.getByName(CATEGORIES_DUMMY[0].name).then((resp) => resp?._id),
      categoryService.getByName(CATEGORIES_DUMMY[1].name).then((resp) => resp?._id),
    ]),
    brandId: await brandService.getByName(BRANDS_DUMMY[0].name).then((resp) => resp?._id),
    collectionId: await perfumeCollectionService
      .getByName(PerfumeCollectionEnum.Female.toString())
      .then((resp) => resp?._id),
    imageUrl: 'https://lanperfume.com/wp-content/uploads/2024/11/fullbox-oddity-naked-dance-3.png',
  },
  {
    name: 'Forest Whisper',
    description: 'A deep woody scent.',
    prices: [
      { price: 450000, volume: '10ml' },
      { price: 880000, volume: '20ml' },
      { price: 3950000, volume: '100ml' },
    ],
    categoryIds: await Promise.all([
      categoryService.getByName(CATEGORIES_DUMMY[1].name).then((resp) => resp?._id),
      categoryService.getByName(CATEGORIES_DUMMY[2].name).then((resp) => resp?._id),
    ]),
    brandId: await brandService.getByName(BRANDS_DUMMY[1].name).then((resp) => resp?._id),
    collectionId: await perfumeCollectionService
      .getByName(PerfumeCollectionEnum.Male.toString())
      .then((resp) => resp?._id),
    imageUrl: 'https://lanperfume.com/wp-content/uploads/2024/11/fullbox-exnihilo-fleur-narcotique-3.png',
  },
  {
    name: 'Citrus Burst',
    description: 'A refreshing citrus aroma.',
    prices: [
      { price: 450000, volume: '10ml' },
      { price: 880000, volume: '20ml' },
      { price: 3950000, volume: '100ml' },
    ],
    categoryIds: await Promise.all([
      categoryService.getByName(CATEGORIES_DUMMY[0].name).then((resp) => resp?._id),
      categoryService.getByName(CATEGORIES_DUMMY[2].name).then((resp) => resp?._id),
    ]),
    brandId: await brandService.getByName(BRANDS_DUMMY[2].name).then((resp) => resp?._id),
    collectionId: await perfumeCollectionService
      .getByName(PerfumeCollectionEnum.Unisex.toString())
      .then((resp) => resp?._id),
    imageUrl: 'https://lanperfume.com/wp-content/uploads/2024/11/fullbox-exnihilo-fleur-narcotique-3.png',
  },
];
