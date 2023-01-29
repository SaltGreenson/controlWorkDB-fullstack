export interface IPhotoGallery {
  id: string;
  url: string;
  profileId: string;
}

export interface IDashboard {
  id: string;
  address: string;
  companyName: string;
  User: IUser;
  phoneNumber: string;
  PhotoGallery: IPhotoGallery[];
  profilePhoto: string;
  products: IProduct[];
  userId: string;
  websiteLink: string;
}

export interface IUser {
  id: string;
  email: string;
}

export interface IProduct {
  id: string;
  profileId: string;
  description: string;
  quality: string;
  productName: string;
  price: number;
  photoGallery: IPhotoGallery[];
}
