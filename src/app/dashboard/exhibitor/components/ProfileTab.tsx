import React from 'react';
import {
  Building2,
  Users,
  MapPin,
  Building,
  Award,
  Globe
} from 'lucide-react';
import {
  ExhibitorProfile,
  countries,
  sectorOptions,
  companySizeOptions,
  companyTypeOptions,
  pavilionOptions,
  hallOptions
} from '../types';

interface ProfileTabProps {
  profile: ExhibitorProfile;
  setProfile: React.Dispatch<React.SetStateAction<ExhibitorProfile>>;
  isEditing: boolean;
  handleSectorToggle: (sector: string) => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({
  profile,
  setProfile,
  isEditing,
  handleSectorToggle
}) => {
  return (
    <div className="divide-y">
      {/* Company Information */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Building2 size={20} className="text-blue-600" />
            Company Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.companyName}
                onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter company name"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.companyName || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Name/Acronym
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.shortName}
                onChange={(e) => setProfile({ ...profile, shortName: e.target.value })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., GLS"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.shortName || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registration Number
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.registrationNumber}
                onChange={(e) => setProfile({ ...profile, registrationNumber: e.target.value })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company registration number"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.registrationNumber || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year Established
            </label>
            {isEditing ? (
              <input
                type="number"
                value={profile.yearEstablished}
                onChange={(e) => setProfile({ ...profile, yearEstablished: parseInt(e.target.value) || '' })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.yearEstablished || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size
            </label>
            {isEditing ? (
              <select
                value={profile.companySize}
                onChange={(e) => setProfile({ ...profile, companySize: e.target.value })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select size</option>
                {companySizeOptions.map(size => (
                  <option key={size} value={size}>{size} employees</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.companySize || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Type
            </label>
            {isEditing ? (
              <select
                value={profile.companyType}
                onChange={(e) => setProfile({ ...profile, companyType: e.target.value })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select type</option>
                {companyTypeOptions.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.companyType || 'Not provided'}</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Person */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Users size={20} className="text-blue-600" />
          Contact Person
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.contactPerson.name}
                onChange={(e) => setProfile({
                  ...profile,
                  contactPerson: { ...profile.contactPerson, name: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contact person name"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.contactPerson.name || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.contactPerson.jobTitle}
                onChange={(e) => setProfile({
                  ...profile,
                  contactPerson: { ...profile.contactPerson, jobTitle: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Exhibition Manager"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.contactPerson.jobTitle || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <input
                type="email"
                value={profile.contactPerson.email}
                onChange={(e) => setProfile({
                  ...profile,
                  contactPerson: { ...profile.contactPerson, email: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@company.com"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.contactPerson.email || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={profile.contactPerson.phone}
                onChange={(e) => setProfile({
                  ...profile,
                  contactPerson: { ...profile.contactPerson, phone: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+90 212 555 0123"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.contactPerson.phone || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alternate Phone
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={profile.contactPerson.alternatePhone}
                onChange={(e) => setProfile({
                  ...profile,
                  contactPerson: { ...profile.contactPerson, alternatePhone: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+90 532 555 4567"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.contactPerson.alternatePhone || 'Not provided'}</p>
            )}
          </div>
        </div>
      </div>

      {/* Exhibition Location */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <MapPin size={20} className="text-blue-600" />
          Exhibition Location
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pavilion
            </label>
            {isEditing ? (
              <select
                value={profile.exhibition.pavilion}
                onChange={(e) => setProfile({
                  ...profile,
                  exhibition: { ...profile.exhibition, pavilion: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Pavilion</option>
                {pavilionOptions.map(pavilion => (
                  <option key={pavilion} value={pavilion}>{pavilion}</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.exhibition.pavilion || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hall
            </label>
            {isEditing ? (
              <select
                value={profile.exhibition.hall}
                onChange={(e) => setProfile({
                  ...profile,
                  exhibition: { ...profile.exhibition, hall: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Hall</option>
                {hallOptions.map(hall => (
                  <option key={hall} value={hall}>{hall}</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.exhibition.hall || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stand Number
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.exhibition.standNumber || profile.boothNumber || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  setProfile({
                    ...profile,
                    exhibition: { ...profile.exhibition, standNumber: value },
                    boothNumber: value
                  });
                }}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., A-42"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.exhibition.standNumber || profile.boothNumber || 'Not provided'}</p>
            )}
          </div>
        </div>
      </div>

      {/* Company Address */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Building size={20} className="text-blue-600" />
          Company Address
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.address.street}
                onChange={(e) => setProfile({
                  ...profile,
                  address: { ...profile.address, street: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Street address"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.address.street || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.address.city}
                onChange={(e) => setProfile({
                  ...profile,
                  address: { ...profile.address, city: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="City"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.address.city || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State/Province
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.address.state}
                onChange={(e) => setProfile({
                  ...profile,
                  address: { ...profile.address, state: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="State/Province"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.address.state || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            {isEditing ? (
              <select
                value={profile.address.countryCode}
                onChange={(e) => {
                  const country = countries.find(c => c.code === e.target.value);
                  setProfile({
                    ...profile,
                    address: {
                      ...profile.address,
                      countryCode: e.target.value,
                      country: country?.name || ''
                    }
                  });
                }}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.address.country || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postal Code
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.address.postalCode}
                onChange={(e) => setProfile({
                  ...profile,
                  address: { ...profile.address, postalCode: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Postal code"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.address.postalCode || 'Not provided'}</p>
            )}
          </div>
        </div>
      </div>

      {/* Business Details */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Award size={20} className="text-blue-600" />
          Business Details
        </h2>

        {/* Sectors */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Business Sectors <span className="text-red-500">*</span>
          </label>
          {isEditing ? (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 border rounded-lg">
                {sectorOptions.map(sector => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => handleSectorToggle(sector)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${profile.sector.includes(sector)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                Selected: {profile.sector.length} sectors
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.sector.length > 0 ? (
                profile.sector.map(sector => (
                  <span
                    key={sector}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {sector}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No sectors selected</p>
              )}
            </div>
          )}
        </div>

        {/* About Company */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            About Company <span className="text-red-500">*</span>
          </label>
          {isEditing ? (
            <textarea
              value={profile.about}
              onChange={(e) => setProfile({ ...profile, about: e.target.value })}
              rows={5}
              className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your company, services, history, achievements..."
            />
          ) : (
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {profile.about || 'No description provided'}
            </p>
          )}
        </div>
      </div>

      {/* Social Media */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Globe size={20} className="text-blue-600" />
          Social Media & Website
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            {isEditing ? (
              <input
                type="url"
                value={profile.socialMedia.website}
                onChange={(e) => setProfile({
                  ...profile,
                  socialMedia: { ...profile.socialMedia, website: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://www.example.com"
              />
            ) : (
              <p className="text-gray-900 py-2.5">
                {profile.socialMedia.website ? (
                  <a href={profile.socialMedia.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {profile.socialMedia.website}
                  </a>
                ) : 'Not provided'}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn
            </label>
            {isEditing ? (
              <input
                type="url"
                value={profile.socialMedia.linkedin}
                onChange={(e) => setProfile({
                  ...profile,
                  socialMedia: { ...profile.socialMedia, linkedin: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://linkedin.com/company/..."
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.socialMedia.linkedin || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Twitter
            </label>
            {isEditing ? (
              <input
                type="url"
                value={profile.socialMedia.twitter}
                onChange={(e) => setProfile({
                  ...profile,
                  socialMedia: { ...profile.socialMedia, twitter: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://twitter.com/..."
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.socialMedia.twitter || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facebook
            </label>
            {isEditing ? (
              <input
                type="url"
                value={profile.socialMedia.facebook}
                onChange={(e) => setProfile({
                  ...profile,
                  socialMedia: { ...profile.socialMedia, facebook: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://facebook.com/..."
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.socialMedia.facebook || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instagram
            </label>
            {isEditing ? (
              <input
                type="url"
                value={profile.socialMedia.instagram}
                onChange={(e) => setProfile({
                  ...profile,
                  socialMedia: { ...profile.socialMedia, instagram: e.target.value }
                })}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://instagram.com/..."
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.socialMedia.instagram || 'Not provided'}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
