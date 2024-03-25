export interface CourseInfo {
  courseSeq: number;
  channelSeq: number;
  title: string;
  subTitle: string | null;
  categorySeq: number | null;
  categoryName: string | null;
  price: number;
  priceEx: number;
  discountPriceAmount: number | null;
  categoryTitle: string | null;
  publicCd: string;
  currency: string;
  userLimitTypeCd: string;
  payStartAt: string;
  payEndAt: string;
  maxUserCount: number | null;
  minUserCount: number | null;
  reviewRate: number;
  channelOrd: number;
  createdAt: string;
  linkPackage: boolean;
  reviewCount: number;
  materialPrice: number;
  materialPriceEx: number;
  imageUrl: string;
  attendCount: number;
  acceptCnt: number;
  acceptPercent: number;
  packageAttendCount: number;
  discountPercent: number | null;
  discountPercentEx: number;
  discountPrice: number | null;
  discountPriceEx: number | null;
  likeAt: string | null;
  vodDays: number;
  teachers: Teacher[];
  discountStartAt: string | null;
  discountEndAt: string | null;
  displayCurrency: string;
  introduction: string;
}

interface Teacher {
  userSeq: number;
  siteUserId: string | null;
  courseSeq: number;
  name: string;
  nickname: string;
  email: string;
  profileImageUrl: string;
  userTypeCd: string;
  publicTypeCd: number;
  publicText: string;
  isZoomHost: number;
}

export interface CurriculumInfo {
  liveStartAt: string | null;
  classTime: string | null;
  curriculumSeq: number;
  curriculumType: string | null;
  vodTypeCd: string | null;
  vodPercent: number | null;
  title: string;
  content: string;
  isPublic: string | null;
  curriculumTypeCd: string;
}
