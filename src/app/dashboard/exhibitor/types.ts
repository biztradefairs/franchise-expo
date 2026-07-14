// Types and Options for Exhibitor Dashboard

export interface ExhibitorProfile {
  id: string;
  companyName: string;
  shortName: string;
  registrationNumber: string;
  yearEstablished: number | string;
  companySize: string;
  companyType: string;
  contactPerson: {
    name: string;
    jobTitle: string;
    email: string;
    phone: string;
    alternatePhone: string;
  };
  exhibition: {
    pavilion: string;
    hall: string;
    standNumber: string;
    floorPlan?: File | string;
    floorPlanUrl?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    postalCode: string;
  };
  sector: string[];
  about: string;
  mission: string;
  vision: string;
  socialMedia: {
    website: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
  logo?: File | string;
  logoUrl?: string;
  products: Product[];
  brands: Brand[];
  brochures: Brochure[];
  boothNumber?: string;
  boothSize?: string;
  boothType?: string;
  boothDimensions?: string;
  boothNotes?: string;
  boothStatus?: string;
  boothPrice?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  image?: File | string;
  imageUrl?: string;
  specifications: Record<string, string>;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  logo?: File | string;
  logoUrl?: string;
}

export interface Brochure {
  id: string;
  name: string;
  description: string;
  file?: File;
  fileUrl: string;
  fileSize: string;
  downloads: number;
  uploadedAt: Date;
  publicId?: string;
  file_url?: string;
  file_size?: string;
  createdAt?: string;
}

// Metadata interface for additional fields stored in JSON
export interface Metadata {
  [x: string]: any;
  // Company info
  shortName?: string;
  short_name?: string;
  registrationNumber?: string;
  registration_number?: string;
  yearEstablished?: string | number;
  year_established?: string | number;
  companySize?: string;
  company_size?: string;
  companyType?: string;
  company_type?: string;

  // Contact person
  contact_name?: string;
  contact_job_title?: string;
  alternate_phone?: string;
  contactPerson?: {
    name?: string;
    jobTitle?: string;
    email?: string;
    phone?: string;
    alternatePhone?: string;
  };

  // Email and phone (may be in metadata)
  email?: string;
  phone?: string;

  // Exhibition
  pavilion?: string;
  hall?: string;
  boothNumber?: string;
  exhibition?: {
    pavilion?: string;
    hall?: string;
    standNumber?: string;
    floorPlanUrl?: string;
  };

  // Address
  address_street?: string;
  address_city?: string;
  address_state?: string;
  address_country?: string;
  address_country_code?: string;
  address_postal_code?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    countryCode?: string;
    postalCode?: string;
  };

  // Business details
  about?: string;
  mission?: string;
  vision?: string;

  // Social media
  website?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  socialMedia?: {
    website?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };

  // Booth info
  boothSize?: string;
  booth_size?: string;
  boothType?: string;
  booth_type?: string;
  boothDimensions?: string;
  booth_dimensions?: string;
  boothNotes?: string;
  booth_notes?: string;
  boothStatus?: string;
  booth_status?: string;
  boothPrice?: string;
  booth_price?: string;

  // Logo
  logoUrl?: string;

  // Sector
  sector?: string | string[];

  // Floor plan
  floor_plan_url?: string;
}

export interface StallDetails {
  size?: string;
  type?: string;
  dimensions?: string;
  notes?: string;
  price?: string;
  [key: string]: any;
}

// Options arrays
export const countries = [
  { code: 'TR', name: 'Turkey' },
  { code: 'RU', name: 'Russia' },
  { code: 'CN', name: 'China' },
  { code: 'IN', name: 'India' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'AE', name: 'UAE' },
];

export const sectorOptions = [
  'Logistics', 'Supply Chain', 'Freight', 'Technology', 'Manufacturing',
  'Construction', 'Automotive', 'Healthcare', 'Pharmaceutical', 'Food & Beverage',
  'Textile', 'Energy', 'Mining', 'Agriculture', 'Defense', 'Aerospace',
  'Maritime', 'Retail', 'E-commerce', 'Education', 'Finance', 'Consulting',
  'Marketing', 'Real Estate',
];

export const companySizeOptions = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'];
export const companyTypeOptions = ['Private', 'Public', 'Non-Profit', 'Government', 'Partnership', 'Sole Proprietorship'];
export const pavilionOptions = ['Pavilion 1', 'Pavilion 2', 'Pavilion 3', 'Pavilion 4', 'Pavilion 5', 'Pavilion 6', 'Pavilion 7', 'Pavilion 8'];
export const hallOptions = ['Hall A', 'Hall B', 'Hall C', 'Hall D', 'Hall E', 'Hall F', 'Hall G', 'Hall H'];
export const boothTypeOptions = ['Standard', 'Double', 'Corner', 'Island', 'Custom'];
